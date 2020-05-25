const analyse = require("./interpreter")

// import analyse from "./interpreter"


//http://127.0.0.1:8001/api/munic/municipios/3304557/nome
//encodeURIComponent("http://127.0.0.1:8001/api/munic/municipios/3304557/nome/")
//const encodedURI = "http%3A%2F%2F127.0.0.1%3A8001%2Fapi%2Fmunic%2Fmunicipios%2F3304557%2Fnome%2F"
const BASIC_FILTER = "http://127.0.0.1:8000/api/pessoas/filter/nome/eq/ana"
analyse("filter/name/eq/Ana")
analyse("filter/name/eq/Ana/and/dataNasc/1998-01-01")
analyse("filter/nome/eq/http%3A%2F%2F127.0.0.1%3A8001%2Fapi%2Fmunic%2Fmunicipios%2F3304557%2Fnome%2F")
