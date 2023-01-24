import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    checkoutDetails: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.checkoutDetails = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: [''],
        });
    }

    ngOnInit(): void {
    }

    checkout() {
        console.log('checkout effettuato');
        alert('l\'acquisto è stato completato')
        this.router.navigate(['/dashboard'])
    }

}
