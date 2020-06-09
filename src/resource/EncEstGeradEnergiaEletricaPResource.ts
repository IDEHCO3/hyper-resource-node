import { EncEstGeradEnergiaEletricaP } from "./../entity/entities/EncEstGeradEnergiaEletricaP"
import { EncEstGeradEnergiaEletricaPContextResource, EncEstGeradEnergiaEletricaPContextCollectionResource } from "./../context/EncEstGeradEnergiaEletricaPContext"
import { AbstractResource } from "./../hyper-resource/AbstractResource"
import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"
export class EncEstGeradEnergiaEletricaPResource extends AbstractResource {
    public entityClass() {
        return EncEstGeradEnergiaEletricaP
    }
}

export class EncEstGeradEnergiaEletricaPCollectionResource extends AbstractCollectionResource {
    public entityClass() {
        return EncEstGeradEnergiaEletricaP
    }
}

module.exports={EncEstGeradEnergiaEletricaPResource, EncEstGeradEnergiaEletricaPCollectionResource }