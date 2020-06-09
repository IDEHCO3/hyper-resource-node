import { LimUnidadeConservacaoNaoSnucA } from "./../entity/entities/LimUnidadeConservacaoNaoSnucA"
import { LimUnidadeConservacaoNaoSnucAContextResource, LimUnidadeConservacaoNaoSnucAContextCollectionResource } from "./../context/LimUnidadeConservacaoNaoSnucAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LimUnidadeConservacaoNaoSnucAResource extends AbstractResource {
    public entityClass() {
        return LimUnidadeConservacaoNaoSnucA
    }
}

export class LimUnidadeConservacaoNaoSnucACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LimUnidadeConservacaoNaoSnucA
    }
}

module.exports={LimUnidadeConservacaoNaoSnucAResource, LimUnidadeConservacaoNaoSnucACollectionResource }