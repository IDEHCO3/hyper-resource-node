import { LimUnidadeProtecaoIntegralA } from "./../entity/entities/LimUnidadeProtecaoIntegralA"
import { LimUnidadeProtecaoIntegralAContextResource, LimUnidadeProtecaoIntegralAContextCollectionResource } from "./../context/LimUnidadeProtecaoIntegralAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LimUnidadeProtecaoIntegralAResource extends AbstractResource {
    public entityClass() {
        return LimUnidadeProtecaoIntegralA
    }
}

export class LimUnidadeProtecaoIntegralACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LimUnidadeProtecaoIntegralA
    }
}

module.exports={LimUnidadeProtecaoIntegralAResource, LimUnidadeProtecaoIntegralACollectionResource }