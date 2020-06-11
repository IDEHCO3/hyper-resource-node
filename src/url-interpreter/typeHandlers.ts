const convertToString = (value:any):string => {
    return value + ""
}

export const convertNumber = (value:any):number => {
    return parseFloat(value)
}

export const convertToBoolean = (value:any):boolean => {
    return !!value
}

export const isString = (value:any): value is string => {
    return typeof value==="string"
}

export const isBoolean = (value:any): value is string => {
    return typeof value==="boolean"
}

export const isNumber = (value:any): value is string => {
    return typeof value==="number"
}

export const CONVERTER_TABLE = {
    string: convertToString,
    number: convertNumber,
    boolean: convertToBoolean,
}

export const COMPARISON_OPERATOR_MAP = {
    "eq": "=",
    "lt": "<",
    "gt": ">",
    "gte": ">=",
    "lte": "<=",
    "neq": "!=",
    "between": "BETWEEN"
}

export const BOOLEAN_OPERATOR_MAP = {
    "and": "AND",
    "or": "OR",
    // "not": ">"
}