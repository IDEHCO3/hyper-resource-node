import { HidBancoAreiaA } from "./../entity/entities/HidBancoAreiaA"
import { HidBancoAreiaAContextResource, HidBancoAreiaAContextCollectionResource } from "./../context/HidBancoAreiaAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidBancoAreiaAResource extends AbstractResource {
    public entityClass() {
        return HidBancoAreiaA
    }
}

export class HidBancoAreiaACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidBancoAreiaA
    }
}

module.exports={HidBancoAreiaAResource, HidBancoAreiaACollectionResource }