import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { NftsService } from 'src/app/services/nfts.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    dataUser: any;
    cartItems = 0;
    showLogin = false;
    showCart = false;

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private nftSrv: NftsService

    ) { }

    ngOnInit(): void {

        if (localStorage.getItem('admin')) {
            this.showCart = true
        } else {
            this.showCart = false
        }

        if (!localStorage.getItem('user')) {
            this.showLogin = true
        } else {
            this.showLogin = false
        }

        let cartData = localStorage.getItem('localCart')

        if (cartData) {
            this.cartItems = JSON.parse(cartData).length
        }
        this.nftSrv.cartData.subscribe((items) => {
            this.cartItems = items.length
        })
        let user = localStorage.getItem('user')
        let userId = user && JSON.parse(user).uid
        this.nftSrv.getCartList(userId)
    }

    logout() {

        this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['/login']);
        });
    }

    login() {

        this.router.navigate(['/login']);
    }

    cartPage() {
        let user = localStorage.getItem('user')
        // console.log(user)
        if (user) {
            this.dataUser = user
        } else {
            this.router.navigate(['/login']);
        }
    }


}
