import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    homeform!: FormGroup
    constructor(private firebase: FirebaseService) {

    }

    ngOnInit(): void {
        this.homeform = new FormGroup({
            email: new FormControl(null, Validators.email)
        })
    }

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
