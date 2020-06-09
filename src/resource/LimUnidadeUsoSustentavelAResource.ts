import { LimUnidadeUsoSustentavelA } from "./../entity/entities/LimUnidadeUsoSustentavelA"
import { LimUnidadeUsoSustentavelAContextResource, LimUnidadeUsoSustentavelAContextCollectionResource } from "./../context/LimUnidadeUsoSustentavelAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LimUnidadeUsoSustentavelAResource extends AbstractResource {
    public entityClass() {
        return LimUnidadeUsoSustentavelA
    }
}

export class LimUnidadeUsoSustentavelACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LimUnidadeUsoSustentavelA
    }
}

module.exports={LimUnidadeUsoSustentavelAResource, LimUnidadeUsoSustentavelACollectionResource }