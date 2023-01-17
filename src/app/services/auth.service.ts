import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    user!: User
    isLoggedIn = true
    isAdmin = true
    APIKey = 'AIzaSyBYBfG_xju0WSUqqcSgxQVgJiopgvRtfLQ'
    signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`
    signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`
    constructor(private http: HttpClient) { }

    createUser(email: string, uid: string, token: string, expirationDate: Date ) {
        this.user = new User(email, uid, token, expirationDate)
        this.isLoggedIn = true
    }

    signIn(email: string, password: string) {
        return this.http.post(this.signInUrl, {email: email, password: password, returnSecureToken: true })
    }



    logout() {
        this.isLoggedIn = false
        // this.user = null
        localStorage.removeItem('user')
    }
}
