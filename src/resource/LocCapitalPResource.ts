import { LocCapitalP } from "./../entity/entities/LocCapitalP"
import { LocCapitalPContextResource, LocCapitalPContextCollectionResource } from "./../context/LocCapitalPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LocCapitalPResource extends AbstractResource {
    public entityClass() {
        return LocCapitalP
    }
}

export class LocCapitalPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LocCapitalP
    }
}

module.exports={LocCapitalPResource, LocCapitalPCollectionResource }