import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerUser: FormGroup;
    loading: boolean = false;
    constructor(
        private fb: FormBuilder,
        private afAuth: AngularFireAuth,
        private router: Router,
        private firebaseError: FirebaseErrorService,
        private auth: AuthService
    ) {
        this.registerUser = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            repeatPassword: ['', Validators.required],
        });
    }
    ngOnInit(): void {}

    // register() {
    //     if (this.email == '') {
    //         alert('Please enter an email');
    //         return;
    //     }
    //     if (this.password == '') {
    //         alert('Please enter an email');
    //         return;
    //     }
    //     this.auth.register(this.email, this.password)
    //     this.email = '';
    //     this.password = '';
    // }

    register() {
        const email = this.registerUser.value.email;
        const password = this.registerUser.value.password;
        const repeatPassword = this.registerUser.value.repeatPassword;
        if (password != repeatPassword) {
            alert('Passwords do not match');
            return;
        }
        this.loading = true;
        this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.loading = false;
                this.emailVerification();
            })
            .catch((error) => {
                this.loading = false;
                // console.log(error);
                alert(this.firebaseError.codeError(error.code));
            });
    }
    emailVerification() {
        this.afAuth.currentUser
            .then((user) => user?.sendEmailVerification())
            .then(() => {
                alert('We sent an email for verification');
                this.router.navigate(['/login']);
            });
    }
}
