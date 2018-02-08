
export class SearchQuery {

    public static COUNT = 20;

    public queryText: string;

    constructor(data) {
        Object.assign(this, data);
    }

    public isSearch() {
        return !!this.queryText;
    }

    public toQuery() {
        return {
            q: this.queryText,
            restrict_sr: true,
            count: SearchQuery.COUNT
        };
    }
}