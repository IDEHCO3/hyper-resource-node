//npx typeorm-model-generator -h localhost -d idehco3 -u postgres -x desenv -e postgres -o . -s bcim 
import "reflect-metadata";
import {createConnection} from "typeorm";
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const protocol = process.env.PROTOCOL || 'http'
const port = process.env.PORT || 3002
const protoc_host_baseUrl = protocol + "://" + (process.env.server ||"localhost") + `:${port}`
const router_entry_point = require('./router/entry_point')
 
console.log("Trying Database conection ...")
createConnection().then(async connection => {
  console.log("Database conection created.")
  console.log("Creating router...")
  app.use(bodyParser.json())
  const router_entities = require("./router/router_entity")
  router_entities.importAllRouters(app)
  //const router_entry_point = require('./router/entry_point')
  //const router_AdmEdifPubMilitarA = require('./router/AdmEdifPubMilitarA')
  //app.use(router_entry_point)
  //app.use(router_AdmEdifPubMilitarA)
  console.log(`On browser: ${protoc_host_baseUrl}/api`)
  app.listen(port,()=>console.log(`Server on port: ${port}`))
  
}).catch(error => console.log(error));
