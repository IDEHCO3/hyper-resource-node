import { EncHidreletricaP } from "./../entity/entities/EncHidreletricaP"
import { EncHidreletricaPContextResource, EncHidreletricaPContextCollectionResource } from "./../context/EncHidreletricaPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class EncHidreletricaPResource extends AbstractResource {
    public entityClass() {
        return EncHidreletricaP
    }
}

export class EncHidreletricaPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return EncHidreletricaP
    }
}

module.exports={EncHidreletricaPResource, EncHidreletricaPCollectionResource }