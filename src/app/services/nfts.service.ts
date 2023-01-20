import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { Favorites } from '../models/favorites';
import { Nft } from '../models/nfts';


@Injectable({
    providedIn: 'root'
})
export class NftsService {

    nfts: any
    cartData = new EventEmitter<Nft[] | []>()
    favoritesData = new EventEmitter<Nft[] | []>()

    constructor(private http: HttpClient) {

    }

    getNft(dna: string) {
        return this.http.get<Nft[]>(`https://63bd1526fa38d30d85d88179.mockapi.io/NFT/v1/metadata/${dna}`)
    }

    // CART

    localAddToCart(res: any) {
        let cartData = [];
        let localCart = localStorage.getItem('localCart')
        if (!localCart) {
            localStorage.setItem('localCart', JSON.stringify(([res])))
            this.cartData.emit([res])
        } else {
            cartData = JSON.parse(localCart)
            cartData.push(res)
            localStorage.setItem('localCart', JSON.stringify(cartData))
            this.cartData.emit(cartData)
        }
    }

    addToCart(url: string, cartData: Cart) {
        return this.http.post(url, cartData)
    }



    removeItemFromCart(nftDna: any) {
        let cartData = localStorage.getItem('localCart')
        if (cartData) {
            let items: Nft[] = JSON.parse(cartData)
            items = items.filter((item: Nft) => nftDna !== item.dna)
            localStorage.setItem('localCart', JSON.stringify(items))
            this.cartData.emit(items)

        }
    }

    getCartList(userId: string) {
        return this.http.get<Nft[]>(`https://63c5e18be1292e5bea2c33c3.mockapi.io/api/v2/cart?userId=${userId}`, {
            observe: 'response'
        }).subscribe((result) => {
            if (result && result.body) {
                this.cartData.emit(result.body)
                // console.log(result.body)
            }
        })
    }

    removeToCart(userId: string) {
        return this.http.delete(`https://63c5e18be1292e5bea2c33c3.mockapi.io/api/v2/cart/${userId}`)
    }

    currentCart() {
        let user = localStorage.getItem('user')
        let userId = user && JSON.parse(user).uid
        return this.http.get<Cart[]>(`https://63c5e18be1292e5bea2c33c3.mockapi.io/api/v2/cart?userId=${userId}`)
    }



    // FAVORITES

    // localAddToFavorites(res: any) {
    //     let favoritesData = [];
    //     let localFavorites = localStorage.getItem('localFavorites')
    //     if (!localFavorites) {
    //         localStorage.setItem('localFavorites', JSON.stringify(([res])))
    //         this.cartData.emit([res])
    //     } else {
    //         favoritesData = JSON.parse(localFavorites)
    //         favoritesData.push(res)
    //         localStorage.setItem('localFavorites', JSON.stringify(favoritesData))
    //         this.cartData.emit(favoritesData)
    //     }
    // }

    // addFavorites(url: string, favoritesData: Favorites) {
    //     return this.http.post(url, favoritesData)
    // }

    // removeItemFromFavorites(nftDna: any) {
    //     let favoritesData = localStorage.getItem('localFavorites')
    //     if (favoritesData) {
    //         let items: Nft[] = JSON.parse(favoritesData)
    //         items = items.filter((item: Nft) => nftDna !== item.dna)
    //         localStorage.setItem('localFavorites', JSON.stringify(items))
    //         this.favoritesData.emit(items)

    //     }
    // }



    // getFavoritesList(userId: string) {
    //     return this.http.get<Nft[]>(`https://63c6dcabdcdc478e15cb18f7.mockapi.io/api/v3/favorites?userId=${userId}`, {
    //         observe: 'response'
    //     }).subscribe((result) => {
    //         if (result && result.body) {
    //             this.favoritesData.emit(result.body)
    //             // console.log(result.body)
    //         }
    //     })
    // }



    // removeFavorite(userId: string) {
    //     return this.http.delete(`https://63c6dcabdcdc478e15cb18f7.mockapi.io/api/v3/favorites/${userId}`)
    // }

    // CHANGE PRICE

    updatePrice(nft: Nft) {
        return this.http.put<Nft>(`https://63bd1526fa38d30d85d88179.mockapi.io/NFT/v1/metadata/${nft.dna}`, nft)
    }

}
