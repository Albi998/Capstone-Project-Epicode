import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
    users: any;
    constructor(private firebase: FirebaseService) {}

    ngOnInit(): void {
        this.firebase
            .getUsers(
                'https://nft-api-4b284-default-rtdb.europe-west1.firebasedatabase.app/users.json'
            )
            .subscribe((data: any) => {
                this.users = Object.keys(data).map((key) => {
                    data[key]['id'] = key;
                    return data[key];
                });
                console.log(this.users);
            });
    }

    // onDeleteUser() {
    //     this.firebase
    //         .deleteUser(
    //             'https://nft-api-4b284-default-rtdb.europe-west1.firebasedatabase.app/users',
    //             '-NJz-IH8JA7yZUCAyA6Z'
    //         )
    //         .subscribe((data) => {
    //             console.log(data);
    //         });
    // }
}
