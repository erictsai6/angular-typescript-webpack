import { Credentials } from './common/models/credentials.model';
import { OauthService } from "./common/services/oauth.service";

/**
 * App Component
 *
 * @export
 * @class AppComponent
 * @implements {ng.IComponentOptions}
 */
export class AppComponent implements ng.IComponentOptions {
    template: string;
    controller: ng.IControllerConstructor;

    constructor() {
        this.template = require("./app.html");
        this.controller = AppController;
    }
};

/**
 * App Controller
 *
 * @class AppController
 * @implements {ng.IComponentController}
 */
export class AppController implements ng.IComponentController {

    public credentials: Credentials;

    constructor(private oauthService: OauthService) {
        "ngInject";
    }

    $onInit() {
        this.credentials = this.oauthService.getCredentials();
    }

    $onChanges(changes: ng.IOnChangesObject) { }
}