import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private afAuth: AngularFireAuth, private router: Router) {}

    // LOGIN
    // login(email: string, password: string) {
    //     this.afAuth.signInWithEmailAndPassword(email, password).then(
    //         () => {
    //             localStorage.setItem('token', 'true');
    //             this.router.navigate(['/dashboard']);
    //         },
    //         (err) => {
    //             alert(err.message);
    //             this.router.navigate(['/login']);
    //         }
    //     );
    // }

    // REGISTER

    // register(email: string, password: string) {
    //     this.afAuth.createUserWithEmailAndPassword(email, password).then(()=>{
    //         alert('Registration completed');
    //         this.router.navigate(['/login']);
    //     }, err=>{
    //         alert(err.message);
    //         this.router.navigate(['/register']);
    //     })
    // }

    // // LOGOUT

    // logout() {
    //     this.afAuth.signOut().then(()=>{
    //         localStorage.removeItem('token')
    //         this.router.navigate(['/login']);
    //     }, err=>{
    //         alert(err.message);
    //         this.router.navigate(['/register']);
    //     })
    // }
}
