import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    dataUser: any;

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private auth: AuthService
    ) {}

    ngOnInit(): void {
        // this.afAuth.currentUser.then((user) => {
        //     if (user && user.emailVerified) {
        //         this.dataUser = user;
        //     } else {
        //         this.router.navigate(['/login']);
        //     }
        // });
    }

    logout() {
        this.afAuth.signOut().then(() => {
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
        });

        // LogOut() {
        //     this.afAuth.signOut().then(() => this.router.navigate(['/login']));
        // }
    }
}