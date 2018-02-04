
import './nav.component.scss';
import { Credentials } from '../models/credentials.model';

export interface NavItem {
    url: string;
    label: string;
}

export class NavComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;
    bindings;

    constructor() {
        this.controller = NavController;
        this.template = require('./nav.component.html');
        this.bindings = {
            credentials: '<'
        };
    }
}

class NavController implements ng.IComponentController {
    public pages: Array<NavItem>;
    public credentials: Credentials;

    constructor() {
        "ngInject";
        this.pages = new Array<NavItem>();
    }

    $onInit() {
        this.pages.push({
            url: '/account',
            label: 'Account'
        });
    }
}