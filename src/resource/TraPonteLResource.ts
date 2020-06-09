import { TraPonteL } from "./../entity/entities/TraPonteL"
import { TraPonteLContextResource, TraPonteLContextCollectionResource } from "./../context/TraPonteLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraPonteLResource extends AbstractResource {
    public entityClass() {
        return TraPonteL
    }
}

export class TraPonteLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraPonteL
    }
}

module.exports={TraPonteLResource, TraPonteLCollectionResource }