const fs1 = require('fs');
export async function generateResourceEntityFiles(resource_class_dir = './src/resource/', entities_class_dir = './src/entity/entities/') {
    fs1.readdir(entities_class_dir, async (err, files : Array<String>) => {
        if (err) {
            return console.log(err)
        }
        files = files.filter(file_name => file_name.search(".ts") > 0 )  
        console.log("Gerando resources ...")
        files.forEach((file)=> {
            file = file.substring(0, file.length-3) //remove .ts
            let file_with_path = resource_class_dir + file + 'Resource.ts' 
            let  wstream1 =  fs1.createWriteStream(file_with_path);
            wstream1.write(`import { ${file} } from "./../entity/entities/${file}"\n`)
            wstream1.write(`import { ${file}ContextResource, ${file}ContextCollectionResource } from "./../context/${file}Context"\n`)
            wstream1.write(`import { AbstractResource } from "./../hyper-resource/AbstractResource"\n`)
            wstream1.write(`import { AbstractCollectionResource } from "./../hyper-resource/AbstractCollectionResource"\n`)
            wstream1.write(`export class ${file}Resource extends AbstractResource {\n`)
            //wstream1.write(`    constructor(req : any, res : any) { super(req, res) }\n\n`)
            wstream1.write(`    public entityClass() {\n`)
            wstream1.write(`        return ${file}\n`)
            wstream1.write(`    }\n`)
            wstream1.write(`}\n\n`)
            wstream1.write(`export class ${file}CollectionResource extends AbstractCollectionResource {\n`)
            //wstream1.write(`    constructor(req : any, res : any) { super(req, res) }\n\n`)
            wstream1.write(`    public entityClass() {\n`)
            wstream1.write(`        return ${file}\n`)
            wstream1.write(`    }\n`)
            wstream1.write(`}\n\n`)
            wstream1.end()        
        })
    })
}