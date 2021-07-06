import { IGunDbModel } from '@/models/IGunDbModel';
import { IGunChainReference } from 'gun/types/chain';
import * as vueGtagApi from 'vue-gtag';

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $gun: IGunChainReference<IGunDbModel, any, "pre_root">;
        $gtag: typeof vueGtagApi;
    }
}
