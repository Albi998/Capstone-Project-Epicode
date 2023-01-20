import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nft } from 'src/app/models/nfts';
import { NftsService } from 'src/app/services/nfts.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Cart } from 'src/app/models/cart';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Favorites } from 'src/app/models/favorites';


@Component({
    selector: 'app-nft-details',
    templateUrl: './nft-details.component.html',
    styleUrls: ['./nft-details.component.scss']
})
export class NftDetailsComponent implements OnInit {
    removeFromCart() {
        throw new Error('Method not implemented.');
    }
    removeLike = false
    getNft: any | Nft
    removeCart = false
    cartData: Nft | undefined
    favoritesData: Nft | undefined
    constructor(
        private activeRoute: ActivatedRoute,
        private nft: NftsService,
        private router: Router,
        private firebase: FirebaseService
    ) { }



    ngOnInit(): void {

        let nftDna = this.activeRoute.snapshot.paramMap.get('dna')
        // console.log(nftDna);
        nftDna && this.nft.getNft(nftDna).subscribe((res: any) => {
            this.getNft = res
            let nftDna = this.activeRoute.snapshot.paramMap.get('dna')
            let cartData = localStorage.getItem('localCart')
            if (nftDna && cartData) {
                let items = JSON.parse(cartData)
                items = items.filter((item: Nft) => nftDna === item.dna.toString())
                console.warn('items', items)
                if (items.length) {
                    this.removeCart = true
                }
                else { this.removeCart = false }
            }

            let user = localStorage.getItem('user')
            if (user) {
                let userId = user && JSON.parse(user).uid
                this.nft.getCartList(userId)

                this.nft.cartData.subscribe((result) => {
                    let item = result.filter((item: Nft) => nftDna?.toString() === item.dna.toString())
                    if (item.length) {
                        this.cartData = item[0];
                        this.removeCart = true
                    }
                })
            }

        })

    }


    addToCart() {
        if(localStorage.getItem('admin')) {
            this.router.navigate(['/login'])
        }
        if (this.getNft) {
            if (!localStorage.getItem('user')) {
                this.nft.localAddToCart(this.getNft)
                this.removeCart = true
            } else {
                // console.warn('user is logged in')
                let user = localStorage.getItem('user')
                let userId = user && JSON.parse(user).uid
                // console.warn(userId)
                let cartData: Cart = {
                    ...this.getNft,
                    nftId: this.getNft.dna,
                    userId
                }
                console.log(cartData)
                this.nft.addToCart(
                    'https://63c5e18be1292e5bea2c33c3.mockapi.io/api/v2/cart', cartData
                ).subscribe(result => {
                    if (result) {
                        this.nft.getCartList(userId)
                        this.removeCart = true
                    }
                })
            }

        }

    }


    removeToCart(nftDna: string) {
        if (!localStorage.getItem('user')) {
            this.nft.removeItemFromCart(nftDna)
            this.removeCart = false
        } else {
            console.log('cart data', this.cartData)

            this.cartData && this.nft.removeToCart(this.cartData.id)
            .subscribe((result) => {
                // console.log(result)
                let user = localStorage.getItem('user')
                let userId = user && JSON.parse(user).uid
                this.nft.getCartList(userId)


            })
        }

        this.removeCart = false

    }

    addFavorites() {
        // if(localStorage.getItem('admin')) {
        //     this.router.navigate(['/login'])
        // }
        // if(!localStorage.getItem('user')) {
        //     this.router.navigate(['/login'])
        // } else {if (this.getNft) {
        //     if (localStorage.getItem('user')) {
        //         this.nft.localAddToFavorites(this.getNft)
        //         this.removeLike = true
        //     } else {
        //         console.warn('user is logged in')
        //         let user = localStorage.getItem('user')
        //         let userId = user && JSON.parse(user).uid
        //         console.warn(userId)
        //         let favoritesData: Favorites = {
        //             ...this.getNft,
        //             productId: this.getNft.dna,
        //             userId

        //         }
        //         console.log(favoritesData)
        //         this.nft.addFavorites(
        //             'https://63c6dcabdcdc478e15cb18f7.mockapi.io/api/v3/favorites', favoritesData
        //         ).subscribe(result => {
        //             if (result) {
        //                 this.nft.getFavoritesList(userId)
        //                 this.removeLike = true
        //             }
        //         })
        //     }

        // }}

    }

    deleteFavorites(nftDna: string) {
        // if (!localStorage.getItem('user')) {
        //     this.nft.removeItemFromFavorites(nftDna)
        //     this.removeLike = false
        // } else {
        //     console.log('cart data', this.cartData)

        //     this.cartData && this.nft.removeFavorite(this.cartData.id)
        //     .subscribe((result) => {
        //         // console.log(result)
        //         let user = localStorage.getItem('user')
        //         let userId = user && JSON.parse(user).uid
        //         this.nft.getFavoritesList(userId)


        //     })
        // }

        // this.removeLike = false

    }
}
