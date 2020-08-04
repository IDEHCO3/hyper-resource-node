import {
  Type,
  ParamTypes,
  ReturnType,
  Description,
  Example,
} from "./interpreter";
import { getConnection, getRepository } from "typeorm";
const connection = getConnection();
import { AbstractResource } from "./AbstractResource";
import { URL } from "url";
import { LimUnidadeFederacaoA } from "../entity/entities/LimUnidadeFederacaoA";
import analyse from "../url-interpreter/interpreter";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";
const collectionFunctionNames = [
  "filter",
  "filterandcollect",
  "filterandcount",
  "projectionandfilter",
  "collect",
  "offsetlimit",
  "count",
  "distinct",
  "groupbycount",
  "groupbysum",
  "offsetlimitandcollect",
  "join",
  "has",
];

export abstract class AbstractCollectionResource extends AbstractResource {
  //constructor(req : any, res : any) { super(req, res) }
  protected firstCommand(params_url: string): string {
    return params_url.split("/")[0];
  }
  protected responseForOperation(
    operationName: string,
    pathParameterFromUrl: string
  ) {}
  protected async getFromProjection(attributeNames: string[]) {
    return await connection
      .getRepository(this.entityClass())
      .createQueryBuilder(this.entityClass().name.toLowerCase())
      .select(attributeNames)
      .getRawMany();
  }
  async getRepresentation() {
    const entities = await connection.getRepository(this.entityClass()).find();
    console.log("this.request.params: ", this.request.params);
    return (await this.isJsonRequested())
      ? this.response.json(entities)
      : this.response.json(entities);
  }
  async getRepresentationGivenParameters() {
    if (!this.request.params) return this.getRepresentation();
    // this.request.params example ==> { '0': 'offsetlimit/1&10' }
    const operationNameOrAtributeNames = this.request.params["0"]
      .split("/")[0]
      .trim()
      .toLowerCase();
    try {
      console.log(operationNameOrAtributeNames);
      if (this.operationNames().includes(operationNameOrAtributeNames)) {
        const methodExecuteName = "pre_" + operationNameOrAtributeNames;
        const result = await this[methodExecuteName]();
        ///const entities =  await connection.getRepository(this.entityClass()).find()
        return (await this.isJsonRequested())
          ? this.response.json(result)
          : this.response.json(result);
      } else {
        //Is not a public operation to be called out"
        return await this.projection(operationNameOrAtributeNames);
      }
    } catch (e) {
      console.log(e);
      return this.response.status(400).json(e.message);
    }
  }
  public async delete() {
    return this.response
      .status(400)
      .json("Collection does not support delete yet.");
  }
  public async put(attributeNameValueJsonObject) {
    return this.response.status(400).json("Collection does not support put");
  }
  protected async pre_filter() {
    return await this.filter(this.request.params["0"], this.entityClass());
  }
  @Type(Function)
  @ParamTypes(String)
  @ReturnType(Array)
  @Description("Returns an list of objects filtered by an expression.")
  @Example("http://your-serverapicountries/filter/abbreviation/in/BR,AR,US,ES")
  async filter(expression: string, entitClass: any): Promise<any[]> {
    const metadata = connection.getMetadata(entitClass);
    let result = analyse(expression, metadata);
    let whereExpression = result[0];
    let keyValParams = result[1];
    // "(lim_unidade_federacao_a.idObjeto > :idObjeto OR lim_unidade_federacao_a.geocodigo > :geocodigo) AND lim_unidade_federacao_a.cdInsumo = :cdInsumo"
    const elements = await getRepository(entitClass)
      .createQueryBuilder(metadata.tableName)
      .where(whereExpression, keyValParams)
      .execute();
    return elements;
  }
  @ReturnType(Array)
  @Description(
    "List as string separated by comma, where each string is a property name"
  )
  @Example(
    "http://your-server/api/countries/filter/abbreviation/in/BR,AR,US,ES"
  )
  filterandcollect(expression: string): any[] {
    return [];
  }
  filterandcount(expression: string): number {
    return;
  }
  projectionandfilter(expression: string): number {
    return;
  }
  collect(expression: string): any[] {
    return [];
  }
  protected async pre_offsetlimit() {
    // offsetlimit expects 2 arguments. Ex.: offsetlimit/1&10
    const argumentsFromURL = this.request.params["0"].split("/");
    if (argumentsFromURL.length < 2)
      // Ex.: offsetlimit
      throw new SyntaxError(
        "The offsetlimit operation requires two numeric arguments.Ex.: offsetlimit/1&10"
      );

    if (argumentsFromURL.length === 2) {
      //  Ex.: offsetlimit/1&10 or offsetlimit/110/. Note that 110/ is an error: missing &
      const limits = argumentsFromURL[1].split("&");
      if (limits.length < 2 || isNaN(limits[0]) || isNaN(limits[1]))
        throw new SyntaxError(
          "The offsetlimit operation requires two numeric arguments.Ex.: offsetlimit/1&10"
        );
      return await this.offsetlimit(Number(limits[0]), Number(limits[1]));
    } else if (argumentsFromURL.length >= 2) {
      //  Ex.: offsetlimit/1&10/collect/zzzz
      return this.pre_offsetlimitcollect();
    }
    throw new SyntaxError(
      "The offsetlimit operation requires two numeric arguments.Ex.: offsetlimit/1&10"
    );
  }
  @Type(Function)
  @ParamTypes(Number, Number)
  @ReturnType(Array)
  @Description("Returns resources start in begin and limited to limit.")
  @Example("http://your-server/api/countries/count")
  public async offsetlimit(begin: number, end: number) {
    // begin: number, end: number
    if (end < 1) return [];
    const eClass = this.entityClass();
    const res = await getRepository(eClass)
      .createQueryBuilder(eClass.name.toLowerCase())
      .skip(begin)
      .take(end)
      .getMany();
    return res;
  }
  protected async pre_count() {
    return await this.count();
  }
  @Type(Function)
  @ParamTypes(null)
  @ReturnType(Number)
  @Description("Returns the number of resources.")
  @Example("http://your-server/api/countries/count")
  public async count() {
    const objCounter = await connection
      .getRepository(this.entityClass())
      .createQueryBuilder(this.entityClass().name.toLowerCase())
      .select("count(*)", "count")
      .getRawOne();
    return Number(objCounter.count);
  }

