import { HidCorredeiraL } from "./../entity/entities/HidCorredeiraL"
import { HidCorredeiraLContextResource, HidCorredeiraLContextCollectionResource } from "./../context/HidCorredeiraLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidCorredeiraLResource extends AbstractResource {
    public entityClass() {
        return HidCorredeiraL
    }
}

export class HidCorredeiraLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidCorredeiraL
    }
}

module.exports={HidCorredeiraLResource, HidCorredeiraLCollectionResource }