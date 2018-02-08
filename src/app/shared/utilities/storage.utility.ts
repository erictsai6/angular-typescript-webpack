
export const StorageKeys = {
    CREDENTIALS: 'CREDENTIALS'
}

export class StorageUtility {

    public get(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }

    public set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
