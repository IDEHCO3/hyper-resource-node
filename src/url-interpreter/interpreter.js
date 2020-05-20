import { Series, DataFrame } from 'pandas-js';
const ATTRIBUTES = [ // TODO: replace with real class
    "id", "name", "birthDate"
]

const COMPARISON_OPERATORS = [
    "eq", "neq", "gt", "lt", "gte", "lte"
]

const STATE_TABLE = {
    attribute:           [1,    null,   null,   null,   null,   null,   null],
    comparison_operator: [null, 2,      null,   null,   null,   null,   null],
    value:               [null, null,   3,      null,   5,      null,   3],
    and:                 [null, null,   null,   1,      null,   6,      null],
    or:                  [null, null,   null,   1,      null,   null,   null],
    between:             [null, 4,      null,   null,   null,   null,   null]
}
const FINAL_STATES = [3]

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

function getNextState(currentInput, state) {

    switch(state) {
        case 0:
            
            break;
        case 1:            
            break;
        case 2:            
            break;
        case 3:            
            break;
        case 4:            
            break;
        case 5:            
            break;
        case 6:            
            break;

    }

    // STATE_TABLE.attribute[state]
    // STATE_TABLE.comparison_operator[state]
    // STATE_TABLE.value[state]
    // STATE_TABLE.and[state]
    // STATE_TABLE.or[state]
    // STATE_TABLE.between[state]
}

function runParser(inputArray, state) {
    let currentInput = inputArray[0]
    

    if( isReservedKeyword(currentInput) ) {
        console.error("Error: '" + currentInput + "' is a reserved keyword")
        return false
    }

    if(FINAL_STATES.includes(state) && inputArray.length === 0) {
        return true
    }

    if(!FINAL_STATES.includes(state) && inputArray.length === 0) {
        console.error("SyntaxError: operation inclopete")
        return false

    }

    let nextState = getNextState(currentInput, state);
    snippets.splice(0, 1)
    runParser(snippets, nextState)    
}

function analyse(url) {
    const FILTER_OPERATION_NAME = "filter"
    let snippets = url.split("/")
    if( snippets[0] !== FILTER_OPERATION_NAME) {
        console.error("Error: '" + snippets[0] + "' operation not exists")
        return false
    }

    snippets.splice(0, 1)
    return runParser(snippets, 0)
    
}

module.exports = analyse

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