import { EncTermeletricaP } from "./../entity/entities/EncTermeletricaP"
import { EncTermeletricaPContextResource, EncTermeletricaPContextCollectionResource } from "./../context/EncTermeletricaPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class EncTermeletricaPResource extends AbstractResource {
    public entityClass() {
        return EncTermeletricaP
    }
}

export class EncTermeletricaPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return EncTermeletricaP
    }
}

module.exports={EncTermeletricaPResource, EncTermeletricaPCollectionResource }