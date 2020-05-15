const entityFolder = './src/entity/entities/'
const routerEntity = './src/router/routerEntity.ts'
const import_file_dir = './../resource' 
const f_s = require('fs');
const protoc = process.env.PROTOCOL || 'http'
const porta = process.env.PORT || 3000
const proto_host_baseUrl = protoc + "://" + (process.env.server ||"localhost") + `:${porta}`
const base_api = "/api/"
async function write_method_resource(wstream, file_name, parameter_str, method='get', operationName=''){
    let fn = camel_to_snake(file_name)
    wstream.write(`router.${method}('${base_api}list-${fn}/:id([0-9]+)${parameter_str}', async (req, res)=> {\n`)
     wstream.write(`  const rec_${file_name} = new ${file_name}Resource(req, res)\n`)
    if (parameter_str === '')
       wstream.write(`  return await rec_${file_name}.${operationName}\n`)
    else
       wstream.write(`  return await rec_${file_name}.${operationName}\n`) 
    wstream.write(`})\n`)
}

async function write_entry_point(proto_host_baseUrl, files_name, wstream) {
    let snippets = files_name.map(file_name=>{ 
        let fn = camel_to_snake(file_name) 
        return `"list-${fn}": "${proto_host_baseUrl}${base_api}list-${fn}"\n`})
    wstream.write(`router.get('${base_api}', (req, res) => {\n`)
    wstream.write(`    const a_json = {\n${snippets.join()}}\n`)
    wstream.write(`\n    res.json(a_json)\n`)
    wstream.write(`})\n`)
}
async function write_method_collection_resource(wstream, file_name, parameter_str='', method='get', operationName='') {
    let fn = camel_to_snake(file_name)
    wstream.write(`router.${method}('${base_api}list-${fn}/${parameter_str}', async (req, res)=> {\n`)
    wstream.write(`  const rec_col_${file_name} = new ${file_name}CollectionResource(req, res)\n`)
    wstream.write(`  return await rec_col_${file_name}.${operationName}\n`)
    wstream.write(`})\n`)
}

function file_without_extension(file_name_with_extension) {
    return file_name_with_extension.substring(0, file_name_with_extension.length-3)
}
function camel_to_snake(string) {
    return string.replace(/[\w]([A-Z])/g, function(m) {
        return m[0] + "-" + m[1];
    }).toLowerCase();
}
async function imports_resource(files: Array<String>, wstream) {
    files.forEach(file => {
        let name = file_without_extension(file)
        let snippet = `import {${name}Resource, ${name}CollectionResource} from "${import_file_dir}/${name}Resource"`
        wstream.write(`${snippet}\n`);
        //console.log(snippet);
    })
}

// PROGRAM STARTS HERE
export function generateRouterEntitiesFile(hasPost=false, hasPut=false, hasDelete=false) {
    console.log("Gerando routers ...")
    f_s.readdir(entityFolder, async (err, files : Array<String>) => {
    files = files.filter(file_name => file_name.search(".ts") > 0 )  
    const  wstream = await f_s.createWriteStream(routerEntity);  
    if (err) {
        console.log(err)
    }
    await imports_resource(files, wstream)
    wstream.write(`\n`)
    wstream.write(`const express = require('express')\n`)
    wstream.write(`const router = express.Router()\n`)
    wstream.write(`\n`)
    let files_name = files.map(file_name => file_name.substring(0, file_name.length-3) )
    await write_entry_point(proto_host_baseUrl, files_name, wstream) 
    files_name.forEach(file_name => {
        //(wstream, file_name, parameter_str, method='get', operationName='')
        write_method_resource(wstream, file_name,'', 'get', 'getRepresentation()' )
        write_method_resource(wstream, file_name, '/*', 'get', 'getRepresentationGivenParameters()' ) 
        write_method_resource(wstream, file_name,'', 'head', 'head()' )
        write_method_resource(wstream, file_name, '/*', 'head', 'headGivenParameters()' ) 
        write_method_resource(wstream, file_name,'', 'options', 'options()' )
        write_method_resource(wstream, file_name, '/*', 'options', 'optionsGivenParameters()' ) 
        if (hasDelete)
            write_method_resource(wstream, file_name, '', 'delete', 'delete()' )
        if(hasPut)
            write_method_resource(wstream, file_name, '', 'put', 'put(req.body)' )
        write_method_collection_resource(wstream, file_name,'', 'get', 'getRepresentation()')
        write_method_collection_resource(wstream, file_name, '*', 'get', 'getRepresentationGivenParameters()') 
        write_method_collection_resource(wstream, file_name,'', 'head', 'head()')
        write_method_collection_resource(wstream, file_name, '*', 'head', 'headGivenParameters()') 
        write_method_collection_resource(wstream, file_name,'', 'options', 'options()')
        write_method_collection_resource(wstream, file_name, '*', 'options', 'optionsGivenParameters()') 
        if(hasPost)
            write_method_collection_resource(wstream, file_name, '', 'post', 'post(req.body)' )
    })
    wstream.write(`module.exports = router`)
    wstream.end()
  })
}