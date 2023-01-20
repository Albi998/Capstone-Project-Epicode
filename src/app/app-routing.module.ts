import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ManageNftsComponent } from './components/manage-nfts/manage-nfts.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { NftDetailsComponent } from './components/nft-details/nft-details.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PriceUpdateComponent } from './components/price-update/price-update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './guard/auth.guard';

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
    { path: 'admin', canActivate:[AuthGuard], component: AdminComponent },
    { path: 'manage-users', canActivate:[AuthGuard], component: ManageUsersComponent },
    { path: 'manage-nfts', canActivate:[AuthGuard], component: ManageNftsComponent },
    { path: 'price-update/:dna', canActivate:[AuthGuard], component: PriceUpdateComponent },
    { path: 'admin-login', component: AdminLoginComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'crypto-list', component: CryptoListComponent },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
