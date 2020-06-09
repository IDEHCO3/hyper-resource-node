import { TraTravessiaL } from "./../entity/entities/TraTravessiaL"
import { TraTravessiaLContextResource, TraTravessiaLContextCollectionResource } from "./../context/TraTravessiaLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraTravessiaLResource extends AbstractResource {
    public entityClass() {
        return TraTravessiaL
    }
}

export class TraTravessiaLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraTravessiaL
    }
}

module.exports={TraTravessiaLResource, TraTravessiaLCollectionResource }