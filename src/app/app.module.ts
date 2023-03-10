import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULES

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { HttpClientModule } from '@angular/common/http';

// COMPONENTS

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './items/card/card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { NftDetailsComponent } from './components/nft-details/nft-details.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageNftsComponent } from './components/manage-nfts/manage-nfts.component';
import { PriceUpdateComponent } from './components/price-update/price-update.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    VerifyEmailComponent,
    PasswordRecoveryComponent,
    SpinnerComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    ProfileComponent,
    MarketplaceComponent,
    NftDetailsComponent,
    SearchComponent,
    CartComponent,
    CryptoListComponent,
    AdminComponent,
    AdminLoginComponent,
    ManageUsersComponent,
    ManageNftsComponent,
    PriceUpdateComponent,
    CheckoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
