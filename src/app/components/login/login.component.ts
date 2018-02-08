
import { OauthService } from '../../shared/services/oauth.service';
import './login.component.scss';

export class LoginComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;

    constructor() {
        this.controller = LoginController;
        this.template = require('./login.component.html');
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