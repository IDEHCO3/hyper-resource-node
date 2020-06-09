import { LimMunicipioA } from "./../entity/entities/LimMunicipioA"
import { LimMunicipioAContextResource, LimMunicipioAContextCollectionResource } from "./../context/LimMunicipioAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LimMunicipioAResource extends AbstractResource {
    public entityClass() {
        return LimMunicipioA
    }
}

export class LimMunicipioACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LimMunicipioA
    }
}

module.exports={LimMunicipioAResource, LimMunicipioACollectionResource }