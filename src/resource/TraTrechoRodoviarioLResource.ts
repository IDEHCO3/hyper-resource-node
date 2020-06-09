import { TraTrechoRodoviarioL } from "./../entity/entities/TraTrechoRodoviarioL"
import { TraTrechoRodoviarioLContextResource, TraTrechoRodoviarioLContextCollectionResource } from "./../context/TraTrechoRodoviarioLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraTrechoRodoviarioLResource extends AbstractResource {
    public entityClass() {
        return TraTrechoRodoviarioL
    }
}

export class TraTrechoRodoviarioLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraTrechoRodoviarioL
    }
}

module.exports={TraTrechoRodoviarioLResource, TraTrechoRodoviarioLCollectionResource }