const assert = require('chai').assert
const expect = require('chai').expect
import analyse from '../url-interpreter/interpreter';
import {createConnection} from "typeorm";
import {getConnection} from "typeorm"
// const connection = getConnection()
import { LimUnidadeFederacaoA } from '../entity/entities/LimUnidadeFederacaoA'

describe('Test filter interpretation using UnidadeFederacaoA model', function() {
    this.timeout(60000)
    let connection = null
    let metadata = null

    before(async function() {
        connection = await createConnection()
        metadata = connection.getMetadata(LimUnidadeFederacaoA);
    })

    it("filter by ID", async function() {
        const expression = 'filter/idObjeto/eq/1';        
        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('idObjeto');
        assert.equal(whereExpression, 'lim_unidade_federacao_a.idObjeto = :idObjeto')
    })

    it("filter by unique", async function() {
        const expression = 'filter/sigla/eq/MG'
        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('sigla');
        assert.equal(whereExpression, 'lim_unidade_federacao_a.sigla = :sigla')
    })

    it("with AND operator", async function() {
        const expression = 'filter/cdInsumo/eq/73/and/idObjeto/gt/18'

        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('cdInsumo');
        assert.equal(whereExpression, 'lim_unidade_federacao_a.cdInsumo = :cdInsumo AND lim_unidade_federacao_a.idObjeto > :idObjeto')
    })

    it("with AND, OR operators", async function() {
        const expression = 'filter/idObjeto/gt/20/or/geocodigo/gt/50/and/cdInsumo/eq/73'

        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('idObjeto');
        expect(keyValParams).to.have.property('geocodigo');
        assert.equal(whereExpression, 'lim_unidade_federacao_a.idObjeto > :idObjeto OR '+
                                      'lim_unidade_federacao_a.geocodigo > :geocodigo AND '+
                                      'lim_unidade_federacao_a.cdInsumo = :cdInsumo')
    })

    it("with AND operator FIRST and OR operator second", async function() {
        const expression = 'filter/cdInsumo/eq/73/and/idObjeto/gt/20/or/geocodigo/gt/50'

        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('cdInsumo');
        expect(keyValParams).to.have.property('idObjeto');
        expect(keyValParams).to.have.property('geocodigo');
        assert.equal(whereExpression, 'lim_unidade_federacao_a.cdInsumo = :cdInsumo AND '+
                                      'lim_unidade_federacao_a.idObjeto > :idObjeto OR '+
                                      'lim_unidade_federacao_a.geocodigo > :geocodigo')
    })

    it("with OR operator FIRST and AND operator SECOND", async function() {
        const expression = 'filter/geocodigo/gt/50/or/cdInsumo/eq/73/and/idObjeto/gt/20'

        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('cdInsumo');
        expect(keyValParams).to.have.property('idObjeto');
        expect(keyValParams).to.have.property('geocodigo');
        assert.equal(whereExpression, 'lim_unidade_federacao_a.geocodigo > :geocodigo OR '+
                                        'lim_unidade_federacao_a.cdInsumo = :cdInsumo AND '+
                                        'lim_unidade_federacao_a.idObjeto > :idObjeto')
    })

    it("explicitly defining precedence (OR operator position FIRST)", async function() {
        const expression = 'filter/(/geocodigo/gt/50/or/cdInsumo/eq/73/)/and/idObjeto/gt/20'

        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('geocodigo');
        expect(keyValParams).to.have.property('cdInsumo');
        expect(keyValParams).to.have.property('idObjeto');
        assert.equal(whereExpression, '( lim_unidade_federacao_a.geocodigo > :geocodigo OR '+
                                      'lim_unidade_federacao_a.cdInsumo = :cdInsumo )  AND '+
                                      'lim_unidade_federacao_a.idObjeto > :idObjeto')
    })

    it("explicitly defining precedence (OR operator position SECOND)", async function() {
        const expression = 'filter/idObjeto/gt/20/and/(/geocodigo/gt/50/or/cdInsumo/eq/73/)'

        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('idObjeto');
        expect(keyValParams).to.have.property('geocodigo');
        expect(keyValParams).to.have.property('cdInsumo');
        assert.equal(whereExpression, 'lim_unidade_federacao_a.idObjeto > :idObjeto AND  '+
                                      '( lim_unidade_federacao_a.geocodigo > :geocodigo OR '+
                                      'lim_unidade_federacao_a.cdInsumo = :cdInsumo )')
    })

    it("Chained URL (Run this test only if the OSM API is running on port 3003)", async function() {
        const expression = 'filter/geocodigo/eq/(/http://localhost:3003/api/list-pofw/33/gid/)'

        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('geocodigo');
        assert.equal(whereExpression, 'lim_unidade_federacao_a.geocodigo = :geocodigo')
    })

    it("Chained URL with last slash (Run this test only if the OSM API is running on port 3003)", async function() {
        const expression = 'filter/geocodigo/eq/(/http://localhost:3003/api/list-pofw/33/gid/)/'

        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('geocodigo');
        assert.equal(whereExpression, 'lim_unidade_federacao_a.geocodigo = :geocodigo')
    })

    it("Chained URL with last slash (Run this test only if the OSM API is running on port 3003)", async function() {
        const expression = 'filter/geocodigo/eq/(/http://localhost:3003/api/list-pofw/33/gid/)/'

        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('geocodigo');
        assert.equal(whereExpression, 'lim_unidade_federacao_a.geocodigo = :geocodigo')
    })

    it("Chained (Hyper Resource) URL with last slash", async function() {
        const expression = 'filter/geocodigo/eq/(/http://localhost:3002/api/list-projecao/1/geocodigoUnidadeFederativa/)/'

        let result = await analyse(expression, metadata)
        let whereExpression = result[0]
        let keyValParams = result[1]
        expect(keyValParams).to.have.property('geocodigo');
        assert.equal(whereExpression, 'lim_unidade_federacao_a.geocodigo = :geocodigo')
    })

})