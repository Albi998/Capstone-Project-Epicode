import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    checkoutDetails: FormGroup;

    constructor(private fb: FormBuilder,) {
        this.checkoutDetails = this.fb.group({
            email: [''],
            password: [''],
        });
    }

    ngOnInit(): void {
    }

    checkout() {
        console.log('ciao');

    }

}
