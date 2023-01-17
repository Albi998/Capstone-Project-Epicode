import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NftsService } from 'src/app/services/nfts.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    dataUser: any;
    cartItems = 0;
    // isLoggedIn = true
    // isAdmin = true
    showLogin = false;

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private nftSrv: NftsService,
        private auth: AuthService,
        private firebase: FirebaseService
    ) { }

    ngOnInit(): void {
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
        // this.showLogin = true
        this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            // localStorage.removeItem('localCart');
            this.router.navigate(['/login']);
            // this.showLogin = false
        });


        // openSignUp(){
        //     this.showLogin = false
        // }
        // openLogin(){
        //     this.showLogin = true;
        // }
    }

    login() {
        this.router.navigate(['/login']);
    }

    cartPage() {
        // this.afAuth.currentUser.then((user) => {
        //     if (user && user.emailVerified) {
        //         this.dataUser = user;
        //     } else {
        //         this.router.navigate(['/login']);
        //     }
        // });
    }


}
