export {};
const express = require('express')
const router = express.Router()

const { LimMunicipioAResource, LimMunicipioACollectionResource} = require('./../resource/LimMunicipioAResource')

router.get('/api/list-lim-municipio-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimMunicipioA = new LimMunicipioAResource(req, res)
  return await rec_LimMunicipioA.getRepresentation()
})
router.get('/api/list-lim-municipio-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimMunicipioA = new LimMunicipioAResource(req, res)
  return await rec_LimMunicipioA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-municipio-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimMunicipioA = new LimMunicipioAResource(req, res)
  return await rec_LimMunicipioA.head()
})
router.head('/api/list-lim-municipio-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimMunicipioA = new LimMunicipioAResource(req, res)
  return await rec_LimMunicipioA.headGivenParameters()
})
router.options('/api/list-lim-municipio-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimMunicipioA = new LimMunicipioAResource(req, res)
  return await rec_LimMunicipioA.options()
})
router.options('/api/list-lim-municipio-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimMunicipioA = new LimMunicipioAResource(req, res)
  return await rec_LimMunicipioA.optionsGivenParameters()
})
router.get('/api/list-lim-municipio-a/', async (req, res)=> {
  const rec_col_LimMunicipioA = new LimMunicipioACollectionResource(req, res)
  return await rec_col_LimMunicipioA.getRepresentation()
})
router.get('/api/list-lim-municipio-a/*', async (req, res)=> {
  const rec_col_LimMunicipioA = new LimMunicipioACollectionResource(req, res)
  return await rec_col_LimMunicipioA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-municipio-a/', async (req, res)=> {
  const rec_col_LimMunicipioA = new LimMunicipioACollectionResource(req, res)
  return await rec_col_LimMunicipioA.head()
})
router.head('/api/list-lim-municipio-a/*', async (req, res)=> {
  const rec_col_LimMunicipioA = new LimMunicipioACollectionResource(req, res)
  return await rec_col_LimMunicipioA.headGivenParameters()
})
router.options('/api/list-lim-municipio-a/', async (req, res)=> {
  const rec_col_LimMunicipioA = new LimMunicipioACollectionResource(req, res)
  return await rec_col_LimMunicipioA.options()
})
router.options('/api/list-lim-municipio-a/*', async (req, res)=> {
  const rec_col_LimMunicipioA = new LimMunicipioACollectionResource(req, res)
  return await rec_col_LimMunicipioA.optionsGivenParameters()
})
module.exports = router