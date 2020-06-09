import { HidTrechoDrenagemL } from "./../entity/entities/HidTrechoDrenagemL"
import { HidTrechoDrenagemLContextResource, HidTrechoDrenagemLContextCollectionResource } from "./../context/HidTrechoDrenagemLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidTrechoDrenagemLResource extends AbstractResource {
    public entityClass() {
        return HidTrechoDrenagemL
    }
}

export class HidTrechoDrenagemLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidTrechoDrenagemL
    }
}

module.exports={HidTrechoDrenagemLResource, HidTrechoDrenagemLCollectionResource }