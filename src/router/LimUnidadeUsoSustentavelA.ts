export {};
const express = require('express')
const router = express.Router()

const { LimUnidadeUsoSustentavelAResource, LimUnidadeUsoSustentavelACollectionResource} = require('./../resource/LimUnidadeUsoSustentavelAResource')

router.get('/api/list-lim-unidade-uso-sustentavel-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelAResource(req, res)
  return await rec_LimUnidadeUsoSustentavelA.getRepresentation()
})
router.get('/api/list-lim-unidade-uso-sustentavel-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelAResource(req, res)
  return await rec_LimUnidadeUsoSustentavelA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-unidade-uso-sustentavel-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelAResource(req, res)
  return await rec_LimUnidadeUsoSustentavelA.head()
})
router.head('/api/list-lim-unidade-uso-sustentavel-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelAResource(req, res)
  return await rec_LimUnidadeUsoSustentavelA.headGivenParameters()
})
router.options('/api/list-lim-unidade-uso-sustentavel-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelAResource(req, res)
  return await rec_LimUnidadeUsoSustentavelA.options()
})
router.options('/api/list-lim-unidade-uso-sustentavel-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelAResource(req, res)
  return await rec_LimUnidadeUsoSustentavelA.optionsGivenParameters()
})
router.get('/api/list-lim-unidade-uso-sustentavel-a/', async (req, res)=> {
  const rec_col_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelACollectionResource(req, res)
  return await rec_col_LimUnidadeUsoSustentavelA.getRepresentation()
})
router.get('/api/list-lim-unidade-uso-sustentavel-a/*', async (req, res)=> {
  const rec_col_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelACollectionResource(req, res)
  return await rec_col_LimUnidadeUsoSustentavelA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-unidade-uso-sustentavel-a/', async (req, res)=> {
  const rec_col_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelACollectionResource(req, res)
  return await rec_col_LimUnidadeUsoSustentavelA.head()
})
router.head('/api/list-lim-unidade-uso-sustentavel-a/*', async (req, res)=> {
  const rec_col_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelACollectionResource(req, res)
  return await rec_col_LimUnidadeUsoSustentavelA.headGivenParameters()
})
router.options('/api/list-lim-unidade-uso-sustentavel-a/', async (req, res)=> {
  const rec_col_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelACollectionResource(req, res)
  return await rec_col_LimUnidadeUsoSustentavelA.options()
})
router.options('/api/list-lim-unidade-uso-sustentavel-a/*', async (req, res)=> {
  const rec_col_LimUnidadeUsoSustentavelA = new LimUnidadeUsoSustentavelACollectionResource(req, res)
  return await rec_col_LimUnidadeUsoSustentavelA.optionsGivenParameters()
})
module.exports = router