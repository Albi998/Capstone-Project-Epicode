import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {
    constructor(private http: HttpClient, private authService: AuthService) {}

    insertUser(url: string, body: {}) {
        return this.http.post(url, body);
    }

    // getUser(url: string) {
    //     return this.http.get(url);
    // }

    getUsers(url: string) {
        return this.http.get(`${url}?auth=${this.authService.user.token}`);
    }

    deleteUser(url: string, id: string) {
        // console.log(`${url}/${id}.json`);
        return this.http.delete(`${url}/${id}.json`);
    }
}
