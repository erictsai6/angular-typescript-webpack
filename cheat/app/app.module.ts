import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import './app.scss';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { OauthComponent } from './components/oauth/oauth.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { SearchInputComponent } from './shared/components/search-input/search-input.component';

import { OauthService } from './shared/services/oauth.service';
import { RedditService } from './shared/services/reddit.service';
import { EventsManager } from './shared/utilities/events-manager.utility';
import { StorageUtility } from './shared/utilities/storage.utility';
import { appConfig } from './config';

// Application wide providers
const APP_PROVIDERS = [
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AccountComponent,
    OauthComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    SearchInputComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    { provide: 'configuration', useValue: appConfig },
    OauthService,
    RedditService,
    EventsManager,
    StorageUtility,
    environment.ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {}
