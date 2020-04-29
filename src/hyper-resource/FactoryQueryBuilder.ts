export class FactoryQueryBuilder  {
    // This class has strong coupling with typeorm>>QueryBuilder
    private static instance: FactoryQueryBuilder
    constructor() {
        if(!FactoryQueryBuilder.instance){
            FactoryQueryBuilder.instance = this
        }
        return FactoryQueryBuilder.instance
    }
    converterValueToType(attributeValue : string, defaulType : string ='string') {
        return attributeValue
    }
    converterArrayValuestoType(listOfValue : string[], defaulType : string = 'string' ) {
        return listOfValue
    }
    queryBuilderForIN(attributeName : string, inPredicate : string, defaulType : string = 'string') {
        //"sigla/in/rj,es,mg"=>["sigla IN (:...list_sigla)", { list_sigla: ['rj','es','mg'] }]    
        const listAttName = 'list_'+ attributeName
        const firstPart = `${attributeName} IN (:...${listAttName})`
        const arrPredicate = this.converterArrayValuestoType(inPredicate.split(','), defaulType)
        const secondPart = {[listAttName]: arrPredicate}
        return [firstPart, secondPart]
    }
    queryBuilderForEQ(attributeName : string, attributeValue : string, defaulType : string = 'string') {
        //firstName/eq/Timber => "firstName = :firstName", { firstName: "Timber" }
        const firstPart = `${attributeName} = :${attributeName}`
        const secondPart = {[attributeName]: this.converterValueToType(attributeValue, defaulType)}
        return [firstPart, secondPart ]
    }
}

const instance = new FactoryQueryBuilder()
Object.freeze(instance)
export default instance