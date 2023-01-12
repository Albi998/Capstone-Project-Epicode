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

    // getNfts() {
    //     this.http.get<Nft[]>('https://63bd1526fa38d30d85d88179.mockapi.io/NFT/v1/metadata')
    // }

    getNft(dna: string) {
        // this.loading = true;
        return this.http.get<Nft[]>(`https://63bd1526fa38d30d85d88179.mockapi.io/NFT/v1/metadata/${dna}`)
        // .subscribe((data) => {
        //     this.nfts = data
        // })

    }
}
