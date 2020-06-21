
// import analyse from "./interpreter"

const analyse = require("./interpreter.ts")
const typeorm = require("typeorm")
const LimUnidadeFederacaoA = require("../entity/entities/LimUnidadeFederacaoA")
const connection = typeorm.getConnection()


//http://127.0.0.1:8001/api/munic/municipios/3304557/nome
//encodeURIComponent("http://127.0.0.1:8001/api/munic/municipios/3304557/nome/")
//const encodedURI = "http%3A%2F%2F127.0.0.1%3A8001%2Fapi%2Fmunic%2Fmunicipios%2F3304557%2Fnome%2F"
const BASIC_FILTER = "http://127.0.0.1:8000/api/pessoas/filter/nome/eq/ana"

const whereClauseEquals = (receivedWhereClause, expectedWhereClause) => {
    return receivedWhereClause === expectedWhereClause
}

const paramsObjEquals = (receivedParamsObj, expectedParamsObj) => {
    let receivedKeys = Object.keys(receivedParamsObj)
    let expectedKeys = Object.keys(expectedParamsObj)
    receivedKeys.sort()
    expectedKeys.sort()

    if(receivedKeys.toString() !== expectedKeys.toString())
        return false

    for(let i=0; i<receivedKeys.length; i++) {
        if(receivedParamsObj[ receivedKeys[i] ] !== expectedParamsObj[ expectedKeys[i] ])
            return false
    }

    return true
}

const testAndOperator = () => {
    const AND_OPERATOR = "filter/cdInsumo/eq/73/and/idObjeto/gt/18";
    const EXPECTED_WHERE_CLAUSE = "lim_unidade_federacao_a.cdInsumo = :cdInsumo AND lim_unidade_federacao_a.idObjeto > :idObjeto"
    const EXPECTED_PARAMS_OBJ = {cdInsumo:73, idObjeto: 18}
    const metadata = connection.getMetadata(LimUnidadeFederacaoA);

    let result = analyse(AND_OPERATOR, metadata)
    let whereClause = result[0]
    let paramsObj = result[1]

    if(!whereClauseEquals(whereClause, EXPECTED_WHERE_CLAUSE)) {
        console.log(whereClause + " !== " + EXPECTED_WHERE_CLAUSE)
        return
    }
    if(!paramsObjEquals(paramsObj, EXPECTED_PARAMS_OBJ)) {
        console.log(paramsObj + " !== " + EXPECTED_PARAMS_OBJ)
        return
    }

    console.log("OK!")
}

testAndOperator()

// analyse("filter/name/eq/Ana")
// analyse("filter/name/eq/Ana/and/dataNasc/1998-01-01")
// analyse("filter/nome/eq/http%3A%2F%2F127.0.0.1%3A8001%2Fapi%2Fmunic%2Fmunicipios%2F3304557%2Fnome%2F") // URL
// analyse("filter/nome/eq/%22http%3A%2F%2F127.0.0.1%3A8001%2Fapi%2Fmunic%2Fmunicipios%2F3304557%2Fnome%2F%22") //string

// filter/nome/eq/Rio de Janeiro/and/populacao/gt/1000000 is a valid expression
// filter/nome/eq/Rio de Janeiro/and/populacao/gt/1000000/geocodigo is not
// analyse("municipios/filter/nome/eq/Rio de Janeiro/and/populacao/gt/1000000/geocodigo")