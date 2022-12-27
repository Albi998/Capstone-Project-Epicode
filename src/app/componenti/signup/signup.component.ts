import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    constructor(private authService: AuthService) {}

    ngOnInit(): void {}

    onSubmit(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        //chiamare authservice
        this.authService.signUp(email, password).subscribe((data) => {
            console.log(data);
        });
        form.reset();
    }
}
