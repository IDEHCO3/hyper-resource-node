import { EcoExtMineralP } from "./../entity/entities/EcoExtMineralP"
import { EcoExtMineralPContextResource, EcoExtMineralPContextCollectionResource } from "./../context/EcoExtMineralPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class EcoExtMineralPResource extends AbstractResource {
    public entityClass() {
        return EcoExtMineralP
    }
}

export class EcoExtMineralPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return EcoExtMineralP
    }
}

module.exports={EcoExtMineralPResource, EcoExtMineralPCollectionResource }