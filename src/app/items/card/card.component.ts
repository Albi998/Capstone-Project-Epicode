import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    nfts: any
    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
        this.getNfts()
    }

    getNfts() {
        this.http.get('https://63bd1526fa38d30d85d88179.mockapi.io/NFT/v1/metadata').subscribe((data) => {
            this.nfts = data
        })
    }


}
