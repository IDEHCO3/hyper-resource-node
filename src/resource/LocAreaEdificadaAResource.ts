import { LocAreaEdificadaA } from "./../entity/entities/LocAreaEdificadaA"
import { LocAreaEdificadaAContextResource, LocAreaEdificadaAContextCollectionResource } from "./../context/LocAreaEdificadaAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LocAreaEdificadaAResource extends AbstractResource {
    public entityClass() {
        return LocAreaEdificadaA
    }
}

export class LocAreaEdificadaACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LocAreaEdificadaA
    }
}

module.exports={LocAreaEdificadaAResource, LocAreaEdificadaACollectionResource }