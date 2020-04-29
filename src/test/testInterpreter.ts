var expect = require('chai').expect;
import { pathHasURL, pathSplittedBySlash,functionReturnType } from './../hyper-resource/interpreter'

describe('Verify if path(parameter from requested url)  has http: ou https: as parameter', function () {
  it('should return true if has othewise false', function () {
    
    // 1. ARRANGE
    const pathWithHttp = "/filter/sigla/in/http://ibge.gov.br/estados/RJ"
    const pathWithHttps = "/filter/sigla/in/https://ibge.gov.br/estados/RJ"
    const pathWithHttps1 = "/filter/sigla/in/HTTPS://ibge.gov.br/estados/RJ"
    const pathWithWWW = "/filter/sigla/in/www.ibge.gov.br/estados/RJ"
    const pathWithoutHttpOrHttpsOrWWW = "/filter/sigla/in/ftp.ibge.gov.br/estados/RJ"
    const pathWithoutHttpOrHttpsOrWWW1 = "/filter/sigla/in/htt.ibge.gov.br/estados/RJ"
    const pathWithoutHttpOrHttpsOrWWW2 = "/filter/sigla/in/ibge.gov.br/estados/RJ"
    
    // 2. ACT
    const pathWithHttpTrue = pathHasURL(pathWithHttp)
    const pathWithHttpsTrue = pathHasURL(pathWithHttps)
    const pathWithHttpsTrue1 = pathHasURL(pathWithHttps1)
    const pathWithWWWTrue = pathHasURL(pathWithWWW)
    const pathWithoutHttpOrHttpsOrWWWTrue = ! pathHasURL(pathWithoutHttpOrHttpsOrWWW)
    const pathWithoutHttpOrHttpsOrWWW1True = ! pathHasURL(pathWithoutHttpOrHttpsOrWWW1)
    const pathWithoutHttpOrHttpsOrWWW2True = ! pathHasURL(pathWithoutHttpOrHttpsOrWWW2)
    
    // 3. ASSERT
    //expect(sum2).to.be.equal(sum1);
    expect(pathWithHttpTrue).to.equal(true)
    expect(pathWithHttpsTrue).to.equal(true)
    expect(pathWithHttpsTrue1).to.equal(true)
    expect(pathWithWWWTrue).to.equal(true)
    expect(pathWithoutHttpOrHttpsOrWWWTrue).to.equal(true)
    expect(pathWithoutHttpOrHttpsOrWWW1True).to.equal(true)
    expect(pathWithoutHttpOrHttpsOrWWW2True).to.equal(true)
    // ACT and ASSERT
    expect(pathHasURL("/filter/sigla/in/ibge.gov.br/estados/RJ/http/")).to.equal(false)
    expect(pathHasURL("/filter/sigla/in/w.ibge.gov.br/estados/RJ/https/")).to.equal(false)
    expect(pathHasURL("/filter/sigla/in/ibge.gov.br/estados/RJ/www/")).to.equal(false)

  })
})
describe('pathSplittedBySlash divides by slash a path (parameter from requested url)', function () {
  it('should returns array of strings considering urls inside path,where each one is string', function () {
    const path1 = 'within/http://172.30.10.86:8000/ibge/bcim/municipios/3159407/*collect/geom/buffer/0.2/intersects/https://172.30.10.86:8000/instituicoes/bcim/estado/rj/*'
    const res1 = pathSplittedBySlash(path1)
    expect(res1[0]).to.be.equal('within')
    expect(res1[1]).to.be.equal('http://172.30.10.86:8000/ibge/bcim/municipios/3159407')
    expect(res1[2]).to.be.equal('*collect')
    expect(res1[3]).to.be.equal('geom')
    expect(res1[4]).to.be.equal('buffer')
    expect(res1[5]).to.be.equal('0.2')
    expect(res1[6]).to.be.equal('intersects')
    expect(res1[7]).to.be.equal('https://172.30.10.86:8000/instituicoes/bcim/estado/rj')

    const path2 = 'filter/sigla/in/rj,es,mg/'
    const res2 = pathSplittedBySlash(path2)
    expect(res2[0]).to.be.equal('filter')
    expect(res2[1]).to.be.equal('sigla')
    expect(res2[2]).to.be.equal('in')
    expect(res2[3]).to.be.equal('rj,es,mg')
    
    const path3 = 'filter/sigla/in/rj,es,mg/and/geom/buffer/0.2/eq/geom1/'
    const res3 = pathSplittedBySlash(path3)
    expect(res3[0]).to.be.equal('filter')
    expect(res3[1]).to.be.equal('sigla')
    expect(res3[2]).to.be.equal('in')
    expect(res3[3]).to.be.equal('rj,es,mg')
    expect(res3[4]).to.be.equal('and')
    expect(res3[5]).to.be.equal('geom')
    expect(res3[6]).to.be.equal('buffer')
    expect(res3[7]).to.be.equal('0.2')
    expect(res3[8]).to.be.equal('eq')
    expect(res3[9]).to.be.equal('geom1')
    const path4 = 'filter/sigla/in/rj,es,mg/and/geom/buffer/0.2/eq/geom1/*collect/sigla,geom/buffer/0.2'
    const res4 = pathSplittedBySlash(path4)
    //let arr = ['filter','sigla','in','rj,es,mg','and','geom','buffer','0.2','eq','geom1','*collect', 'sigla,geom','buffer','0.2']
    //expect(res4).to.be.equal(arr)
    expect(res4[0]).to.be.equal('filter')
    expect(res4[1]).to.be.equal('sigla')
    expect(res4[2]).to.be.equal('in')
    expect(res4[3]).to.be.equal('rj,es,mg')
    expect(res4[4]).to.be.equal('and')
    expect(res4[5]).to.be.equal('geom')
    expect(res4[6]).to.be.equal('buffer')
    expect(res4[7]).to.be.equal('0.2')
    expect(res4[8]).to.be.equal('eq')
    expect(res4[9]).to.be.equal('geom1')
    expect(res4[10]).to.be.equal('*collect')
    expect(res4[11]).to.be.equal('sigla,geom')
    expect(res4[12]).to.be.equal('buffer')
    expect(res4[13]).to.be.equal('0.2')


  })
})

