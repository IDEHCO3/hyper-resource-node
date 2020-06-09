import { RelCurvaNivelL } from "./../entity/entities/RelCurvaNivelL"
import { RelCurvaNivelLContextResource, RelCurvaNivelLContextCollectionResource } from "./../context/RelCurvaNivelLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class RelCurvaNivelLResource extends AbstractResource {
    public entityClass() {
        return RelCurvaNivelL
    }
}

export class RelCurvaNivelLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return RelCurvaNivelL
    }
}

module.exports={RelCurvaNivelLResource, RelCurvaNivelLCollectionResource }