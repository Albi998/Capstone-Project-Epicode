import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-marketplace',
    templateUrl: './marketplace.component.html',
    styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
    // loading: boolean = false;
    nfts: any
    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {

        this.getNfts()

    }

    getNfts() {
        // this.loading = true;
        this.http.get('https://63bd1526fa38d30d85d88179.mockapi.io/NFT/v1/metadata').subscribe((data) => {
            this.nfts = data
        })

    }

}
