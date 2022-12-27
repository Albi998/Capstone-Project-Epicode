import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { empty } from 'rxjs';
import { User } from '../modelli/user.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // Signup utilizzando Firebase authentication
    // URL da: => https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
    // API Key da https://console.firebase.google.com/u/0/project/nft-api-4b284/settings/general

    APIKey = 'AIzaSyBKAMwKJ5Y1uuyq_y6H5O4j1cvKhtASLWI';

    signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`;
    logInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`;
    isLoggedIn = false;
    isAdmin = false;
    user: User;

    constructor(private http: HttpClient, private router: Router) {}

    isAuthenticated() {
        return this.isLoggedIn;
    }

    roleAdmin() {
        return this.isAdmin;
    }

    createUser(email: string, id: string, token: string, expirationDate: Date) {
        this.user = new User(email, id, token, expirationDate);
        this.isLoggedIn = true;
    }

    signUp(email: string, password: string) {
        return this.http.post(this.signUpUrl, {
            email: email,
            password: password,
            returnSecureToken: true,
        });
    }

    logIn(email: string, password: string) {
        return this.http.post(this.logInUrl, {
            email: email,
            password: password,
            returnSecureToken: true,
        });
    }

    logOut() {
        this.isLoggedIn = false;
        // this.user = null;
        localStorage.removeItem('user');
        this.router.navigate(['login']);
    }
}
