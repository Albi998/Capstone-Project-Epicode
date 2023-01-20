import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admins } from '../models/admin';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AdminService {
    isAdminLoggedIn = new BehaviorSubject<boolean>(false)
    isLoginError= new EventEmitter<boolean>(false)

    constructor(private http: HttpClient, private route: Router) { }

    adminSignUp(data: Admins) {
        this.http.post('https://63c7d30f075b3f3a91d3da35.mockapi.io/api/4/admin',
            data, { observe: 'response' }).subscribe((res) => {
                // console.warn(res);
                if (res) {
                    this.isAdminLoggedIn.next(true)
                    localStorage.setItem('admin', JSON.stringify(res.body))
                    this.route.navigate(['/admin'])
                }
            })
    }

    reloadAdmin() {
        if (localStorage.getItem('admin')) {
            this.isAdminLoggedIn.next(true)
            this.route.navigate(['/admin'])
        }
    }

    adminLogin(data: Admins) {
        this.http.get(`https://63c7d30f075b3f3a91d3da35.mockapi.io/api/4/admin?email=${data.email}&password=${data.password}`,
            { observe: 'response' }).subscribe((res: any) => {
                // console.warn(res)
                if(res && res.body && res.body.length === 1) {
                    this.isLoginError.emit(false)
                    localStorage.setItem('admin', JSON.stringify(res.body))
                    localStorage.removeItem('user')
                    this.route.navigate(['/admin'])
                } else {
                    console.warn('login failed');
                    this.isLoginError.emit(true)
                }
            })
    }


    onGetAdminData(url: string) {
        return this.http.get(url)
    }

}
