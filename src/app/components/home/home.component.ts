import './home.scss';

import { OauthService } from '../../shared/services/oauth.service';
import { Credentials } from '../../shared/models/credentials.model';
import { RedditService } from '../../shared/services/reddit.service';
import { SearchQuery } from '../../shared/models/search-query.model';
import { EventsManager } from '../../shared/utilities/events-manager.utility';

import * as template from './home.component.html';

export class HomeComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;

    constructor() {
        this.controller = HomeController;
        this.template = String(template);
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

    public $onInit() {
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

    public $onDestroy() {
        this.subscription();
    }

    public retrieveCards() {
        this.redditService.getSubreddit(this.searchQuery)
            .then((data: any) => {
                this.subredditCards = data.data ? data.data.children : [];
            });
    }

    public navigateToLink(url) {
        window.location.href = url;
    }

}