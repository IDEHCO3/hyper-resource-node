export {};
const express = require('express')
const router = express.Router()

const { TraTrechoRodoviarioLResource, TraTrechoRodoviarioLCollectionResource} = require('./../resource/TraTrechoRodoviarioLResource')

router.get('/api/list-tra-trecho-rodoviario-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoRodoviarioL = new TraTrechoRodoviarioLResource(req, res)
  return await rec_TraTrechoRodoviarioL.getRepresentation()
})
router.get('/api/list-tra-trecho-rodoviario-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoRodoviarioL = new TraTrechoRodoviarioLResource(req, res)
  return await rec_TraTrechoRodoviarioL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-trecho-rodoviario-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoRodoviarioL = new TraTrechoRodoviarioLResource(req, res)
  return await rec_TraTrechoRodoviarioL.head()
})
router.head('/api/list-tra-trecho-rodoviario-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoRodoviarioL = new TraTrechoRodoviarioLResource(req, res)
  return await rec_TraTrechoRodoviarioL.headGivenParameters()
})
router.options('/api/list-tra-trecho-rodoviario-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoRodoviarioL = new TraTrechoRodoviarioLResource(req, res)
  return await rec_TraTrechoRodoviarioL.options()
})
router.options('/api/list-tra-trecho-rodoviario-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoRodoviarioL = new TraTrechoRodoviarioLResource(req, res)
  return await rec_TraTrechoRodoviarioL.optionsGivenParameters()
})
router.get('/api/list-tra-trecho-rodoviario-l/', async (req, res)=> {
  const rec_col_TraTrechoRodoviarioL = new TraTrechoRodoviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoRodoviarioL.getRepresentation()
})
router.get('/api/list-tra-trecho-rodoviario-l/*', async (req, res)=> {
  const rec_col_TraTrechoRodoviarioL = new TraTrechoRodoviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoRodoviarioL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-trecho-rodoviario-l/', async (req, res)=> {
  const rec_col_TraTrechoRodoviarioL = new TraTrechoRodoviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoRodoviarioL.head()
})
router.head('/api/list-tra-trecho-rodoviario-l/*', async (req, res)=> {
  const rec_col_TraTrechoRodoviarioL = new TraTrechoRodoviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoRodoviarioL.headGivenParameters()
})
router.options('/api/list-tra-trecho-rodoviario-l/', async (req, res)=> {
  const rec_col_TraTrechoRodoviarioL = new TraTrechoRodoviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoRodoviarioL.options()
})
router.options('/api/list-tra-trecho-rodoviario-l/*', async (req, res)=> {
  const rec_col_TraTrechoRodoviarioL = new TraTrechoRodoviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoRodoviarioL.optionsGivenParameters()
})
module.exports = router