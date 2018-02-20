
export class ActivatedRouter {

    constructor(private $location: ng.ILocationService) {

    }

    public hash() {
        return this.$location.hash();
    }

}
