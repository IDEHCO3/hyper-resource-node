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

const AND_OPERATOR = "and"
const OR_OPERATOR = "or"
const BETWEEN = "between"

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

function getInputCategory(input) {
    /*
    following the convension that attributes named
    'and', 'or', 'between' or some comparison operators is not valid

    this function is a scanner equivalent
    */
    if(ATTRIBUTES.includes(input)) {
        return "attribute"
    } else if (COMPARISON_OPERATORS.includes(input)) {
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

function getNextState(currentInput, state) {
    let category = getInputCategory(currentInput)
    return STATE_TABLE[category][state]
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
        console.error("SyntaxError: operation incoplete")
        return false
    }

    let nextState = getNextState(currentInput, state);
    if(nextState === null) {
        console.error("SyntaxError: error found next '"+currentInput+"' token")
        return false
    }
    inputArray.splice(0, 1)
    return runParser(inputArray, nextState)    
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