import { LocCidadeP } from "./../entity/entities/LocCidadeP"
import { LocCidadePContextResource, LocCidadePContextCollectionResource } from "./../context/LocCidadePContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LocCidadePResource extends AbstractResource {
    public entityClass() {
        return LocCidadeP
    }
}

export class LocCidadePCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LocCidadeP
    }
}

module.exports={LocCidadePResource, LocCidadePCollectionResource }