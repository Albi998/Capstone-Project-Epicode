import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
    selector: 'app-password-recovery',
    templateUrl: './password-recovery.component.html',
    styleUrls: ['./password-recovery.component.scss'],
})
export class PasswordRecoveryComponent implements OnInit {
    recoverUser: FormGroup;
    loading: boolean = false;

    constructor(
        private fb: FormBuilder,
        private afAuth: AngularFireAuth,
        private router: Router,
        private firebaseError: FirebaseErrorService
    ) {
        this.recoverUser = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }

    ngOnInit(): void {}

    recover() {
        const email = this.recoverUser.value.email;

        this.loading = true;
        this.afAuth
            .sendPasswordResetEmail(email)
            .then(() => {
                alert('Email sent!')
                this.router.navigate(['/login']);
            })
            .catch((error) => {
                this.loading = false;
                alert(this.firebaseError.codeError(error.code));
            });
    }
}
