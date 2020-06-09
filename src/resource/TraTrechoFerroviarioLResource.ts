import { TraTrechoFerroviarioL } from "./../entity/entities/TraTrechoFerroviarioL"
import { TraTrechoFerroviarioLContextResource, TraTrechoFerroviarioLContextCollectionResource } from "./../context/TraTrechoFerroviarioLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraTrechoFerroviarioLResource extends AbstractResource {
    public entityClass() {
        return TraTrechoFerroviarioL
    }
}

export class TraTrechoFerroviarioLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraTrechoFerroviarioL
    }
}

module.exports={TraTrechoFerroviarioLResource, TraTrechoFerroviarioLCollectionResource }