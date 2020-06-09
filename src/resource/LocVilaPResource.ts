import { LocVilaP } from "./../entity/entities/LocVilaP"
import { LocVilaPContextResource, LocVilaPContextCollectionResource } from "./../context/LocVilaPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LocVilaPResource extends AbstractResource {
    public entityClass() {
        return LocVilaP
    }
}

export class LocVilaPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LocVilaP
    }
}

module.exports={LocVilaPResource, LocVilaPCollectionResource }