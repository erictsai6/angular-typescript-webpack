
export class NavService {

    pages: Array<NavItem>;

    constructor() {
        this.pages = new Array<NavItem>();
        this.initializeLinks();
    }

    private initializeLinks() {
        this.pages.push({
            url: '/',
            label: 'Home'
        });
        this.pages.push({
            url: '/about',
            label: 'About'
        });
    }
}


export interface NavItem {
    url: string;
    label: string;
}