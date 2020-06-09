import { TraTravessiaP } from "./../entity/entities/TraTravessiaP"
import { TraTravessiaPContextResource, TraTravessiaPContextCollectionResource } from "./../context/TraTravessiaPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraTravessiaPResource extends AbstractResource {
    public entityClass() {
        return TraTravessiaP
    }
}

export class TraTravessiaPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraTravessiaP
    }
}

module.exports={TraTravessiaPResource, TraTravessiaPCollectionResource }