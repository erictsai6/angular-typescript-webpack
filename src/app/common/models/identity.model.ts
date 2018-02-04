
export class Identity {

    public id: string;
    public comment_karma: number;
    public created: number;
    public created_utc: number;
    public name: string;

    public icon_img: string;

    constructor(data) {
        Object.assign(this, data);
    }
}