  distinct(): Array<Object> {
    return;
  }
  protected async pre_groupbycount() {
    // groupbycount expects 1 or 2 arguments. Ex.: groupbycount/name&1
    const argumentsFromURL = this.request.params["0"].split("/");
    if (argumentsFromURL.length === 2) {
      const parameters = argumentsFromURL[1].split("&"); //Ex.: groupbycount/name&1
      return await this.groupbycount(parameters[0], parameters[1] || null);
    }
  }
  @Type(Function)
  @ParamTypes(String, [Number])
  @ReturnType(Array)
  @Description("Returns resources counted by a field passed as first argument.")
  @Example("http://your-server/api/cities/groupbycount/name&1")
  public async groupbycount(field: string, order = null) {
    const aName = this.entityClass().name.toLowerCase();
    const objCounter = await connection
      .getRepository(this.entityClass())
      .createQueryBuilder(aName)
      .select(`${aName}.${field}, count(*)`)
      .groupBy(`${aName}.${field}`);
    if (order === null) return await objCounter.getRawMany();
    if (order === "1")
      return await objCounter.orderBy(`${aName}.${field}`, "ASC").getRawMany();
    if (order === "-1")
      return await objCounter.orderBy(`${aName}.${field}`, "DESC").getRawMany();
  }
  protected async pre_groupbysum() {
    // groupbycount expects 2 or 3 arguments. Ex.: groupbysum/gender&salary&1
    const argumentsFromURL = this.request.params["0"].split("/");
    if (argumentsFromURL.length === 2) {
      const parameters = argumentsFromURL[1].split("&");
      if (parameters.length >= 2 && parameters.length <= 3)
        return await this.groupbysum(
          parameters[0],
          parameters[1],
          parameters[2] || null
        );
      else
        throw new SyntaxError(
          "The groupbysum operation requires two or three numeric arguments.Ex.: groupbysum/gender&salary&1"
        );
    } else
      throw new SyntaxError(
        "The groupbysum operation requires two or three numeric arguments.Ex.: groupbysum/gender&salary&1"
      );
    return [];
  }
  @Type(Function)
  @ParamTypes(String, String, [Number])
  @ReturnType(Array)
  @Description(
    "Returns the sum grouped by the field passed as the first second argument."
  )
  @Example("http://your-server/api/employees/groupbysum/gender&salary&1")
  public async groupbysum(
    fieldToGroup: string,
    fieldToSum: string,
    order = null
  ) {
    const aName = this.entityClass().name.toLowerCase();
    const objSum = await connection
      .getRepository(this.entityClass())
      .createQueryBuilder(aName)
      .select(`${aName}.${fieldToGroup}`, `${fieldToGroup}`)
      .addSelect(`SUM(${aName}.${fieldToSum})`, "sum")
      .groupBy(`${aName}.${fieldToGroup}`);
    if (order === null) return await objSum.getRawMany();
    if (order === "1")
      return await objSum
        .orderBy(`${aName}.${fieldToGroup}`, "ASC")
        .getRawMany();
    if (order === "-1")
      return await objSum
        .orderBy(`${aName}.${fieldToGroup}`, "DESC")
        .getRawMany();
  }
  protected async pre_offsetlimitcollect() {
    return await this.offsetlimitandcollect(1, 2, "");
  }
  offsetlimitandcollect(
    begin: number,
    end: number,
    expression: string
  ): Array<Object> {
    return [];
  }
  join(iri: URL, expression: string): Array<Object> {
    return [];
  }
  has(objectOrIRI: string): boolean {
    return;
  }
  protected operationNames(): Array<string> {
    let name_to_operation = super.operationNames();
    name_to_operation.push(...collectionFunctionNames);
    return name_to_operation;
  }
}
