import { LimTerraIndigenaA } from "./../entity/entities/LimTerraIndigenaA"
import { LimTerraIndigenaAContextResource, LimTerraIndigenaAContextCollectionResource } from "./../context/LimTerraIndigenaAContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LimTerraIndigenaAResource extends AbstractResource {
    public entityClass() {
        return LimTerraIndigenaA
    }
}

export class LimTerraIndigenaACollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LimTerraIndigenaA
    }
}

module.exports={LimTerraIndigenaAResource, LimTerraIndigenaACollectionResource }