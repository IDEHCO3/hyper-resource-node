import { LimTerraIndigenaP } from "./../entity/entities/LimTerraIndigenaP"
import { LimTerraIndigenaPContextResource, LimTerraIndigenaPContextCollectionResource } from "./../context/LimTerraIndigenaPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LimTerraIndigenaPResource extends AbstractResource {
    public entityClass() {
        return LimTerraIndigenaP
    }
}

export class LimTerraIndigenaPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LimTerraIndigenaP
    }
}

module.exports={LimTerraIndigenaPResource, LimTerraIndigenaPCollectionResource }