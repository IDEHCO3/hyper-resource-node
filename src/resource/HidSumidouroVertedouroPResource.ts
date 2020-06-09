import { HidSumidouroVertedouroP } from "./../entity/entities/HidSumidouroVertedouroP"
import { HidSumidouroVertedouroPContextResource, HidSumidouroVertedouroPContextCollectionResource } from "./../context/HidSumidouroVertedouroPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class HidSumidouroVertedouroPResource extends AbstractResource {
    public entityClass() {
        return HidSumidouroVertedouroP
    }
}

export class HidSumidouroVertedouroPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return HidSumidouroVertedouroP
    }
}

module.exports={HidSumidouroVertedouroPResource, HidSumidouroVertedouroPCollectionResource }