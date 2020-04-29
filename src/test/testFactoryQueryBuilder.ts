var expect = require('chai').expect;
import {FactoryQueryBuilder} from './../hyper-resource/FactoryQueryBuilder'
const fqb = new FactoryQueryBuilder()
describe('To transform IN, This snippet is part of querybuilder', function () {
    it('should returns an array with a string with the name of attribute and an object containing the predicate', function () {
        //"user.id IN (:...ids)", { ids: [1, 2, 3, 4] }
        const res = fqb.queryBuilderForIN('sigla', 'rj,es,mg')
        expect(res[0]).to.be.equal('sigla IN (:...list_sigla)')
        expect(JSON.stringify(res[1])).to.be.equal(JSON.stringify({list_sigla: ['rj','es','mg']}))
        //"user.sigla IN (:...list_sigla)", { list_sigla: ['rj','es','mg'] }    
    })
})
//"user.firstName = :firstName", { firstName: "Timber" }  
describe('To transform eq, This snippet is part of querybuilder', function () {
    it('should returns an array with a string with the name of attribute equal and an object containing the predicate', function () {
        const res = fqb.queryBuilderForEQ("firstName", "Timber")
        expect(res[0]).to.be.equal('firstName = :firstName')
        expect(JSON.stringify(res[1])).to.be.equal(JSON.stringify({ firstName: "Timber" }))
    })    
})