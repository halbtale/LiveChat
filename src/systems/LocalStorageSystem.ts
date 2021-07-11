export class LocalStorageSystem {
    static getItem(key: string) {

        const value = localStorage.getItem(key);
        console.log(value)
        if (!value) return null;

        return JSON.parse(value);
    }

    static setItem<T extends any>(key: string, value: T) {
        console.log(JSON.stringify(value))

        return localStorage.setItem(key, JSON.stringify(value));
    }

    static removeItem(key: string) {
        return localStorage.removeItem(key);
    }

    static clear() {
        return localStorage.clear();
    }
}
