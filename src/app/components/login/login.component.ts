import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NftsService } from 'src/app/services/nfts.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Nft } from 'src/app/models/nfts';
// import { FirebaseErrorService } from 'src/app/services/firebase-error.service';
// import { FirebaseService } from 'src/app/services/firebase.service';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { User } from 'src/app/models/user';


// import { getAuth } from "firebase/auth";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
    loginUser: FormGroup;
    loading: boolean = false;
    // showLogin: boolean = true;
    getNft: any | Nft


    constructor(
        // private firebaseError: FirebaseErrorService,
        // private afAuth: AngularFireAuth,
        // private firebase: FirebaseService,
        private fb: FormBuilder,
        private router: Router,
        private auth: AuthService,
        private nft: NftsService
    ) {
        this.loginUser = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit(): void {

    }



    login() {
        const email = this.loginUser.value.email;
        const password = this.loginUser.value.password;

        this.loading = true;
        this.auth
            .signIn(email, password)
            .subscribe((data: any) => {

                // console.log(data)
                const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
                this.auth.createUser(data.email, data.localId, data.idToken, data.expiresIn)
                localStorage.setItem('user', JSON.stringify(this.auth.user))
                localStorage.removeItem('admin')
                // console.log(this.auth.user)
                this.router.navigate(['/dashboard']);
            })
        setTimeout(() => {
            this.localCartToRemoteCart()
        }, 1000);
        // this.showLogin = false;
    }

    localCartToRemoteCart() {
        let data = localStorage.getItem('localCart');
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).uid;
        console.log(userId)
        if (data) {
            let cartDataList: Nft[] = JSON.parse(data);

            cartDataList.forEach((nft: Nft, index) => {
                let cartData: Cart = {
                    ...nft,
                    dna: nft.dna,
                    userId: userId
                }
                console.log(cartData)
                // delete cartData.dna;
                setTimeout(() => {
                    this.nft.addToCart('https://63c5e18be1292e5bea2c33c3.mockapi.io/api/v2/cart',
                        cartData).subscribe((result) => {
                            if (result) {
                                console.warn("data is stored in DB");
                            }
                        })
                }, 500);
                if (cartDataList.length === index + 1) {
                    localStorage.removeItem('localCart')
                }
            })
        }


        setTimeout(() => {
            this.nft.getCartList(userId)
        }, 2000);

    }

}

