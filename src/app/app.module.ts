import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './componenti/home/home.component';
import { MarketplaceComponent } from './componenti/marketplace/marketplace.component';
import { StatsComponent } from './componenti/stats/stats.component';
import { CollectionsComponent } from './componenti/collections/collections.component';
import { ProfileComponent } from './componenti/profile/profile.component';
import { CardComponent } from './componenti/item/card/card.component';
import { SignupComponent } from './componenti/signup/signup.component';
import { UsersComponent } from './componenti/users/users.component';
import { LoginComponent } from './componenti/login/login.component';
import { FavoritesComponent } from './componenti/favorites/favorites.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MarketplaceComponent,
        StatsComponent,
        CollectionsComponent,
        ProfileComponent,
        CardComponent,
        SignupComponent,
        UsersComponent,
        LoginComponent,
        FavoritesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
