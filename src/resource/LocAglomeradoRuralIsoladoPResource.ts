import { LocAglomeradoRuralIsoladoP } from "./../entity/entities/LocAglomeradoRuralIsoladoP"
import { LocAglomeradoRuralIsoladoPContextResource, LocAglomeradoRuralIsoladoPContextCollectionResource } from "./../context/LocAglomeradoRuralIsoladoPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class LocAglomeradoRuralIsoladoPResource extends AbstractResource {
    public entityClass() {
        return LocAglomeradoRuralIsoladoP
    }
}

export class LocAglomeradoRuralIsoladoPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return LocAglomeradoRuralIsoladoP
    }
}

module.exports={LocAglomeradoRuralIsoladoPResource, LocAglomeradoRuralIsoladoPCollectionResource }