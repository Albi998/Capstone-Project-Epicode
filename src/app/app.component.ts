import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'CapstoneProject';

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user')!);
            this.authService.createUser(
                user.email,
                user.id,
                user._token,
                user._expirationDate
            );
        }
    }


}
