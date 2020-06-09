import { LocAldeiaIndigenaP } from "./../entity/entities/LocAldeiaIndigenaP"
import { LocAldeiaIndigenaPContextResource, LocAldeiaIndigenaPContextCollectionResource } from "./../context/LocAldeiaIndigenaPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LocAldeiaIndigenaPResource extends AbstractResource {
    public entityClass() {
        return LocAldeiaIndigenaP
    }
}

export class LocAldeiaIndigenaPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LocAldeiaIndigenaP
    }
}

module.exports={LocAldeiaIndigenaPResource, LocAldeiaIndigenaPCollectionResource }