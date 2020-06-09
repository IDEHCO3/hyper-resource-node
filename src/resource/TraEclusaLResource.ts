import { TraEclusaL } from "./../entity/entities/TraEclusaL"
import { TraEclusaLContextResource, TraEclusaLContextCollectionResource } from "./../context/TraEclusaLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraEclusaLResource extends AbstractResource {
    public entityClass() {
        return TraEclusaL
    }
}

export class TraEclusaLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraEclusaL
    }
}

module.exports={TraEclusaLResource, TraEclusaLCollectionResource }