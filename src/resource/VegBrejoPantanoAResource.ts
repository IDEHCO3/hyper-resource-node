import { VegBrejoPantanoA } from "./../entity/entities/VegBrejoPantanoA"
import { VegBrejoPantanoAContextResource, VegBrejoPantanoAContextCollectionResource } from "./../context/VegBrejoPantanoAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class VegBrejoPantanoAResource extends AbstractResource {
    public entityClass() {
        return VegBrejoPantanoA
    }
}

export class VegBrejoPantanoACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return VegBrejoPantanoA
    }
}

module.exports={VegBrejoPantanoAResource, VegBrejoPantanoACollectionResource }