import { TraSinalizacaoP } from "./../entity/entities/TraSinalizacaoP"
import { TraSinalizacaoPContextResource, TraSinalizacaoPContextCollectionResource } from "./../context/TraSinalizacaoPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class TraSinalizacaoPResource extends AbstractResource {
    public entityClass() {
        return TraSinalizacaoP
    }
}

export class TraSinalizacaoPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return TraSinalizacaoP
    }
}

module.exports={TraSinalizacaoPResource, TraSinalizacaoPCollectionResource }