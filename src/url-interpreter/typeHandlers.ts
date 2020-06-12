const convertToString = (value:any):string => {
    return value + ""
}

export const convertToNumber = (value:any):number => {
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
    number: convertToNumber,
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
//https://typeorm.delightful.studio/modules/_driver_types_columntypes_.html#columntype
export const COLUMN_TYPES_MAP = {
    // PrimaryGeneratedColumnType
    "int":                              parseInt,
    "int2":                             parseInt,
    "int4":                             parseInt,
    "int8":                             parseInt,
    "integer":                          parseInt,
    "tinyint":                          parseInt,
    "smallint":                         parseInt,
    "mediumint":                        parseInt,
    "bigint":                           parseInt,
    "dec":                              convertToNumber,
    "decimal":                          convertToNumber,
    "numeric":                          convertToNumber,
    "number":                           convertToNumber,

    // SimpleColumnType
    "simple-array":                     null,
    "simple-json":                      null,
    "bit":                              null,
    // "int2":                             parseInt,
    // "integer":                          parseInt,
    // "int4":                             parseInt,
    // "int8":                             parseInt,
    "unsigned big int":                 parseInt,
    "float4":                           convertToNumber,
    "float8":                           convertToNumber,
    "smallmoney":                       convertToNumber,
    "money":                            convertToNumber,
    "boolean":                          convertToBoolean,
    "bool":                             convertToBoolean,
    "tinyblob":                         null,
    "tinytext":                         convertToString,
    "mediumblob":                       null,
    "mediumtext":                       convertToString,
    "blob":                             null,
    "text":                             convertToString,
    "ntext":                            convertToString,
    "citext":                           convertToString,
    "hstore":                           null,
    "longblob":                         null,
    "longtext":                         convertToString,
    "bytea":                            null,
    "long":                             convertToNumber,
    "raw":                              null,
    "long raw":                         null,
    "bfile":                            null,
    "clob":                             null,
    "nclob":                            null,
    "image":                            null,
    "timetz":                           null,
    "timestamptz":                      null,
    "timestamp with local time zone":   null,
    "smalldatetime":                    null,
    "date":                             null,
    "interval year to month":           null,
    "interval day to second":           null,
    "interval":                         null,
    "year":                             null,
    "point":                            null,
    "line":                             null,
    "lseg":                             null,
    "box":                              null,
    "circle":                           null,
    "path":                             null,
    "polygon":                          null,
    "geography":                        null,
    "geometry":                         null,
    "linestring":                       null,
    "multipoint":                       null,
    "multilinestring":                  null,
    "multipolygon":                     null,
    "geometrycollection":               null,
    "int4range":                        null,
    "int8range":                        null,
    "numrange":                         null,
    "tsrange":                          null,
    "tstzrange":                        null,
    "daterange":                        null,
    "enum":                             null,
    "cidr":                             null,
    "inet":                             null,
    "macaddr":                          null,
    // "bit":                              null,
    "bit varying":                      null,
    "varbit":                           null,
    "tsvector":                         null,
    "tsquery":                          null,
    "uuid":                             null,
    "xml":                              null,
    "json":                             null,
    "jsonb":                            null,
    "varbinary":                        null,
    "hierarchyid":                      null,
    "sql_variant":                      null,
    "rowid":                            null,
    "urowid":                           null,
    "uniqueidentifier":                 null,
    "rowversion":                       null,

    //WithLengthColumnType
    "character varying":                convertToString,
    "varying character":                convertToString,
    "nvarchar":                         convertToString,
    "character":                        convertToString,
    "native character":                 convertToString,
    "varchar":                          convertToString,
    "char":                             convertToString,
    "nchar":                            convertToString,
    "varchar2":                         convertToString,
    "nvarchar2":                        convertToString,
    //"raw":                            null,
    "binary":                           null,
    //"varbinary":                      null,

    //WithPrecisionColumnType
    "float":                            convertToNumber,
    "double":                           convertToNumber,
    // "dec":                           null,
    // "decimal":                       null,
    // "numeric":                       null,
    "real":                             convertToNumber,
    "double precision":                 convertToNumber,
    // "number":                        null,
    "datetime":                         null,
    "datetime2":                        null,
    "datetimeoffset":                   null,
    "time":                             null,
    "time with time zone":              null,
    "time without time zone":           null,
    "timestamp":                        null,
    "timestamp without time zone":      null,
    "timestamp with time zone":         null,
    // "timestamp with local time zone": null,

    // WithWidthColumnType
    // "tinyint":                          null,
    // "smallint":                         null,
    // "mediumint":                        null,
    // "int":                              null,
    // "bigint":                           null,
}