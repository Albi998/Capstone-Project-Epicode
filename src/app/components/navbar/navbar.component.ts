import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


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
    ) {}

    ngOnInit(): void {

    }

    logout() {
        this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['/login']);
        });


    }
}
