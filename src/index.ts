//npx typeorm-model-generator -h localhost -d idehco3 -u postgres -x desenv -e postgres -o . -s bcim 
//npx typeorm-model-generator -h localhost -d postgres -u postgres -x desenv -e postgres -p 5433 -o ./src/entity -s bcim
import "reflect-metadata";
import {createConnection} from "typeorm";
const express = require('express')
const app = express()
const protocol = process.env.PROTOCOL || 'http'
const port = process.env.PORT || 3000
const protoc_host_baseUrl = protocol + "://" + (process.env.server ||"localhost") + `:${port}`
console.log("Trying Database conection ...")
createConnection().then(async connection => {
  console.log("Database conection created.")
  console.log("Creating router...")
  app.use('', require("./router/routerEntity"))
  console.log(`On browser: ${protoc_host_baseUrl}/api`)
  app.listen(port,()=>console.log(`Server on port: ${port}`))
  
}).catch(error => console.log(error));
