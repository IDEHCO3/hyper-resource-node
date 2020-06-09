const classesFolder = './src/entity'
const router_entities = './src/router/router_entities.ts'
const context_classes_dir = './src/contexts/' 
const import_file_path = './../entity' 
const import_file_path_context = './../contexts' 
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs.length);
const path = myArgs.length> 2 ? myArgs[0]: classesFolder
console.log("path", path)
console.log("Dir: ",__dirname)
const fs = require('fs');
const protocol = process.env.PROTOCOL || 'http'
const port = process.env.PORT || 3000
const protoc_host_baseUrl = protocol + "://" + (process.env.SERVER ||"localhost") +':' + `:${port}`
const api = "/api/"
async function writeEntryPoint(protoc_host_baseUrl, files_name, wstream) {
    let snippets = files_name.map(file_name=>{ 
        let fn = camelToSnake(file_name) 
        return `"list-${fn}": "${protoc_host_baseUrl}${api}list-${fn}"\n`})
    wstream.write(`router.get('${api}', (req, res) => {\n`)
    wstream.write(`    const a_json = {\n${snippets.join()}}\n`)
    wstream.write(`\n    res.json(a_json)\n`)
    wstream.write(`})\n`)
}
async function writeRouterCollectionEntity(wstream, file_name, parameter_str='', method='get') {
    let fn = camelToSnake(file_name)
    wstream.write(``)
    wstream.write(`router.${method}('${api}list-${fn}/${parameter_str}', async (req, res)=> {\n`)
    if (method === 'get') {
        wstream.write(` const rec_${file_name} = await connection.manager.find(${file_name})\n`)
        wstream.write(` res.json(rec_${file_name})\n`)
    } else {
        wstream.write(` const context_${file_name} = new ${file_name}Context()\n`)
        if (parameter_str === '')
            wstream.write(` context_${file_name}.options(req, res)\n`)
        else 
            wstream.write(` context_${file_name}.optionsWithParameters(req, res)\n`)
        wstream.write(` res.json(context_${file_name}.contextResource())\n`)
    }
    wstream.write(`})\n`)
}
async function writeRouterEntity(wstream, file_name, parameter_str='', method='get') {
    let fn = camelToSnake(file_name)
    wstream.write(`router.${method}('${api}list-${fn}/:id${parameter_str}', async (req, res)=> {\n`)
    if (method === 'get') {
        wstream.write(` const rec_${file_name} = await connection.manager.findOne(${file_name})\n`)
        wstream.write(` res.json(rec_${file_name})\n`)
        
    } else {
        wstream.write(` const context_${file_name} = new ${file_name}Context()\n`)
        if (parameter_str === '')
            wstream.write(` context_${file_name}.options(req, res)\n`)
        else
            wstream.write(` context_${file_name}.optionsWithParameters(req, res)\n`)
            
        wstream.write(` res.json(context_${file_name}.contextResource())\n`)
        
    }
    wstream.write(`})\n`)
}
function file_name_without_extension(file_name_with_extension) {
    return file_name_with_extension.substring(0, file_name_with_extension.length-3)
}
function camelToSnake(string) {
    return string.replace(/[\w]([A-Z])/g, function(m) {
        return m[0] + "-" + m[1];
    }).toLowerCase();
}
async function importsToEntities(files: Array<String>, wstream) {
    files.forEach(file => {
        let name = file_name_without_extension(file)
        let snippet = `import {${name}} from "${import_file_path}/${name}"`
         wstream.write(`${snippet}\n`);
        console.log(snippet);
    })
}
async function importsToContexts(files: Array<String>, wstream) {
    files.forEach(file => {
        let name = file_name_without_extension(file)
        let snippet = `import {${name}Context} from "${import_file_path_context}/${name}Context"`
        wstream.write(`${snippet}\n`);
        console.log(snippet);
    })
}
async function generateContextFiles(files: Array<String>) {
    var fs1 = require('fs');
    files.forEach((file)=> {
        let file_with_path = context_classes_dir + file + 'Context.ts' 
        let  wstream1 =  fs1.createWriteStream(file_with_path);
        wstream1.write(`import { ContextResource } from "./../hyper-resource/ContextResource"\n`)
        wstream1.write(`export class ${file}Context extends ContextResource {\n`)
        //wstream1.write(`classEntity: ${file}\n`)
        wstream1.write(`}\n`)
        wstream1.end()
    })
}
// PROGRAM STARTS HERE
fs.readdir(classesFolder, async (err, files : Array<String>) => {
  files = files.filter(file_name => file_name.search(".ts") > 0 )  
  const  wstream = await fs.createWriteStream(router_entities);  
  if (err) {
      console.log(err)
  }
  await importsToEntities(files, wstream)
  await importsToContexts(files, wstream)

  wstream.write(`\n`)
  wstream.write(`import {getConnection} from "typeorm"\n`)
  wstream.write(`const connection = getConnection()\n`)
  wstream.write(`const express = require('express')\n`)
  wstream.write(`const router = express.Router()\n`)
  wstream.write(`\n`)
  let files_name = files.map(file_name => file_name.substring(0, file_name.length-3) )
  await generateContextFiles(files_name)
  await writeEntryPoint(protoc_host_baseUrl, files_name, wstream) 
  files_name.forEach(file_name => {
    writeRouterEntity(wstream, file_name, '([0-9]+)')
    writeRouterEntity(wstream, file_name, '([0-9]+)/*') 
    writeRouterCollectionEntity(wstream, file_name)
    writeRouterCollectionEntity(wstream, file_name, '*')
    writeRouterEntity(wstream, file_name, '([0-9]+)', 'options')
    writeRouterEntity(wstream, file_name, '([0-9]+)/*', 'options') 
    writeRouterCollectionEntity(wstream, file_name,'' ,'options')
    writeRouterCollectionEntity(wstream, file_name, '*', 'options')
  })
  wstream.write(`module.exports = router`)
  wstream.end()

})