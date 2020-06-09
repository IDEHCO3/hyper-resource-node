import { LimPaisA } from "./../entity/entities/LimPaisA"
import { LimPaisAContextResource, LimPaisAContextCollectionResource } from "./../context/LimPaisAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LimPaisAResource extends AbstractResource {
    public entityClass() {
        return LimPaisA
    }
}

export class LimPaisACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LimPaisA
    }
}

module.exports={LimPaisAResource, LimPaisACollectionResource }