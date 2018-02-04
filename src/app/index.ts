import * as angular from 'angular';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { NavComponent } from './common/nav/nav.component';
import { NavService } from './common/nav/nav.service';

import './app.scss';
import { StorageUtility } from './common/utilities/storage.utility';
import { OauthService } from './common/services/oauth.service';
import { AppConfig } from './config';
import { OauthComponent } from './components/oauth/oauth.component';
import { LoginComponent } from './components/login/login.component';
import { RedditService } from './common/services/reddit.service';

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

    .constant('appConfig', AppConfig)

    .service('redditService', RedditService)
    .service('storageUtility', StorageUtility)
    .service('oauthService', OauthService)
    .service('NavService', NavService);

export default App.name;