import { HidCorredeiraP } from "./../entity/entities/HidCorredeiraP"
import { HidCorredeiraPContextResource, HidCorredeiraPContextCollectionResource } from "./../context/HidCorredeiraPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidCorredeiraPResource extends AbstractResource {
    public entityClass() {
        return HidCorredeiraP
    }
}

export class HidCorredeiraPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidCorredeiraP
    }
}

module.exports={HidCorredeiraPResource, HidCorredeiraPCollectionResource }