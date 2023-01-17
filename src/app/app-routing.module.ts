import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { NftDetailsComponent } from './components/nft-details/nft-details.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'password-recovery', component: PasswordRecoveryComponent },
    { path: 'verify-email', component: VerifyEmailComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'marketplace', component: MarketplaceComponent },
    { path: 'nft-details/:dna', component: NftDetailsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
