import "reflect-metadata";
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
//function test(a: string, b: number) 
//type TestArguments = ArgumentTypes<typeof test>; // [string, number]

//declare function optionalParams(a: string, b?: number, c?: boolean): void;
//type OptionalParamsArgs = ArgumentTypes<typeof optionalParams>; // [string, (number | undefined)?, (boolean | undefined)?]
export function Type(type) { return Reflect.metadata("design:type", type) }
export function ParamTypes(...types) { return Reflect.metadata("design:paramtypes", types) }
export function ReturnType(type) { return Reflect.metadata("design:returntype", type) }
export function Description(type) { return Reflect.metadata("design:description", type) }
export function Example(type) { return Reflect.metadata("design:example", type) }

export function functionArgumentTypes(functionObject : any) : any {
    //const args = Array.prototype.slice.call(functionObject.arguments, 0, functionObject.arguments.length)
    //const argTypes = args.map(e => typeof e)
    //console.log("argTypes===>", argTypes)
    type p = Parameters<typeof functionObject>
    
    return []
}
export function functionReturnType(functionName : string, object: any): string {
     return  Reflect.getMetadata("design:returntype", object, functionName).name
     
}
let internal_method_names = ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__",
"__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "__proto__",    "toLocaleString"
]
export class Describer {
  static describeAttributes(instance): Array<string> {
      return Object.getOwnPropertyNames(instance);
  }
  static getAllMethodNames(obj) {
    let methods = new Set();
    while (obj = Reflect.getPrototypeOf(obj)) {
      let keys = Reflect.ownKeys(obj)
      keys.forEach((k) =>
        methods.add(k));
    }
    return methods;
  }
  static getMethodNames(obj) {
    let method_names = Describer.getAllMethodNames(obj)
    internal_method_names.forEach((method_name) => {
      method_names.delete(method_name)
    })
    return method_names
  }
}
/*
filter -> expr |
operation(filter)-> filter/(expr)
expr-> exp1 | exp2 | e
exp1 -> operand1 operator operand2 | operand1 operator | operand2 operator | operand1 | operand2 | 
        operand1 operation operator operand2 |

exp2 -> operand1 operator operand2 | operand1 operator | operand2 operator | operand1 | operand2 |e
operand1->  objectAttribute 
operand2-> objectAttribute
objectAttribute ->| number | string | date | geometry | ... |
operator -> eq | neq | lt | lte | gt | gte | between | in | notin | isnull | isnotnull | like | notlike | and | or 
operation(filterAndCount)-> filter/(expr)/count/e
operation(filterAndCollect) -> filter/(expr1)/collect/(expr2)
*/

/* terminals
relational_operator => eq, neq, lt, lte, gt, gte, between, in, notin, isnull, isnotnull, like, notlike, 
and, or
*/
export function pathHasURL(pathFromURL : string) : boolean {
    return pathFromURL.search(/http:/i) > -1 || 
           pathFromURL.search(/https:/i) > -1 ||
           pathFromURL.search(/www\./i) > -1
}
/*
s = "filter/valor/in/(/http://valor/total/)/"
XRegExp.matchRecursive(s, '\\(\\/', '\\/\\)', 'g');
*/
export function pathSplittedBySlash(pathFromURL : string) : string[] {
    const exp = /(https{0,1}:.+?\*)|(https{0,1}:.+?\/?$)/igm
    let arr = null
    let arrPathSplitted = []
    if (pathHasURL(pathFromURL)) {
        arr = [...pathFromURL.match(exp)]
        arr = arr.map(url=> url[url.length-1] == '*'? url.substring(0, url.length - 2): url) //remove /*
        arr = arr.map(url=> url[url.length-1] == '/'? url.substring(0, url.length - 2): url)
        const token = '__TOKEN_^_URL__'
        arr.forEach(url  => pathFromURL = pathFromURL.replace(url, token))
        arrPathSplitted = pathFromURL.split('/')
        arr.forEach((url) =>  {
            let idx = arrPathSplitted.indexOf(token)
            arrPathSplitted[idx] = url
        })
        return arrPathSplitted
    }   
    return pathFromURL.split('/')
}


