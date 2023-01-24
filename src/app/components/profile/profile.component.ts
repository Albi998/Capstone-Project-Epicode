import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    thisUser: any

    dataUser: any;

    constructor(
        private activeRoute: ActivatedRoute,
        private afAuth: AngularFireAuth,
        private router: Router,
        private auth: AuthService
        ) { }

    ngOnInit(): void {
        let user: any = localStorage.getItem('user')
        // console.log(user)
        if(user) {
            this.dataUser = user
        } else {
            this.router.navigate(['/login']);
        }
        this.thisUser = JSON.parse(user)

        console.warn(this.thisUser);
    }

}
