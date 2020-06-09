import { RelPontoCotadoAltimetricoP } from "./../entity/entities/RelPontoCotadoAltimetricoP"
import { RelPontoCotadoAltimetricoPContextResource, RelPontoCotadoAltimetricoPContextCollectionResource } from "./../context/RelPontoCotadoAltimetricoPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class RelPontoCotadoAltimetricoPResource extends AbstractResource {
    public entityClass() {
        return RelPontoCotadoAltimetricoP
    }
}

export class RelPontoCotadoAltimetricoPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return RelPontoCotadoAltimetricoP
    }
}

module.exports={RelPontoCotadoAltimetricoPResource, RelPontoCotadoAltimetricoPCollectionResource }