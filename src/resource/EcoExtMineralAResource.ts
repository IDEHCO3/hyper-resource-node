import { EcoExtMineralA } from "./../entity/entities/EcoExtMineralA"
import { EcoExtMineralAContextResource, EcoExtMineralAContextCollectionResource } from "./../context/EcoExtMineralAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class EcoExtMineralAResource extends AbstractResource {
    public entityClass() {
        return EcoExtMineralA
    }
}

export class EcoExtMineralACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return EcoExtMineralA
    }
}

module.exports={EcoExtMineralAResource, EcoExtMineralACollectionResource }