import { HidBarragemP } from "./../entity/entities/HidBarragemP"
import { HidBarragemPContextResource, HidBarragemPContextCollectionResource } from "./../context/HidBarragemPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidBarragemPResource extends AbstractResource {
    public entityClass() {
        return HidBarragemP
    }
}

export class HidBarragemPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidBarragemP
    }
}

module.exports={HidBarragemPResource, HidBarragemPCollectionResource }