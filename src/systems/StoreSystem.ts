import store from '../store/index'

export class StoreSystem {
    static state = store.state;
    static getters = store.getters;
    static commit = store.commit;
    static dispatch = store.dispatch;
}