import { IGunDbModel } from '@/models/IGunDbModel';
import { IGunChainReference } from 'gun/types/chain';

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $gun: IGunChainReference<IGunDbModel, any, "pre_root">;
    }
}
