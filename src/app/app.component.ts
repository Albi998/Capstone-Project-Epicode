import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { FirebaseService } from './services/firebase.service';
import { User } from './models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'Epicode-Capstone-Project';
    constructor(private auth: AuthService) { }


    ngOnInit(): void {
        // if (localStorage.getItem('user')) {
        //     const user = JSON.parse(localStorage.getItem('user'))
        //     this.auth.createUser(user.email, user.uid, user._token, user._expirationDate)
        // }
    }
}
