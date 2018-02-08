
import { EventsManager } from '../../utilities/events-manager.utility';
import { SearchQuery } from '../../models/search-query.model';

import * as template from './search-input.component.html';

export class SearchInputComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;
    bindings;

    constructor() {
        this.controller = SearchInputController;
        this.template = String(template);
        this.bindings = {
            searchQuery: '<'
        };
    }
}

class SearchInputController implements ng.IComponentController {

    public searchQuery: SearchQuery;
    public queryText: string;

    constructor(private eventsManager: EventsManager) {
        "ngInject";
    }

    public $onInit() {
        this.getQueryText();
    }

    public $onChanges(changes) {
        this.getQueryText();
    }

    public initiateSearch(queryText) {
        this.eventsManager.publish('searchQuery:queryText', queryText);
    }

    private getQueryText() {
        this.queryText = this.searchQuery ? this.searchQuery.queryText : '';
    }
}