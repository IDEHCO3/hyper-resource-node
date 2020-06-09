import { VegMangueA } from "./../entity/entities/VegMangueA"
import { VegMangueAContextResource, VegMangueAContextCollectionResource } from "./../context/VegMangueAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class VegMangueAResource extends AbstractResource {
    public entityClass() {
        return VegMangueA
    }
}

export class VegMangueACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return VegMangueA
    }
}

module.exports={VegMangueAResource, VegMangueACollectionResource }