export class ContextResource {
    
    supportedProperties() : String {
        return ''
    }
    supportedOperations() : String {
        return ''
    }
    context(): String {
        return ''
    }
    
    supportedRepresentations() : String {
        return ''
    }
    type() : String {
        return ''
    }
    meaning() : String {
        //@id
        return ''
    }
    subClassOf() : String {
        return ''
    }
    representationName() : String {
        return ''

    }
    suportedRepresentations() : Array<String> {
        return []
    }
    contextResource() {
        return {
           "@context" : this.context(), 
           "hr:supportedProperties": this.supportedProperties(), 
           "hr:supportedOperations": this.supportedOperations(),
           "hr:subClassOf":  "hydra:Resource",
           "hr:representationName:" : this.representationName(),
           "hr:suportedRepresentations:" : this.suportedRepresentations(),
           "@id": "https://schema.org/Thing"
        }
    }
    optionsWithParameters(req, res) {}
    options(req, res) {}
}   