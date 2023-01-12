import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        private nft: NftsService
    ) { }

    ngOnInit(): void {
        // this.nft.getNfts().subscribe((res) => {
        //     console.log(res)
        //     if (res) {
        //         this.getNfts = res
        //     }
        // })

        let nftDna = this.activeRoute.snapshot.paramMap.get('dna')
        console.log(nftDna);
        nftDna && this.nft.getNft(nftDna).subscribe((res: any) => {
            console.log(res)
            this.getNft = res
        })
    }

}
