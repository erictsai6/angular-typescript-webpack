import * as angular from 'angular';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './common/nav/nav.component';
import { NavService } from './common/nav/nav.service';

import './app.scss';

function routeConfig(
    $locationProvider: ng.ILocationProvider,
    $routeProvider: ng.route.IRouteProvider
) {
    "ngInject";

    $routeProvider
        .when('/', {
            template: '<home></home>'

        })
        .when('/about', {
            template: '<about></about>'
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
    .component('about', new AboutComponent)
    .component('nav', new NavComponent)
    .service('NavService', NavService);

export default App.name;