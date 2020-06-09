import { HidTerrenoSujeitoInundacaoA } from "./../entity/entities/HidTerrenoSujeitoInundacaoA"
import { HidTerrenoSujeitoInundacaoAContextResource, HidTerrenoSujeitoInundacaoAContextCollectionResource } from "./../context/HidTerrenoSujeitoInundacaoAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidTerrenoSujeitoInundacaoAResource extends AbstractResource {
    public entityClass() {
        return HidTerrenoSujeitoInundacaoA
    }
}

export class HidTerrenoSujeitoInundacaoACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidTerrenoSujeitoInundacaoA
    }
}

module.exports={HidTerrenoSujeitoInundacaoAResource, HidTerrenoSujeitoInundacaoACollectionResource }