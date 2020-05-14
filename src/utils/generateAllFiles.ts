import {generateResourceEntityFiles} from "./generateResourcesFile"
import { generateContextEntityFiles } from "./generateContextsFile"
import {generateRouterEntitiesFile} from "./generateRouterEntitiesFile"
// BEFORE START CHECK IF entity DIR HAS ENTITY CLASSES(FILES)
// PROGRAM STARTS HERE
const myArgs = process.argv.slice(2);
let  hasPost=false, hasPut=false, hasDelete=false 
if (myArgs.length >= 1)
    hasPost = myArgs[0] === 'true'
if (myArgs.length >= 2)
    hasPut = myArgs[1] === 'true'
if (myArgs.length == 3)
    hasDelete = myArgs[2] === 'true'
generateRouterEntitiesFile(hasPost, hasPut, hasDelete)
generateResourceEntityFiles()
generateContextEntityFiles()