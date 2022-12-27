import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    constructor(private route: ActivatedRoute, private authService: AuthService) {}
    ngOnInit(): void {
        this.route.snapshot.paramMap.get('users');
    }
    onLogOut() {
        this.authService.logOut;
    }
}
