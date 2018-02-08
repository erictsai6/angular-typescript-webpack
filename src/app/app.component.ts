import { Credentials } from './shared/models/credentials.model';
import { OauthService } from "./shared/services/oauth.service";
import { EventsManager } from './shared/utilities/events-manager.utility';

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

    private subscription;

    constructor(private oauthService: OauthService,
                private eventsManager: EventsManager) {
        "ngInject";
    }

    public $onInit() {
        this.retrieveCredentials();
        this.subscription = this.eventsManager.subscribe('credentials:updated', () => {
            this.retrieveCredentials();
        });
    }

    public $onDestroy() {
        this.subscription();
    }

    private retrieveCredentials() {
        const credentials = this.oauthService.getCredentials();
        this.credentials = credentials && !credentials.is_expired ?
            credentials : null;
    }

}