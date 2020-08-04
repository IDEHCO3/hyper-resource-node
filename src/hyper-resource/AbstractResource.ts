//import {Type, ParamTypes, ReturnType} from "reflect-metadata"
import {
  Type,
  ParamTypes,
  ReturnType,
  Description,
  Example,
} from "./interpreter";
import { getConnection } from "typeorm";
import { ContextResource } from "./ContextResource";
const connection = getConnection();
const express = require("express");

export abstract class AbstractResource {
  protected response: any;
  protected request: any;
  protected context: ContextResource;

  constructor(req: any, res: any) {
    this.response = res;
    this.request = req;
    this.context = new ContextResource();
  }
  public abstract entityClass(): any;
  public attributeNames(): object {
    const res = connection.getRepository(this.entityClass()).metadata
      .propertiesMap;
    console.log(res);
    return res;
    return; //connection.getRepository(this.entityClass()).metadata.propertiesMap
  }
  public primaryKeyName(): string | undefined {
    const primaryKeys = connection.getRepository(this.entityClass()).metadata
      .primaryColumns;
    if (primaryKeys.length == 0) return null;
    return primaryKeys[0].propertyName;
  }

  protected operationNames(): Array<string> {
    return ["projection"];
  }

  protected pathHasURL(pathFromURL: string) {
    return (
      pathFromURL.search(/http:/i) > -1 ||
      pathFromURL.search(/https/i) > -1 ||
      pathFromURL.search(/www./i) > -1
    );
  }

  protected async getFromProjection(attributeNames: string[]) {
    return await connection
      .getRepository(this.entityClass())
      .createQueryBuilder(this.entityClass().name.toLowerCase())
      .where(this.getParameterValueToFindOne())
      .select(attributeNames)
      .getRawOne();
  }
  protected areAttributeNames(commaListString: string) {
    /* commaListString is a string of attribute names separated by comma */
    let arr_attribute_names = commaListString.toLowerCase().trim().split(",");
    const objAtributeNames = this.attributeNames();
    let cont = 1;
    for (const atName of arr_attribute_names) {
      if (objAtributeNames[atName] === undefined) {
        return false;
      }
    }
    return true;
  }
  @Type(Function)
  @ParamTypes(String)
  @ReturnType(Object)
  @Description(
    "Give a list as string separated by comma, where each string is a property name, returns a list"
  )
  protected async pre_projection(commaListString: string) {
    if (!this.areAttributeNames(commaListString))
      return this.response
        .status(400)
        .send(
          "The request does not support operations or some attributes do not exist."
        );
    return await this.projection(commaListString);
  }
  @Example("http:\\your-serverapicountriesprojection\name,abbreviation")
  public async projection(commaListString: string) {
    const result = await this.getFromProjection(commaListString.split(","));
    return (await this.isJsonRequested())
      ? this.response.json(result)
      : this.response.json(result);
  }
  protected isJsonRequested(): boolean {
    return (
      this.request.headers.accept === "*/*" ||
      this.request.headers.accept === "application/json" ||
      this.request.headers.accept === "application/geo+json" ||
      this.request.headers.accept === "application/geojson"
    );
  }
  protected getParameterValueToFindOne() {
    if (Object.keys(this.request.params).find((key) => key === "id"))
      return { [this.primaryKeyName()]: this.request.params["id"] };
    else this.request.params;
  }
  public async getRepresentation() {
    let entity = null;
    entity = await connection
      .getRepository(this.entityClass())
      .findOne(this.getParameterValueToFindOne());
    return this.isJsonRequested()
      ? this.response.json(entity)
      : this.response.json(entity);
  }
  public async getRepresentationGivenParameters() {
    if (!this.request.params) return this.getRepresentation();
    const operationNameOrAtributeNames = this.request.params["0"]
      .split("/")[0]
      .trim()
      .toLowerCase();

    if (this.operationNames().includes(operationNameOrAtributeNames)) {
      const entities = await connection
        .getRepository(this.entityClass())
        .findOne(this.getParameterValueToFindOne());
      return (await this.isJsonRequested())
        ? this.response.json(entities)
        : this.response.json(entities);
    } else {
      //Is not a public operation to be called out"
      return await this.pre_projection(operationNameOrAtributeNames);
    }
  }
  public async head() {
    return this.response.status(501).json("Method HEAD not implemented yet.");
  }
  public async headGivenParameters() {
    return this.response.status(501).json("Method HEAD not implemented yet.");
  }
  public async patch() {
    return this.response.status(501).json("Method PATCH not implemented yet.");
  }
  public async options() {
    return this.response.json(this.context.contextResource());
  }
  public async optionsGivenParameters() {
    return;
  }
  public async post(attributeNameValueJsonObject) {
    let repository = connection.getRepository(this.entityClass());
    const entity = await repository.save(attributeNameValueJsonObject);
    return this.response.status(201).json(entity[this.primaryKeyName()]);
  }
  public async delete() {
    let whereStr = `${this.primaryKeyName()} = :${this.primaryKeyName()}`;
    let whereParam = { [this.primaryKeyName()]: this.request.params["id"] };
    const res = await connection
      .createQueryBuilder()
      .delete()
      .from(this.entityClass())
      .where(whereStr, whereParam)
      .execute();
    return this.response.status(200).json(1);
  }
  public async put(attributeNameValueJsonObject) {
    let res = await connection
      .createQueryBuilder()
      .update(this.entityClass())
      .set(attributeNameValueJsonObject)
      .where(`${this.primaryKeyName()} = :${this.primaryKeyName()}`, {
        [this.primaryKeyName()]: this.request.params["id"],
      })
      .execute();
    return this.response.status(200).json(1);
  }
}
