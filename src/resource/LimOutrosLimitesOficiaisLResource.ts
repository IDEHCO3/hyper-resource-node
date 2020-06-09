import { LimOutrosLimitesOficiaisL } from "./../entity/entities/LimOutrosLimitesOficiaisL"
import { LimOutrosLimitesOficiaisLContextResource, LimOutrosLimitesOficiaisLContextCollectionResource } from "./../context/LimOutrosLimitesOficiaisLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LimOutrosLimitesOficiaisLResource extends AbstractResource {
    public entityClass() {
        return LimOutrosLimitesOficiaisL
    }
}

export class LimOutrosLimitesOficiaisLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LimOutrosLimitesOficiaisL
    }
}

module.exports={LimOutrosLimitesOficiaisLResource, LimOutrosLimitesOficiaisLCollectionResource }