import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nft } from '../models/nfts';


@Injectable({
    providedIn: 'root'
})
export class NftsService {

    nfts: any
    constructor(private http: HttpClient) {

    }

    getNft(dna: string) {

        return this.http.get<Nft[]>(`https://63bd1526fa38d30d85d88179.mockapi.io/NFT/v1/metadata/${dna}`)

    }

    localAddToCart(res: any) {
        let cartData = [];
        let localCart = localStorage.getItem('localCart')
        if (!localCart){
            localStorage.setItem('localCart', JSON.stringify(([res])))
        } else {
            cartData = JSON.parse(localCart)
            cartData.push(res)
            localStorage.setItem('localCart', JSON.stringify(cartData))
        }
    }
}
