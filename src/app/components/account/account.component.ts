import { Credentials } from '../../common/models/credentials.model';
import { OauthService } from '../../common/services/oauth.service';
import { RedditService } from '../../common/services/reddit.service';
import { Identity } from '../../common/models/identity.model';

export class AccountComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;

    constructor() {
        this.controller = AccountController;
        this.template = require('./account.component.html');
    }
}

class AccountController implements ng.IComponentController {

    public credentials: Credentials;
    public identity: Identity;

    constructor(private oauthService: OauthService,
                private redditService: RedditService,
                private $location: ng.ILocationService) {
        "ngInject";
    }

    $onInit() {
        this.credentials = this.oauthService.getCredentials();
        if (!this.credentials || this.credentials.is_expired) {
            return this.$location.path('/login');
        }

        // Initialize request for
        this.redditService.getIdentity()
            .then((identity) => {
                this.identity = identity;
            });
    }

}