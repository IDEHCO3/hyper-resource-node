
export class TypeCalled {
    /*
    Type_called is a definition type that contains a name,
    a list of parameters and a return type
    */
    protected name : string
    protected parameters : any[]
    protected  return_type : any
    description : string

    constructor(a_name: string = '', params : any[], answer, description : string = '') {
        this.name = a_name
        this.parameters = params
        this.return_type = answer
        this.description = description
    }
}