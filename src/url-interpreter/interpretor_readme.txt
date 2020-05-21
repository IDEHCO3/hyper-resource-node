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
  "template": "http://api.example.com/filter/geom/contains/'{?q}'",
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

filter microexpression
The minimal expression capable of generate a valid 'filter' expression
Example
<attribute>/eq/<values> is a minimal valid expression. If any of tokens are removed this is not a valid 'filter' expression anymore
<attribute>/eq/<values>/and/<atribute>/gt/<value>. Although this represent a valid 'filter' expression, this is not minimal. The snippet and/<atribute>/gt/<value> can ben removed and this still a valid 'filter' expression

Using hydra iriTemplates with the concept of filter microexpressions the server could show valid URLs with expressions precedence (using parentesis)