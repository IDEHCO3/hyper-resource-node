//import { LimUnidadeFederacaoA } from "../entity/entities/LimUnidadeFederacaoA"
import { COMPARISON_OPERATOR_MAP, BOOLEAN_OPERATOR_MAP, COLUMN_TYPES_MAP, JSONLD_BY_COLUMN_TYPES_MAP } from "./typeHandlers"
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata"
import { Column, EntityMetadata } from "typeorm"
const fetch = require('node-fetch');

// const ATTRIBUTES = [ // TODO: replace with real class
//     "id", "name", "birthDate"
// ]

// const COMPARISON_OPERATORS = [
//     "eq", "neq", "gt", "lt", "gte", "lte"
// ]

// The index is the number of the state (index 0 is state S0)
//                        0,    1,      2,      3,      4,      5,      6,      7,      8,      9,      10,     11,     12,     13,     14,     15,     16
const STATE_TABLE = {
    attribute:           [1,    null,   null,   null,   null,   null,   null,   1,      null,   null,   null,   null,   null,   null,   null,   null,   null],
    comparison_operator: [null, 2,      null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
    value:               [null, null,   3,      null,   5,      null,   3,      null,   null,   10,     null,   null,   null,   14,     null,     16,     null], // if a token could be a <value> this path must be unique
    and:                 [null, null,   null,   0,      null,   6,      null,   null,   0,      null,   null,   12,     null,   null,   null,   null,   null],
    or:                  [null, null,   null,   0,      null,   null,   null,   null,   0,      null,   null,   null,   null,   null,   null,   null,   null],
    between:             [null, 4,      null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
    paren_open:          [7,    null,   15,     null,   9,      null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
    paren_close:         [null, null,   null,   8,      null,   null,   null,   null,   null,   null,   11,     null,   13,     null,   3,      null,   3]
}
const FINAL_STATES = [3, 8]

const AND_OPERATOR = "and"
const OR_OPERATOR = "or"
const BETWEEN = "between"
const OPEN_PAREN = "("
const CLOSE_PAREN = ")"

let categoryTable = {}
let urlConvertingTable = {}

function isReservedKeyword(wordToCheck) {
    var reservedWord = false;
    if (/^[a-z]+$/.test(wordToCheck)) {
        try {
            eval('var ' + wordToCheck + ' = 1');
        } catch (error) {
            reservedWord = true;
        }
    }
    return reservedWord;
}

function getInputCategory(input, columns:ColumnMetadata[]) {
    /*
    following the convension that attributes named
    'and', 'or', 'between' or some comparison operators is not valid

    this function is a scanner equivalent
    */
   let attributes:string[] = columns.map((column) => column.propertyName)
   
    if(attributes.includes(input)) {
        return "attribute"
    } else if (Object.keys(COMPARISON_OPERATOR_MAP).includes(input)) {
        return "comparison_operator"
    } else if (input === AND_OPERATOR) {
        return "and"
    } else if (input === OR_OPERATOR) {
        return "or"
    } else if (input === BETWEEN) {
        return "between"
    } else if (input === OPEN_PAREN) {
        return "paren_open"
    } else if (input === CLOSE_PAREN) {
        return "paren_close"
    } else {
        return "value"
    }
}

function getNextState(currentInput, state, columns:ColumnMetadata[]) {
    let category = getInputCategory(currentInput, columns)
    return STATE_TABLE[category][state]
}

function runParser(inputArray, state, columns:ColumnMetadata[]) {
    let currentInput = inputArray[0]    

    if( isReservedKeyword(currentInput) ) {
        console.error("Error: '" + currentInput + "' is a reserved keyword")
        return false
    }

    if(FINAL_STATES.includes(state) && inputArray.length === 0) {
        return true
    }

    if(!FINAL_STATES.includes(state) && inputArray.length === 0) {
        console.error("SyntaxError: operation incoplete")
        return false
    }

    let nextState = getNextState(currentInput, state, columns);
    if(nextState === null) {
        console.error("SyntaxError: error found next '"+currentInput+"' token")
        return false
    }
    inputArray.splice(0, 1)
    categoryTable[currentInput] = getInputCategory(currentInput, columns)
    
    // feed types table
    return runParser(inputArray, nextState, columns)    
}

const convertUrlToValue = async (snippet:string, column:ColumnMetadata):Promise<any> => {
    let url = decodeURIComponent(snippet)
    var myInit = { method: "options", mode: "cors", cache: "default"};
    let response = await fetch(url, myInit)
    let responseOptions = await response.json()
    let jsonLd = JSONLD_BY_COLUMN_TYPES_MAP[column.type as string]
    if(jsonLd) {
        if(jsonLd["@type"] === responseOptions["@type"]) {
            let getProps = { method: "get", mode: "cors", cache: "default"};
            let resp = await fetch(url, getProps)
            let responseGet = await resp.json()
            return Object.entries(responseGet)[0][1]
        } else {
            console.error("'"+ url +"' don't returns a value of the same type of '" + column.propertyName + "'")    
        }
    } else {
        console.error("No JSONLD type for column '" + column.propertyName + "'")
    }

}

const translate = async (initialSnipetts:string[], metadata:EntityMetadata) => {
    /* get the initialSnipetts and return a 2 index array with the typeorm expression
    and a keywargs parameters
    */
   //"user.id = :id OR user.name = :name", { id: 1, name: "Timber" }
    let whereClause = "";
    let keyValParams = {}    
    
    initialSnipetts.splice(0, 1)
    for(let i=0; i<initialSnipetts.length; i++) {
        let snippet = initialSnipetts[i]
        let category = categoryTable[snippet]
        switch(category) {
            case "attribute":
                let compOper = initialSnipetts[i+1]
                whereClause +=  metadata.tableName + "." + snippet + " " +
                                COMPARISON_OPERATOR_MAP[compOper] + " :" + snippet
                break;
            case "comparison_operator": // already added with the attribute
                //whereClause += " " + COMPARISON_OPERATOR_MAP[snippet] + " ";
                break;
            case "and":
                whereClause += " " + BOOLEAN_OPERATOR_MAP[snippet] + " ";
                break;
            case "or":
                whereClause += " " + BOOLEAN_OPERATOR_MAP[snippet] + " ";
                break;
            case "between":
                whereClause += " " + COMPARISON_OPERATOR_MAP[snippet] + " ";
                break;
            case "paren_open":
                whereClause += " ( ";
                break;
            case "paren_close":
                whereClause += " ) ";
                break
            default:
                let lastAttr = "";
                if(initialSnipetts[i-3] === "between") {
                    lastAttr = initialSnipetts[i-4];
                } else {
                    if(categoryTable[initialSnipetts[i-1]] === "paren_open")
                        lastAttr = initialSnipetts[i-3];
                    else
                        lastAttr = initialSnipetts[i-2];
                }

                let column:ColumnMetadata = metadata.columns.find((_column) => _column.propertyName === lastAttr)
                
                if(snippet.startsWith("http%3A%2F%2F") || snippet.startsWith("https%3A%2F%2F"))
                    snippet = await convertUrlToValue(snippet, column)
                
                let converterFunction = COLUMN_TYPES_MAP[column.type as string]
                let convertedVal = converterFunction(snippet)

                keyValParams[lastAttr] = convertedVal
                //whereClause += " " + COMPARISON_OPERATOR_MAP[snippet] + " ";
                break;
        }

   }
   console.log("Query", whereClause)
   whereClause = whereClause.replace(/\(\s+\)/, "").trim() // removing empty parenthesis
   return [whereClause, keyValParams]
}

const processUrl = (url) => {
    let preProcessedUrl = url
    let matchedList = url.match(/\/\(\/https?\:\/\/.+\/\)\/?/)

    if(!matchedList)
        return url

    for(let i=0; i<matchedList.length; i++) {
        let originalUrl = matchedList[i].substring(3, matchedList[i].length-3)
        let encUri = encodeURIComponent(originalUrl)
        urlConvertingTable[encUri] = originalUrl
        preProcessedUrl = url.replace(originalUrl, encUri)
    }
    return preProcessedUrl
}

const analyse = async (url, entityMetadata) => {      
    let preProcessedUrl = processUrl(url)
    let columns:ColumnMetadata[] = entityMetadata.columns
    //let geocodeColumn = columns.filter((col) => col.propertyName === "geocodigo")

    categoryTable = {}

    const FILTER_OPERATION_NAME = "filter"
    let snippets = preProcessedUrl.split("/")
    let initialSnipetts = preProcessedUrl.split("/")
    if( snippets[0] !== FILTER_OPERATION_NAME) {
        console.error("Error: '" + snippets[0] + "' operation not exists")
        return false
    }

    snippets.splice(0, 1)
    let res = runParser(snippets, 0, columns)
    return await translate(initialSnipetts, entityMetadata)
    
}

// module.exports = analyse
export default analyse;

/*
class State
stateNumber
nextInputs

Interpretor
model = UnidadeFederativa
*/

/*
    <attribute> <comparison_operator>   <value> and or  between
S0  S1          -                       -       -   -   -
S1  -           S2                      -       -   -   S4
S2  -           -                       S3      -   -   -
S3  -           -                       -       S1  S1  -
S4  -           -                       S5      -   -   -
S5  -           -                       -       S6  -   -
S6  -           -                       S3      -   -   -
*/  


/*

TEST CASES

must return 7 elements
http://localhost:3002/api/list-lim-unidade-federacao-a/filter/cdInsumo/eq/73/and/idObjeto/gt/18

// 8 registers
// http://localhost:3002/api/list-lim-unidade-federacao-a/filter/idObjeto/gt/20/or/geocodigo/gt/50/and/cdInsumo/eq/73

// precedence test (both must return 9 registers)
// http://localhost:3002/api/list-lim-unidade-federacao-a/filter/cdInsumo/eq/73/and/idObjeto/gt/20/or/geocodigo/gt/50
// http://localhost:3002/api/list-lim-unidade-federacao-a/filter/geocodigo/gt/50/or/cdInsumo/eq/73/and/idObjeto/gt/20

// 7 registers
// http://localhost:3002/api/list-lim-unidade-federacao-a/filter/(/geocodigo/gt/50/or/cdInsumo/eq/73/)/and/idObjeto/gt/20
// http://localhost:3002/api/list-lim-unidade-federacao-a/filter/idObjeto/gt/20/and/(/geocodigo/gt/50/or/cdInsumo/eq/73/)

\/\(\/https?\:\/\/.+\/\)\/ - regex to get nested url
http://localhost:3001/api/list-lim-unidade-federacao-a/filter/geocodigo/eq/(/https://localhost:3002/api/list-projecao/1/geocodigoUnidadeFederativa/)/
*/