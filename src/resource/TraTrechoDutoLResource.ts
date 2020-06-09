import { TraTrechoDutoL } from "./../entity/entities/TraTrechoDutoL"
import { TraTrechoDutoLContextResource, TraTrechoDutoLContextCollectionResource } from "./../context/TraTrechoDutoLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraTrechoDutoLResource extends AbstractResource {
    public entityClass() {
        return TraTrechoDutoL
    }
}

export class TraTrechoDutoLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraTrechoDutoL
    }
}

module.exports={TraTrechoDutoLResource, TraTrechoDutoLCollectionResource }