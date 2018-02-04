import { StorageUtility, StorageKeys } from "../utilities/storage.utility";
import { Credentials } from '../models/credentials.model';
import { OauthService } from './oauth.service';
import { Identity } from '../models/identity.model';

export class RedditService {

    private static ANGULAR = 'angular';

    private apiUrl: string;
    private authorizationUrl: string;
    private clientId: string;
    private redirectUrl: string;
    private scope: string[];

    constructor(
        private $http: ng.IHttpService,
        private appConfig,
        private oauthService: OauthService,
        private storageUtility: StorageUtility
    ) {
        this.apiUrl = this.appConfig.reddit.apiUrl;
    }

    public getSubreddit() {
        const requestConfig = this.getRequestConfig();
        return this.$http.get(`${this.apiUrl}/r/${RedditService.ANGULAR}`, requestConfig)
            .then((response) => {
                return response.data;
            });
    }

    public searchSubreddit(searchQuery?) {
        const requestConfig = this.getRequestConfig();
        return this.$http.get(`${this.apiUrl}/r/${RedditService.ANGULAR}/search`, requestConfig)
            .then((response) => {
                return response.data;
            });
    }

    public getIdentity() {
        const requestConfig = this.getRequestConfig();
        return this.$http.get(`${this.apiUrl}/api/v1/me`, requestConfig)
            .then((response) => {
                return new Identity(response.data);
            });
    }

    private getRequestConfig() {
        const credentials = this.oauthService.getCredentials();
        return {
            params: {
                count: 10
            },
            headers: {
                Authorization: `Bearer ${credentials.access_token}`
            }
        };
    }

}
