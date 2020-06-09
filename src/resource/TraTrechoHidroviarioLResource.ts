import { TraTrechoHidroviarioL } from "./../entity/entities/TraTrechoHidroviarioL"
import { TraTrechoHidroviarioLContextResource, TraTrechoHidroviarioLContextCollectionResource } from "./../context/TraTrechoHidroviarioLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraTrechoHidroviarioLResource extends AbstractResource {
    public entityClass() {
        return TraTrechoHidroviarioL
    }
}

export class TraTrechoHidroviarioLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraTrechoHidroviarioL
    }
}

module.exports={TraTrechoHidroviarioLResource, TraTrechoHidroviarioLCollectionResource }