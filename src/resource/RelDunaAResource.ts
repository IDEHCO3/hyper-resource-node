import { RelDunaA } from "./../entity/entities/RelDunaA"
import { RelDunaAContextResource, RelDunaAContextCollectionResource } from "./../context/RelDunaAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class RelDunaAResource extends AbstractResource {
    public entityClass() {
        return RelDunaA
    }
}

export class RelDunaACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return RelDunaA
    }
}

module.exports={RelDunaAResource, RelDunaACollectionResource }