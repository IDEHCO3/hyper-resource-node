import {generateResourceEntityFiles} from "./generateResourcesFile"
import { generateContextEntityFiles } from "./generateContextsFile"
import {generateRouterEntitiesFile} from "./generateRouterEntitiesFile"
// BEFORE START CHECK IF entity DIR HAS ENTITY CLASSES(FILES)
// PROGRAM STARTS HERE
generateRouterEntitiesFile()
generateResourceEntityFiles()
generateContextEntityFiles()