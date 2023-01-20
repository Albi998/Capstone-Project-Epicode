import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Nft } from 'src/app/models/nfts';
import { NftsService } from 'src/app/services/nfts.service';

@Component({
    selector: 'app-manage-nfts',
    templateUrl: './manage-nfts.component.html',
    styleUrls: ['./manage-nfts.component.scss']
})
export class ManageNftsComponent implements OnInit {

    nfts: any

    constructor(
        private router: Router,
        private nft: NftsService,
        private http: HttpClient

    ) { }

    ngOnInit(): void {

        this.getNfts()

    }

    getNfts() {

        this.http.get('https://63bd1526fa38d30d85d88179.mockapi.io/NFT/v1/metadata').subscribe((data) => {
            this.nfts = data
            // console.log(this.nfts);

        })

    }

    logout() {
        localStorage.removeItem('admin')
        this.router.navigate(['/dashboard'])
    }

}
