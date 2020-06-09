import { EcoEdifAgropecExtVegetalPescaP } from "./../entity/entities/EcoEdifAgropecExtVegetalPescaP"
import { EcoEdifAgropecExtVegetalPescaPContextResource, EcoEdifAgropecExtVegetalPescaPContextCollectionResource } from "./../context/EcoEdifAgropecExtVegetalPescaPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class EcoEdifAgropecExtVegetalPescaPResource extends AbstractResource {
    public entityClass() {
        return EcoEdifAgropecExtVegetalPescaP
    }
}

export class EcoEdifAgropecExtVegetalPescaPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return EcoEdifAgropecExtVegetalPescaP
    }
}

module.exports={EcoEdifAgropecExtVegetalPescaPResource, EcoEdifAgropecExtVegetalPescaPCollectionResource }