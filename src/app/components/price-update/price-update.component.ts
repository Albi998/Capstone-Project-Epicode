import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Nft } from 'src/app/models/nfts';
import { NftsService } from 'src/app/services/nfts.service';

@Component({
    selector: 'app-price-update',
    templateUrl: './price-update.component.html',
    styleUrls: ['./price-update.component.scss']
})
export class PriceUpdateComponent implements OnInit {

    // priceUpdate!: FormGroup;
    updateMessage!: undefined | string;
    getNft: any | Nft;
body: any

    constructor(
        private router: Router,
        private nft: NftsService,
        private activeRoute: ActivatedRoute) { }

    ngOnInit(): void {
        let nftDna = this.activeRoute.snapshot.paramMap.get('dna')
        // console.log(nftDna);
        nftDna && this.nft.getNft(nftDna).subscribe((res: any) => {
            this.getNft = res
            console.log(this.getNft.dna)

        })

    }

    submit(data: any) {

        // console.warn(data);

        if (this.getNft) {
            data.dna = this.getNft.dna

        }
        // console.warn(data);
        this.nft.updatePrice(data).subscribe((res) => {
            console.log(res);

        })

        alert('Price succesfully updated!')
        this.router.navigate(['/manage-nfts'])

    }


    logout() {
        localStorage.removeItem('admin')
        this.router.navigate(['/dashboard'])
    }


}
