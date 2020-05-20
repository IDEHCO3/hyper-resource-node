const analyse = require("./interpreter")

// import analyse from "./interpreter"



const BASIC_FILTER = "http://127.0.0.1:8000/api/pessoas/filter/nome/eq/ana"
analyse("filter/name/eq/Ana")