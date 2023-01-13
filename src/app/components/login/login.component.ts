import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
    loginUser: FormGroup;
    loading: boolean = false;



    constructor(
        private fb: FormBuilder,
        private afAuth: AngularFireAuth,
        private router: Router,
        private firebaseError: FirebaseErrorService,
        private auth: AuthService
    ) {
        this.loginUser = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit(): void {}

    // login() {
    //     if (this.email == '') {
    //         alert('Please enter a correct email');
    //         return;
    //     }
    //     if (this.password == '') {
    //         alert('Please enter a correct passwors');
    //         return;
    //     }
    //     this.auth.login(this.email, this.password)
    //     this.email = '';
    //     this.password = '';
    // }

    login() {
        const email = this.loginUser.value.email;
        const password = this.loginUser.value.password;

        // console.log(email, password);
        this.loading = true;
        this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                localStorage.setItem('user', 'true');
                if (user.user?.emailVerified) {
                    this.router.navigate(['/dashboard']);
                } else {
                    this.router.navigate(['/verify-email']);
                }
            })
            .catch((error) => {
                this.loading = false;
                alert(this.firebaseError.codeError(error.code));
            });
    }
}
