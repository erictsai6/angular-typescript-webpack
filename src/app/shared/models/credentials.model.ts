
export class Credentials {
    public access_token: string;
    public expires_in: number;
    public scope: string;
    public state: string;
    public token_type: string;
    public create_time: Date;
    public is_expired: boolean;

    constructor(data) {
        Object.assign(this, data);

        this.create_time = new Date(this.create_time);
        this.is_expired = Date.now() > this.create_time.getTime() + this.expires_in * 1000;
    }

}