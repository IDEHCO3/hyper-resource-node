import { HidMassaDaguaA } from "./../entity/entities/HidMassaDaguaA"
import { HidMassaDaguaAContextResource, HidMassaDaguaAContextCollectionResource } from "./../context/HidMassaDaguaAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidMassaDaguaAResource extends AbstractResource {
    public entityClass() {
        return HidMassaDaguaA
    }
}

export class HidMassaDaguaACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidMassaDaguaA
    }
}

module.exports={HidMassaDaguaAResource, HidMassaDaguaACollectionResource }