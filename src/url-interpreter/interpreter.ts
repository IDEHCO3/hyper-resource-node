import { LimUnidadeFederacaoA } from "../entity/entities/LimUnidadeFederacaoA"
import { COMPARISON_OPERATOR_MAP, BOOLEAN_OPERATOR_MAP, CONVERTER_TABLE } from "./typeHandlers"

// const ATTRIBUTES = [ // TODO: replace with real class
//     "id", "name", "birthDate"
// ]

// const COMPARISON_OPERATORS = [
//     "eq", "neq", "gt", "lt", "gte", "lte"
// ]

const STATE_TABLE = {
    attribute:           [1,    null,   null,   null,   null,   null,   null],
    comparison_operator: [null, 2,      null,   null,   null,   null,   null],
    value:               [null, null,   3,      null,   5,      null,   3], // if a token could be a <value> this path must be unique
    and:                 [null, null,   null,   1,      null,   6,      null],
    or:                  [null, null,   null,   1,      null,   null,   null],
    between:             [null, 4,      null,   null,   null,   null,   null]
}
const FINAL_STATES = [3]

const AND_OPERATOR = "and"
const OR_OPERATOR = "or"
const BETWEEN = "between"

let categoryTable = {}

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

function getInputCategory(input, aClass:any) {
    /*
    following the convension that attributes named
    'and', 'or', 'between' or some comparison operators is not valid

    this function is a scanner equivalent
    */
   
    if(Object.keys(aClass.getPropertiesTypes()).includes(input)) {
        return "attribute"
    } else if (Object.keys(COMPARISON_OPERATOR_MAP).includes(input)) {
        return "comparison_operator"
    } else if (input === AND_OPERATOR) {
        return "and"
    } else if (input === OR_OPERATOR) {
        return "or"
    } else if (input === BETWEEN) {
        return "between"
    } else {
        return "value"
    }
}

function getNextState(currentInput, state, aClass) {
    let category = getInputCategory(currentInput, aClass)
    return STATE_TABLE[category][state]
}

function runParser(inputArray, state, aClass) {
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

    let nextState = getNextState(currentInput, state, aClass);
    if(nextState === null) {
        console.error("SyntaxError: error found next '"+currentInput+"' token")
        return false
    }
    inputArray.splice(0, 1)
    categoryTable[currentInput] = getInputCategory(currentInput, aClass)
    
    // feed types table
    return runParser(inputArray, nextState, aClass)    
}

const translate = (initialSnipetts:string[], aClass:any) => {
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
                whereClause +=  aClass.name + "." + snippet + " " +
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
            default:
                let lastAttr = "";
                if(initialSnipetts[i-3] === "between") {
                    lastAttr = initialSnipetts[i-4];
                } else {
                    lastAttr = initialSnipetts[i-2];
                }

                let attrTypes = aClass.getPropertiesTypes()[lastAttr]

                // TODO: try to convert to each type in array
                let attrMainType = attrTypes.filter((type) => {
                    return type !== "null" && type !== "undefined"
                })[0]

                let converterFunction = CONVERTER_TABLE[attrMainType]
                let convertedVal = converterFunction(snippet)
                keyValParams[lastAttr] = convertedVal
                //whereClause += " " + COMPARISON_OPERATOR_MAP[snippet] + " ";
                break;
        }

   }
   return [whereClause, keyValParams]
}


const analyse = (url, aClass:any) => {
    let propsTypes = aClass.getPropertiesTypes()

    categoryTable = {}
    //let foo = getProperty(ist, "nome"); // number

    // type Keys = keyof LimUnidadeFederacaoA;
    // type NomeType = LimUnidadeFederacaoA["nome"]

    // type PropType<aClass, TProp extends keyof aClass> = aClass[TProp];
    // type MyPropType = PropType<LimUnidadeFederacaoA, 'sigla'>;
    // https://stackoverflow.com/questions/45894524/getting-type-of-a-property-of-a-typescript-class-using-keyof-operator

    const FILTER_OPERATION_NAME = "filter"
    let snippets = url.split("/")
    let initialSnipetts = url.split("/")
    if( snippets[0] !== FILTER_OPERATION_NAME) {
        console.error("Error: '" + snippets[0] + "' operation not exists")
        return false
    }

    snippets.splice(0, 1)
    let res = runParser(snippets, 0, aClass)
    return translate(initialSnipetts, aClass)
    
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