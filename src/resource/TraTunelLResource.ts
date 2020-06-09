import { TraTunelL } from "./../entity/entities/TraTunelL"
import { TraTunelLContextResource, TraTunelLContextCollectionResource } from "./../context/TraTunelLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraTunelLResource extends AbstractResource {
    public entityClass() {
        return TraTunelL
    }
}

export class TraTunelLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraTunelL
    }
}

module.exports={TraTunelLResource, TraTunelLCollectionResource }