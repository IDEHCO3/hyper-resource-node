import { HidIlhaA } from "./../entity/entities/HidIlhaA"
import { HidIlhaAContextResource, HidIlhaAContextCollectionResource } from "./../context/HidIlhaAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidIlhaAResource extends AbstractResource {
    public entityClass() {
        return HidIlhaA
    }
}

export class HidIlhaACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidIlhaA
    }
}

module.exports={HidIlhaAResource, HidIlhaACollectionResource }