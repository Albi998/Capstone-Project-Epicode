import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FirebaseErrorService {
    constructor() {}

    codeError(code: string) {
        switch (code) {
            // email esistente
            case 'auth/email-already-in-use':
                return 'This email is already registered';

            // errore generico
            default:
                return 'Unidentified error';

            // password troppo corta
            case 'auth/weak-password':
                return 'Password should be at least 6 characters';

            // email invalida
            case 'auth/invalid-email':
                return 'Invalid email format';

            // password sbagliata
            case 'auth/wrong-password':
                return 'Wrong password';

            // email non registrata
            case 'auth/user-not-found':
                return 'Email not found';
        }
    }
}
