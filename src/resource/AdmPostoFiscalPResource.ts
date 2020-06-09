import { AdmPostoFiscalP } from "./../entity/entities/AdmPostoFiscalP"
import { AdmPostoFiscalPContextResource, AdmPostoFiscalPContextCollectionResource } from "./../context/AdmPostoFiscalPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class AdmPostoFiscalPResource extends AbstractResource {
    public entityClass() {
        return AdmPostoFiscalP
    }
}

export class AdmPostoFiscalPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return AdmPostoFiscalP
    }
}

module.exports={AdmPostoFiscalPResource, AdmPostoFiscalPCollectionResource }