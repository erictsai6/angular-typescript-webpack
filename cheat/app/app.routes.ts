import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { OauthComponent } from './components/oauth/oauth.component';
import { LoginComponent } from './components/login/login.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'oauth',  component: OauthComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent}
];
