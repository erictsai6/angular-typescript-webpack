import { StorageUtility, StorageKeys } from "../utilities/storage.utility";
import { Credentials } from '../models/credentials.model';

export class OauthService {

    private authorizationUrl: string;
    private clientId: string;
    private redirectUrl: string;
    private scope: string[];

    constructor(
        private $http: ng.IHttpService,
        private appConfig,
        private storageUtility: StorageUtility
    ) {
        this.authorizationUrl = this.appConfig.reddit.authorizationUrl;
        this.clientId = this.appConfig.reddit.clientId;
        this.redirectUrl = `${window.location.protocol}//${window.location.host}/oauth`;
        this.scope = [
            'identity',
            'edit',
            'read'
        ];
    }

    public getCredentials() {
        const credentials = this.storageUtility.get(StorageKeys.CREDENTIALS);
        return credentials ? new Credentials(credentials) : null;
    }

    public getAuthorizationUrl() {
        return `${this.authorizationUrl}/api/v1/authorize?` +
            `client_id=${this.clientId}&response_type=token&state=test&` +
            `redirect_uri=${encodeURIComponent(this.redirectUrl)}&` +
            `duration=temporary&scope=${this.scope.join(',')}`;
    }

}
