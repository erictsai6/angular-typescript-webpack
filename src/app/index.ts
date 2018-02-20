import * as angular from 'angular';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { NavComponent } from './shared/components/nav/nav.component';

import './app.scss';
import { StorageUtility } from './shared/utilities/storage.utility';
import { OauthService } from './shared/services/oauth.service';
import { appConfig } from './config';
import { OauthComponent } from './components/oauth/oauth.component';
import { LoginComponent } from './components/login/login.component';
import { RedditService } from './shared/services/reddit.service';
import { EventsManager } from './shared/utilities/events-manager.utility';
import { SearchInputComponent } from './shared/components/search-input/search-input.component';
import { ActivatedRouter } from './shared/utilities/activated-router.utility';

function routeConfig(
    $locationProvider: ng.ILocationProvider,
    $routeProvider: ng.route.IRouteProvider
) {
    "ngInject";

    $routeProvider
        .when('/', {
            template: '<home></home>'
        })
        .when('/oauth', {
            template: '<oauth></oauth>'
        })
        .when('/login', {
            template: '<login></login>'
        })
        .when('/account', {
            template: '<account></account>'
        });

    $locationProvider.html5Mode(true);
}

function themeConfig($mdThemingProvider: ng.material.IThemingProvider) {
    "ngInject";

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('green');
}

const App: ng.IModule = angular
    .module('app', [
        'ngRoute',
        'ngMessages',
        'ngMaterial',
        'ngAria',
        'ngAnimate',
        // 'ngCookies',
        // 'ngSanitize',
    ])
    .config(routeConfig)
    .config(themeConfig)

    .component('app', new AppComponent)

    .component('home', new HomeComponent)
    .component('oauth', new OauthComponent)
    .component('account', new AccountComponent)
    .component('login', new LoginComponent)
    .component('nav', new NavComponent)
    .component('searchInput', new SearchInputComponent)

    .constant('configuration', appConfig)

    .service('redditService', RedditService)
    .service('storageUtility', StorageUtility)
    .service('eventsManager', EventsManager)
    .service('activatedRouter', ActivatedRouter)
    .service('oauthService', OauthService);

export default App.name;