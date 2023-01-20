import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admins } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
    selector: 'app-admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

    adminLogin: FormGroup;
    authError: String = '';

    constructor(private admin: AdminService, private fb: FormBuilder) {
        this.adminLogin = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit(): void {
        this.admin.reloadAdmin()
    }



    signUp(data: Admins): void {
        // console.warn(data)
        this.admin.adminSignUp(data)
    }

    login(data: Admins): void {
        this.admin.adminLogin(data)
        this.admin.isLoginError.subscribe((error) => {
            if (error) {
                this.authError = 'Email or password is not correct'
            }
        })
    }

}
