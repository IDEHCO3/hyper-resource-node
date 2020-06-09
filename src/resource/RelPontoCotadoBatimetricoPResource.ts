import { RelPontoCotadoBatimetricoP } from "./../entity/entities/RelPontoCotadoBatimetricoP"
import { RelPontoCotadoBatimetricoPContextResource, RelPontoCotadoBatimetricoPContextCollectionResource } from "./../context/RelPontoCotadoBatimetricoPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class RelPontoCotadoBatimetricoPResource extends AbstractResource {
    public entityClass() {
        return RelPontoCotadoBatimetricoP
    }
}

export class RelPontoCotadoBatimetricoPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return RelPontoCotadoBatimetricoP
    }
}

module.exports={RelPontoCotadoBatimetricoPResource, RelPontoCotadoBatimetricoPCollectionResource }