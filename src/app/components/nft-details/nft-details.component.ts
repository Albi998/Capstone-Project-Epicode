import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nft } from 'src/app/models/nfts';
import { NftsService } from 'src/app/services/nfts.service';


@Component({
    selector: 'app-nft-details',
    templateUrl: './nft-details.component.html',
    styleUrls: ['./nft-details.component.scss']
})
export class NftDetailsComponent implements OnInit {
    getNft: any | Nft
    constructor(
        private activeRoute: ActivatedRoute,
        private nft: NftsService,
        private router: Router,
    ) { }

    ngOnInit(): void {

        let nftDna = this.activeRoute.snapshot.paramMap.get('dna')
        console.log(nftDna);
        nftDna && this.nft.getNft(nftDna).subscribe((res: any) => {
            console.log(res)
            this.getNft = res
        })
    }

    addToCart() {
        if (this.getNft) {
            if (!localStorage.getItem('user')) {
                this.nft.localAddToCart(this.getNft)
            }
            // console.log(this.getNft)
        }

    }

}
