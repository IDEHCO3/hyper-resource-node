//npx typeorm-model-generator -h localhost -d idehco3 -u postgres -x desenv -e postgres -o . -s bcim 
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
