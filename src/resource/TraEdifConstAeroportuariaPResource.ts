import { TraEdifConstAeroportuariaP } from "./../entity/entities/TraEdifConstAeroportuariaP"
import { TraEdifConstAeroportuariaPContextResource, TraEdifConstAeroportuariaPContextCollectionResource } from "./../context/TraEdifConstAeroportuariaPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraEdifConstAeroportuariaPResource extends AbstractResource {
    public entityClass() {
        return TraEdifConstAeroportuariaP
    }
}

export class TraEdifConstAeroportuariaPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraEdifConstAeroportuariaP
    }
}

module.exports={TraEdifConstAeroportuariaPResource, TraEdifConstAeroportuariaPCollectionResource }