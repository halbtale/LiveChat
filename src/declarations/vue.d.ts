import { IGunChainReference } from 'gun/types/chain';

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $gun: IGunChainReference<any, any, "pre_root">;
    }
}
