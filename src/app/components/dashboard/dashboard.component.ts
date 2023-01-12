import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    homeform!: FormGroup
    nfts: any;
    randomIndex = 0;

    constructor(
        private firebase: FirebaseService,
        private http: HttpClient,
    ) {

    }

    ngOnInit(): void {
        this.getNfts()
        this.homeform = new FormGroup({
            email: new FormControl(null, Validators.email)
        })
    }

    //Chiamata a mockAPI

    getNfts() {
        this.http.get('https://63bd1526fa38d30d85d88179.mockapi.io/NFT/v1/metadata').subscribe((data) => {
            this.nfts = data
            this.randomIndex = Math.floor(Math.random() * this.nfts.length)
        })
    }

    // Iscriviti alla Newsletter

    onSubmit() {
        console.log(this.homeform)
        this.firebase.insertClient(
            'https://capstone-register-login-default-rtdb.europe-west1.firebasedatabase.app/clients.json',
            { email: this.homeform?.value.email })
            .subscribe(data => {
                console.log(data)
            })

    }

}
