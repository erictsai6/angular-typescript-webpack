
import { OauthService } from '../../shared/services/oauth.service';
import './login.component.scss';

import * as template from './login.component.html';

export class LoginComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;

    constructor() {
        this.controller = LoginController;
        this.template = String(template);
    }
}

class LoginController implements ng.IComponentController {
    public redditAuthorizationLink: string;

    constructor(private oauthService: OauthService) {
        "ngInject";
    }

    public $onInit() {
        this.redditAuthorizationLink = this.oauthService.getAuthorizationUrl();
    }

}