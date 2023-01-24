import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart, Total } from 'src/app/models/cart';
import { Nft } from 'src/app/models/nfts';
import { NftsService } from 'src/app/services/nfts.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    getNft: any | Nft
    cartData: Cart[] | undefined
    cartTotal: Total = {
        price: 0,
        tax: 0,
        total: 0
    }

    constructor(
        private nft: NftsService,
        private activeRoute: ActivatedRoute,
        private router: Router,
    ) {

    }

    ngOnInit(): void {
        this.loadDetails()
        // this.clearCart()
    }

    removeToCart(userId: string | undefined) {
        userId && this.cartData && this.nft.removeToCart(userId)
            .subscribe((result) => {

                this.loadDetails()

            })
    }

    clearCart() {

    }


    loadDetails() {
        this.nft.currentCart().subscribe((result) => {
            this.cartData = result
            // console.warn(this.cartData)
            let price = 0
            result.forEach((item) => {
                price = price + (item.price * 1.02)
            })

            // console.log(price);
            this.cartTotal.price = price

            if(!this.cartData.length) {
                this.router.navigate(['/dashboard'])
            }

        })
    }

}
