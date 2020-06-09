import { HidQuedaDaguaL } from "./../entity/entities/HidQuedaDaguaL"
import { HidQuedaDaguaLContextResource, HidQuedaDaguaLContextCollectionResource } from "./../context/HidQuedaDaguaLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidQuedaDaguaLResource extends AbstractResource {
    public entityClass() {
        return HidQuedaDaguaL
    }
}

export class HidQuedaDaguaLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidQuedaDaguaL
    }
}

module.exports={HidQuedaDaguaLResource, HidQuedaDaguaLCollectionResource }