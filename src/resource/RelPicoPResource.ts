import { RelPicoP } from "./../entity/entities/RelPicoP"
import { RelPicoPContextResource, RelPicoPContextCollectionResource } from "./../context/RelPicoPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class RelPicoPResource extends AbstractResource {
    public entityClass() {
        return RelPicoP
    }
}

export class RelPicoPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return RelPicoP
    }
}

module.exports={RelPicoPResource, RelPicoPCollectionResource }