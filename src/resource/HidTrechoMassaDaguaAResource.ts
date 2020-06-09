import { HidTrechoMassaDaguaA } from "./../entity/entities/HidTrechoMassaDaguaA"
import { HidTrechoMassaDaguaAContextResource, HidTrechoMassaDaguaAContextCollectionResource } from "./../context/HidTrechoMassaDaguaAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidTrechoMassaDaguaAResource extends AbstractResource {
    public entityClass() {
        return HidTrechoMassaDaguaA
    }
}

export class HidTrechoMassaDaguaACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidTrechoMassaDaguaA
    }
}

module.exports={HidTrechoMassaDaguaAResource, HidTrechoMassaDaguaACollectionResource }