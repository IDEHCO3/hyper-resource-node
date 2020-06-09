import { HidRecifeA } from "./../entity/entities/HidRecifeA"
import { HidRecifeAContextResource, HidRecifeAContextCollectionResource } from "./../context/HidRecifeAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidRecifeAResource extends AbstractResource {
    public entityClass() {
        return HidRecifeA
    }
}

export class HidRecifeACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidRecifeA
    }
}

module.exports={HidRecifeAResource, HidRecifeACollectionResource }