import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Cart } from '../models/cart';
import { Favorites } from '../models/favorites';
import { Nft } from '../models/nfts';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    cartData = new EventEmitter<Nft[] | []>()
    constructor(
        private http: HttpClient,
        private auth: AuthService
    ) { }

    insertClient(url: string, body: {}) {
        return this.http.post(url, body)
    }

    getClient(url: string) {
        return this.http.get(`${url}?auth=${this.auth.user.token}`)
    }



}
