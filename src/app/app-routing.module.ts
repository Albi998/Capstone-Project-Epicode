import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componenti/home/home.component';
import { MarketplaceComponent } from './componenti/marketplace/marketplace.component';
import { StatsComponent } from './componenti/stats/stats.component';
import { CollectionsComponent } from './componenti/collections/collections.component';
import { ProfileComponent } from './componenti/profile/profile.component';
import { SignupComponent } from './componenti/signup/signup.component';
import { UsersComponent } from './componenti/users/users.component';
import { LoginComponent } from './componenti/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { FavoritesComponent } from './componenti/favorites/favorites.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'marketplace', component: MarketplaceComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'collections', component: CollectionsComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
