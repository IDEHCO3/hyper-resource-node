import { AdmEdifPubMilitarA } from "./../entity/entities/AdmEdifPubMilitarA"
import { AdmEdifPubMilitarAContextResource, AdmEdifPubMilitarAContextCollectionResource } from "./../context/AdmEdifPubMilitarAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class AdmEdifPubMilitarAResource extends AbstractResource {
    public entityClass() {
        return AdmEdifPubMilitarA
    }
}

export class AdmEdifPubMilitarACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return AdmEdifPubMilitarA
    }
}

module.exports={AdmEdifPubMilitarAResource, AdmEdifPubMilitarACollectionResource }