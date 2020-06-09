export {};
const express = require('express')
const router = express.Router()

const { TraTrechoFerroviarioLResource, TraTrechoFerroviarioLCollectionResource} = require('./../resource/TraTrechoFerroviarioLResource')

router.get('/api/list-tra-trecho-ferroviario-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoFerroviarioL = new TraTrechoFerroviarioLResource(req, res)
  return await rec_TraTrechoFerroviarioL.getRepresentation()
})
router.get('/api/list-tra-trecho-ferroviario-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoFerroviarioL = new TraTrechoFerroviarioLResource(req, res)
  return await rec_TraTrechoFerroviarioL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-trecho-ferroviario-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoFerroviarioL = new TraTrechoFerroviarioLResource(req, res)
  return await rec_TraTrechoFerroviarioL.head()
})
router.head('/api/list-tra-trecho-ferroviario-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoFerroviarioL = new TraTrechoFerroviarioLResource(req, res)
  return await rec_TraTrechoFerroviarioL.headGivenParameters()
})
router.options('/api/list-tra-trecho-ferroviario-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoFerroviarioL = new TraTrechoFerroviarioLResource(req, res)
  return await rec_TraTrechoFerroviarioL.options()
})
router.options('/api/list-tra-trecho-ferroviario-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoFerroviarioL = new TraTrechoFerroviarioLResource(req, res)
  return await rec_TraTrechoFerroviarioL.optionsGivenParameters()
})
router.get('/api/list-tra-trecho-ferroviario-l/', async (req, res)=> {
  const rec_col_TraTrechoFerroviarioL = new TraTrechoFerroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoFerroviarioL.getRepresentation()
})
router.get('/api/list-tra-trecho-ferroviario-l/*', async (req, res)=> {
  const rec_col_TraTrechoFerroviarioL = new TraTrechoFerroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoFerroviarioL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-trecho-ferroviario-l/', async (req, res)=> {
  const rec_col_TraTrechoFerroviarioL = new TraTrechoFerroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoFerroviarioL.head()
})
router.head('/api/list-tra-trecho-ferroviario-l/*', async (req, res)=> {
  const rec_col_TraTrechoFerroviarioL = new TraTrechoFerroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoFerroviarioL.headGivenParameters()
})
router.options('/api/list-tra-trecho-ferroviario-l/', async (req, res)=> {
  const rec_col_TraTrechoFerroviarioL = new TraTrechoFerroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoFerroviarioL.options()
})
router.options('/api/list-tra-trecho-ferroviario-l/*', async (req, res)=> {
  const rec_col_TraTrechoFerroviarioL = new TraTrechoFerroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoFerroviarioL.optionsGivenParameters()
})
module.exports = router