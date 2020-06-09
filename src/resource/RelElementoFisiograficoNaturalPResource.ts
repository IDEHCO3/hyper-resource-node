import { RelElementoFisiograficoNaturalP } from "./../entity/entities/RelElementoFisiograficoNaturalP"
import { RelElementoFisiograficoNaturalPContextResource, RelElementoFisiograficoNaturalPContextCollectionResource } from "./../context/RelElementoFisiograficoNaturalPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class RelElementoFisiograficoNaturalPResource extends AbstractResource {
    public entityClass() {
        return RelElementoFisiograficoNaturalP
    }
}

export class RelElementoFisiograficoNaturalPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return RelElementoFisiograficoNaturalP
    }
}

module.exports={RelElementoFisiograficoNaturalPResource, RelElementoFisiograficoNaturalPCollectionResource }