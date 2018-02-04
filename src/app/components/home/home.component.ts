import './home.scss';

import { OauthService } from '../../common/services/oauth.service';
import { Credentials } from '../../common/models/credentials.model';
import { RedditService } from '../../common/services/reddit.service';
import { SearchQuery } from '../../common/models/search-query.model';
import { EventsManager } from '../../common/utilities/events-manager.utility';

export class HomeComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;

    constructor() {
        this.controller = HomeController;
        this.template = require('./home.component.html');
    }
}

class HomeController implements ng.IComponentController {

    public credentials: Credentials;
    public searchQuery: SearchQuery;
    public subredditCards;

    private subscription;

    constructor(private oauthService: OauthService,
                private redditService: RedditService,
                private eventsManager: EventsManager,
                private $location: ng.ILocationService) {
        "ngInject";
    }

    $onInit() {
        this.credentials = this.oauthService.getCredentials();
        if (!this.credentials || this.credentials.is_expired) {
            return this.$location.path('/login');
        }

        this.subscription = this.eventsManager.subscribe('searchQuery:queryText', (queryText) => {
            this.searchQuery = new SearchQuery({
                queryText
            });
            this.retrieveCards();
        });

        // Initialize request for
        this.retrieveCards();
    }

    $onDestroy() {
        this.subscription();
    }

    public retrieveCards() {
        this.redditService.getSubreddit(this.searchQuery)
            .then((data: any) => {
                this.subredditCards = data.data.children;
            });
    }

    public navigateToLink(url) {
        window.location.href = url;
    }

}