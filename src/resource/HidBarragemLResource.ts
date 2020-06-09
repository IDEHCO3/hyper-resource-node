import { HidBarragemL } from "./../entity/entities/HidBarragemL"
import { HidBarragemLContextResource, HidBarragemLContextCollectionResource } from "./../context/HidBarragemLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidBarragemLResource extends AbstractResource {
    public entityClass() {
        return HidBarragemL
    }
}

export class HidBarragemLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidBarragemL
    }
}

module.exports={HidBarragemLResource, HidBarragemLCollectionResource }