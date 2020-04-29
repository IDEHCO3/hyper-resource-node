const fs1 = require('fs');
export async function generateContextEntityFiles(context_class_dir = './src/context/', entities_class_dir = './src/entity/') {
    fs1.readdir(entities_class_dir, async (err, files : Array<String>) => {
        if (err) {
            return console.log(err)
        }
        files = files.filter(file_name => file_name.search(".ts") > 0 )  
        console.log("Gerando contexts ...")
        files.forEach((file)=> {
            file = file.substring(0, file.length-3) //remove .ts
            let file_with_path = context_class_dir + file + 'Context.ts' 
            let  wstream1 =  fs1.createWriteStream(file_with_path);
            wstream1.write(`import { ${file} } from "./../entity/${file}"\n`)
            wstream1.write(`import { ContextResource } from "./../hyper-resource/ContextResource"\n`)
            wstream1.write(`import { ContextCollectionResource } from "./../hyper-resource/ContextCollectionResource"\n`)
            wstream1.write(`export class ${file}ContextResource extends ContextResource {\n`)
            wstream1.write(`}\n\n`)
            wstream1.write(`export class ${file}ContextCollectionResource extends ContextCollectionResource {\n`)
            wstream1.write(`}\n\n`)
            wstream1.end()        
        })
    })
}