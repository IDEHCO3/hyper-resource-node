import { HidRochaEmAguaA } from "./../entity/entities/HidRochaEmAguaA"
import { HidRochaEmAguaAContextResource, HidRochaEmAguaAContextCollectionResource } from "./../context/HidRochaEmAguaAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidRochaEmAguaAResource extends AbstractResource {
    public entityClass() {
        return HidRochaEmAguaA
    }
}

export class HidRochaEmAguaACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidRochaEmAguaA
    }
}

module.exports={HidRochaEmAguaAResource, HidRochaEmAguaACollectionResource }