import  {Type, ParamTypes,ReturnType, Description, Example } from "./interpreter"
import {getConnection, getRepository} from "typeorm"

const connection = getConnection()

import { AbstractResource } from "./AbstractResource";

import { URL } from "url";
import { LimUnidadeFederacaoA } from "../entity/entities/LimUnidadeFederacaoA";
import analyse from "../url-interpreter/interpreter";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";

export abstract class AbstractCollectionResource extends AbstractResource {
    //constructor(req : any, res : any) { super(req, res) }
    protected firstCommand(params_url : string) : string {
        return params_url.split("/")[0]
    }
    protected responseForOperation(operationName : string, pathParameterFromUrl : string) {
    }
    protected async getFromProjection(attributeNames : string[]) {
        return await connection.getRepository(this.entityClass()).createQueryBuilder(this.entityClass().name.toLowerCase()).select(attributeNames).getRawMany()
    }
    async getRepresentation() {
     
        const entities = await connection.getRepository(this.entityClass()).find()
        console.log("this.request.params: ",this.request.params)
        return await this.isJsonRequested() ? this.response.json(entities): this.response.json(entities)
    }
    async getRepresentationGivenParameters() {
        if (!this.request.params)
            return this.getRepresentation() 
        const operationNameOrAtributeNames = this.request.params['0'].split('/')[0].trim().toLowerCase()
        
        if (this.hasOperation(operationNameOrAtributeNames)) {
            const operation = this.mapNameToOperation()[operationNameOrAtributeNames]
            
            try {
                const entities = await operation(this.request.params[0], this.entityClass())
                ///const entities =  await connection.getRepository(this.entityClass()).find()
                return await this.isJsonRequested() ? this.response.json(entities): this.response.json(entities)
            } catch(e) {
                console.log(e)
            }
        } else {//Is not a public operation to be called out"
            return await this.projection(operationNameOrAtributeNames)
        }
        
        
    }
    public async delete() {
        return this.response.status(400).json("Collection does not support delete yet.")
    }
    public async put(attributeNameValueJsonObject) {
        return this.response.status(400).json("Collection does not support put")
    }
    @Type(Function)
    @ParamTypes(String)
    @ReturnType(Array)
    @Description("Returns an list of objects filtered by an expression.")
    @Example("http:\\your-server\api\countries\filter\abbreviation\in\BR,AR,US,ES")
    async filter(expression: string, entityClass:any):Promise<any[]> {
        const metadata = connection.getMetadata(entityClass);

        let result = analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        const elements = await getRepository(entityClass)
                             .createQueryBuilder(metadata.tableName)
                             .where(whereExpression.trim(), keyValParams).execute()
        return elements
    } 
    @ReturnType(Array)
    @Description("List as string separated by comma, where each string is a property name")
    @Example("http:\\your-server\api\countries\filter\abbreviation\in\BR,AR,US,ES")
    filterAndCollect(expression: string) : any[] {
        return []
    }
    filterAndCount(expression: string) : number{
        return 
    }
    projectionAndFilter(expression: string) : number{
        return 
    }
    collect(expression: string)  :any[] {
        return []
    }
    offsetLimit(begin: number, end: number) : any[] {
        return 
    }
    count() :number {
        return 0
    }
    distinct(): Array<Object> {
        return
    } 
    groupByCount(expression: string) : Array<Object> {
        return []
    }   
    groupBySum(expression: string) : Array<Object> {
        return []
    }
    offsetLimitAndCollect(begin: number, end: number, expression: string) : Array<Object> {
        return []
    }
    join(iri: URL, expression: string) : Array<Object> {
        return[]
    }
    has(objectOrIRI: string) : boolean {
        return 
    }
    protected mapNameToOperation() : object {
        let name_to_operation= super.mapNameToOperation()
        name_to_operation['filter'] = this.filter
        name_to_operation['filterAndCollect'] = this.filterAndCollect
        name_to_operation['filterAndCount'] = this.filterAndCount
        name_to_operation['projectionAndFilter'] = this.projectionAndFilter
        name_to_operation['collect'] = this.collect
        name_to_operation['offsetLimit'] = this.offsetLimit
        name_to_operation['count'] = this.count
        name_to_operation['distinct'] = this.distinct
        name_to_operation['groupByCount'] = this.groupByCount
        name_to_operation['groupBySum'] = this.groupBySum
        name_to_operation['offsetLimitAndCollect'] = this.offsetLimitAndCollect
        name_to_operation['join'] = this.join
        name_to_operation['has'] = this.has
        return name_to_operation
    }
 
}