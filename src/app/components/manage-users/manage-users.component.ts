import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Admins } from 'src/app/models/admin';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-manage-users',
    templateUrl: './manage-users.component.html',
    styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

    clients: any
    adminData: any

    constructor(
        private router: Router,
        private firebase: FirebaseService,
        private admin: AdminService,
        private http: HttpClient
    ) { }

    ngOnInit(): void {

        this.firebase.getClient(
            'https://capstone-register-login-default-rtdb.europe-west1.firebasedatabase.app/clients.json')
            .subscribe((data: any) => {

                this.clients = Object.keys(data).map((key) => {
                    data[key]['id'] = key
                    // console.log(key)
                    return data[key]
                })
                console.log(this.clients);

            })

    }


    logout() {
        localStorage.removeItem('admin')
        this.router.navigate(['/dashboard'])
    }


    onDeleteClient(id: any) {
        this.firebase.deleteClient(`https://capstone-register-login-default-rtdb.europe-west1.firebasedatabase.app/clients`, id)
            .subscribe((data) => {
                console.log(data);

            })
    }

}
