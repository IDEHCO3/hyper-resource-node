import { TraEdifMetroFerroviariaP } from "./../entity/entities/TraEdifMetroFerroviariaP"
import { TraEdifMetroFerroviariaPContextResource, TraEdifMetroFerroviariaPContextCollectionResource } from "./../context/TraEdifMetroFerroviariaPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraEdifMetroFerroviariaPResource extends AbstractResource {
    public entityClass() {
        return TraEdifMetroFerroviariaP
    }
}

export class TraEdifMetroFerroviariaPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraEdifMetroFerroviariaP
    }
}

module.exports={TraEdifMetroFerroviariaPResource, TraEdifMetroFerroviariaPCollectionResource }