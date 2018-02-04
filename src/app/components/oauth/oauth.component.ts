
import { OauthService } from '../../common/services/oauth.service';
import { StorageUtility, StorageKeys } from '../../common/utilities/storage.utility';

export class OauthComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;

    constructor() {
        this.controller = OauthController;
        this.template = require('./oauth.component.html');
    }
}

class OauthController implements ng.IComponentController {

    public isReady: boolean;

    constructor(private $location: ng.ILocationService,
                private storageUtility: StorageUtility) {
        "ngInject";
    }

    $onInit() {
        const dictionary: any = this.toDict(this.$location.hash());

        if (!dictionary.error) {
            dictionary['expires_in'] = +dictionary['expires_in'];
            dictionary['create_time'] = new Date();
            this.storageUtility.set(StorageKeys.CREDENTIALS, dictionary);
            this.$location.path('/').hash('');
        }

        this.isReady = true;

    }

    private toDict(qs: string) {
        const dict = {};
        const parameters = qs.split('&');
        for (let parameter of parameters) {
            let [key, value] = parameter.split('=');
             dict[key] = decodeURIComponent(value);
        }
        return dict;
    }
}