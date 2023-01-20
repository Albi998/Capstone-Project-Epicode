import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import { Nft } from '../models/nfts';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(
        private http: HttpClient,
        private auth: AuthService
    ) { }

    insertClient(url: string, body: {}) {
        return this.http.post(url, body)
    }

    getClient(url: string) {
        return this.http.get(url)
        // return this.http.get(`${url}?auth=${this.auth.user.token}`)
    }

    deleteClient(url: string, id: string) {
        return this.http.delete(`${url}/${id}.json`)
    }



}
