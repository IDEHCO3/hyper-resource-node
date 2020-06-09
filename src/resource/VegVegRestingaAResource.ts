import { VegVegRestingaA } from "./../entity/entities/VegVegRestingaA"
import { VegVegRestingaAContextResource, VegVegRestingaAContextCollectionResource } from "./../context/VegVegRestingaAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class VegVegRestingaAResource extends AbstractResource {
    public entityClass() {
        return VegVegRestingaA
    }
}

export class VegVegRestingaACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return VegVegRestingaA
    }
}

module.exports={VegVegRestingaAResource, VegVegRestingaACollectionResource }