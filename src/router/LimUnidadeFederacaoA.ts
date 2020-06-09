export {};
const express = require('express')
const router = express.Router()

const { LimUnidadeFederacaoAResource, LimUnidadeFederacaoACollectionResource} = require('./../resource/LimUnidadeFederacaoAResource')

router.get('/api/list-lim-unidade-federacao-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeFederacaoA = new LimUnidadeFederacaoAResource(req, res)
  return await rec_LimUnidadeFederacaoA.getRepresentation()
})
router.get('/api/list-lim-unidade-federacao-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeFederacaoA = new LimUnidadeFederacaoAResource(req, res)
  return await rec_LimUnidadeFederacaoA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-unidade-federacao-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeFederacaoA = new LimUnidadeFederacaoAResource(req, res)
  return await rec_LimUnidadeFederacaoA.head()
})
router.head('/api/list-lim-unidade-federacao-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeFederacaoA = new LimUnidadeFederacaoAResource(req, res)
  return await rec_LimUnidadeFederacaoA.headGivenParameters()
})
router.options('/api/list-lim-unidade-federacao-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeFederacaoA = new LimUnidadeFederacaoAResource(req, res)
  return await rec_LimUnidadeFederacaoA.options()
})
router.options('/api/list-lim-unidade-federacao-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeFederacaoA = new LimUnidadeFederacaoAResource(req, res)
  return await rec_LimUnidadeFederacaoA.optionsGivenParameters()
})
router.get('/api/list-lim-unidade-federacao-a/', async (req, res)=> {
  const rec_col_LimUnidadeFederacaoA = new LimUnidadeFederacaoACollectionResource(req, res)
  return await rec_col_LimUnidadeFederacaoA.getRepresentation()
})
router.get('/api/list-lim-unidade-federacao-a/*', async (req, res)=> {
  const rec_col_LimUnidadeFederacaoA = new LimUnidadeFederacaoACollectionResource(req, res)
  return await rec_col_LimUnidadeFederacaoA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-unidade-federacao-a/', async (req, res)=> {
  const rec_col_LimUnidadeFederacaoA = new LimUnidadeFederacaoACollectionResource(req, res)
  return await rec_col_LimUnidadeFederacaoA.head()
})
router.head('/api/list-lim-unidade-federacao-a/*', async (req, res)=> {
  const rec_col_LimUnidadeFederacaoA = new LimUnidadeFederacaoACollectionResource(req, res)
  return await rec_col_LimUnidadeFederacaoA.headGivenParameters()
})
router.options('/api/list-lim-unidade-federacao-a/', async (req, res)=> {
  const rec_col_LimUnidadeFederacaoA = new LimUnidadeFederacaoACollectionResource(req, res)
  return await rec_col_LimUnidadeFederacaoA.options()
})
router.options('/api/list-lim-unidade-federacao-a/*', async (req, res)=> {
  const rec_col_LimUnidadeFederacaoA = new LimUnidadeFederacaoACollectionResource(req, res)
  return await rec_col_LimUnidadeFederacaoA.optionsGivenParameters()
})
module.exports = router