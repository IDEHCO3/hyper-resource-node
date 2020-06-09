import { TraEdifConstPortuariaP } from "./../entity/entities/TraEdifConstPortuariaP"
import { TraEdifConstPortuariaPContextResource, TraEdifConstPortuariaPContextCollectionResource } from "./../context/TraEdifConstPortuariaPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraEdifConstPortuariaPResource extends AbstractResource {
    public entityClass() {
        return TraEdifConstPortuariaP
    }
}

export class TraEdifConstPortuariaPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraEdifConstPortuariaP
    }
}

module.exports={TraEdifConstPortuariaPResource, TraEdifConstPortuariaPCollectionResource }