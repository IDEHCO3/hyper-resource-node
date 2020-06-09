import { AdmEdifPubMilitarP } from "./../entity/entities/AdmEdifPubMilitarP"
import { AdmEdifPubMilitarPContextResource, AdmEdifPubMilitarPContextCollectionResource } from "./../context/AdmEdifPubMilitarPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class AdmEdifPubMilitarPResource extends AbstractResource {
    public entityClass() {
        return AdmEdifPubMilitarP
    }
}

export class AdmEdifPubMilitarPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return AdmEdifPubMilitarP
    }
}

module.exports={AdmEdifPubMilitarPResource, AdmEdifPubMilitarPCollectionResource }