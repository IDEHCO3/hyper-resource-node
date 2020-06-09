import { LimUnidadeFederacaoA } from "./../entity/entities/LimUnidadeFederacaoA"
import { LimUnidadeFederacaoAContextResource, LimUnidadeFederacaoAContextCollectionResource } from "./../context/LimUnidadeFederacaoAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LimUnidadeFederacaoAResource extends AbstractResource {
    public entityClass() {
        return LimUnidadeFederacaoA
    }
}

export class LimUnidadeFederacaoACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LimUnidadeFederacaoA
    }
}

module.exports={LimUnidadeFederacaoAResource, LimUnidadeFederacaoACollectionResource }