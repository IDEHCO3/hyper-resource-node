import { RelCurvaBatimetricaL } from "./../entity/entities/RelCurvaBatimetricaL"
import { RelCurvaBatimetricaLContextResource, RelCurvaBatimetricaLContextCollectionResource } from "./../context/RelCurvaBatimetricaLContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class RelCurvaBatimetricaLResource extends AbstractResource {
    public entityClass() {
        return RelCurvaBatimetricaL
    }
}

export class RelCurvaBatimetricaLCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return RelCurvaBatimetricaL
    }
}

module.exports={RelCurvaBatimetricaLResource, RelCurvaBatimetricaLCollectionResource }