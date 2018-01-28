
export class AboutComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;

    constructor() {
        this.controller = AboutController;
        this.template = require('./about.component.html');
    }
}

class AboutController implements ng.IComponentController {

    constructor() {
        "ngInject";
    }

    $onInit() {}

}