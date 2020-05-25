- Definition of complex types comparation. Lets say 'attribute1 eq value'.
In this case value.id must be compared with attribute1.id.
OBS: value, in this case could be a URL

- Each business class must contain your own table of attributes/type for post-syntatic analysis

- Javascript reserved words is not allowed (how to indentify keywords: https://stackoverflow.com/questions/26255/reserved-keywords-in-javascript)

READING INPUT
1. for the lexical analysis, each word (separated by '/') must be recognized and added to a table along with his syntatic category


NOTES
Posible solution for interpretation of 'filter' operation with url as values
{
  "@context": "http://www.w3.org/ns/hydra/context.jsonld",
  "@type": "IriTemplate",
  "template": "http://api.example.com/filter/geom/contains/{?q}",
  "variableRepresentation": "BasicRepresentation",
  "mapping": [
    {
      "@type": "IriTemplateMapping",
      "variable": "q",
      "property": "https://schema.org/URL",
      "required": true
    }
  ]
}

how to detect if a string is a URL or just a string
Hydra defines that URL must be representated literaly.
For example the URL http://www.hydra-cg.com/ must be representated as http%3A%2F%2Fwww.hydra-cg.com%2F
If http://www.hydra-cg.com/ is a string and not a URL must be representated as %22http%3A%2F%2Fwww.hydra-cg.com%2F%22
(%22 == double quotes)
In this case, both string and URL are using hydra:ExplicitRepresentation
Once bar is not representated as it is ('/') the url interpreter can use the bar as separator

URL encoding/decoding
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_decodeuricomponent

filter microexpression
The minimal expression capable of generate a valid 'filter' expression
Example
<attribute>/eq/<values> is a minimal valid expression. If any of tokens are removed this is not a valid 'filter' expression anymore
<attribute>/eq/<values>/and/<atribute>/gt/<value>. Although this represent a valid 'filter' expression, this is not minimal. The snippet and/<atribute>/gt/<value> can ben removed and this still a valid 'filter' expression

Using hydra iriTemplates with the concept of filter microexpressions the server could show valid URLs with expressions precedence (using parentesis)

where to insert the parentesis?
using the boolean operators ('and', 'or' and 'not') as microexpression separators
with this approach could be possible to map all the valid parentesis locations