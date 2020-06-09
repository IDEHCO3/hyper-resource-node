import { TraPistaPontoPousoP } from "./../entity/entities/TraPistaPontoPousoP"
import { TraPistaPontoPousoPContextResource, TraPistaPontoPousoPContextCollectionResource } from "./../context/TraPistaPontoPousoPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraPistaPontoPousoPResource extends AbstractResource {
    public entityClass() {
        return TraPistaPontoPousoP
    }
}

export class TraPistaPontoPousoPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraPistaPontoPousoP
    }
}

module.exports={TraPistaPontoPousoPResource, TraPistaPontoPousoPCollectionResource }