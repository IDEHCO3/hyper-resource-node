export {};
const express = require('express')
const router = express.Router()

const { LimUnidadeProtecaoIntegralAResource, LimUnidadeProtecaoIntegralACollectionResource} = require('./../resource/LimUnidadeProtecaoIntegralAResource')

router.get('/api/list-lim-unidade-protecao-integral-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralAResource(req, res)
  return await rec_LimUnidadeProtecaoIntegralA.getRepresentation()
})
router.get('/api/list-lim-unidade-protecao-integral-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralAResource(req, res)
  return await rec_LimUnidadeProtecaoIntegralA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-unidade-protecao-integral-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralAResource(req, res)
  return await rec_LimUnidadeProtecaoIntegralA.head()
})
router.head('/api/list-lim-unidade-protecao-integral-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralAResource(req, res)
  return await rec_LimUnidadeProtecaoIntegralA.headGivenParameters()
})
router.options('/api/list-lim-unidade-protecao-integral-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralAResource(req, res)
  return await rec_LimUnidadeProtecaoIntegralA.options()
})
router.options('/api/list-lim-unidade-protecao-integral-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralAResource(req, res)
  return await rec_LimUnidadeProtecaoIntegralA.optionsGivenParameters()
})
router.get('/api/list-lim-unidade-protecao-integral-a/', async (req, res)=> {
  const rec_col_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralACollectionResource(req, res)
  return await rec_col_LimUnidadeProtecaoIntegralA.getRepresentation()
})
router.get('/api/list-lim-unidade-protecao-integral-a/*', async (req, res)=> {
  const rec_col_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralACollectionResource(req, res)
  return await rec_col_LimUnidadeProtecaoIntegralA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-unidade-protecao-integral-a/', async (req, res)=> {
  const rec_col_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralACollectionResource(req, res)
  return await rec_col_LimUnidadeProtecaoIntegralA.head()
})
router.head('/api/list-lim-unidade-protecao-integral-a/*', async (req, res)=> {
  const rec_col_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralACollectionResource(req, res)
  return await rec_col_LimUnidadeProtecaoIntegralA.headGivenParameters()
})
router.options('/api/list-lim-unidade-protecao-integral-a/', async (req, res)=> {
  const rec_col_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralACollectionResource(req, res)
  return await rec_col_LimUnidadeProtecaoIntegralA.options()
})
router.options('/api/list-lim-unidade-protecao-integral-a/*', async (req, res)=> {
  const rec_col_LimUnidadeProtecaoIntegralA = new LimUnidadeProtecaoIntegralACollectionResource(req, res)
  return await rec_col_LimUnidadeProtecaoIntegralA.optionsGivenParameters()
})
module.exports = router