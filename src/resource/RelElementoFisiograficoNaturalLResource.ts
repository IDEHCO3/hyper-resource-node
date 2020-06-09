import { RelElementoFisiograficoNaturalL } from "./../entity/entities/RelElementoFisiograficoNaturalL"
import { RelElementoFisiograficoNaturalLContextResource, RelElementoFisiograficoNaturalLContextCollectionResource } from "./../context/RelElementoFisiograficoNaturalLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class RelElementoFisiograficoNaturalLResource extends AbstractResource {
    public entityClass() {
        return RelElementoFisiograficoNaturalL
    }
}

export class RelElementoFisiograficoNaturalLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return RelElementoFisiograficoNaturalL
    }
}

module.exports={RelElementoFisiograficoNaturalLResource, RelElementoFisiograficoNaturalLCollectionResource }