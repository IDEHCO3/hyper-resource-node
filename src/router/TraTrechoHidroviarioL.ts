export {};
const express = require('express')
const router = express.Router()

const { TraTrechoHidroviarioLResource, TraTrechoHidroviarioLCollectionResource} = require('./../resource/TraTrechoHidroviarioLResource')

router.get('/api/list-tra-trecho-hidroviario-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoHidroviarioL = new TraTrechoHidroviarioLResource(req, res)
  return await rec_TraTrechoHidroviarioL.getRepresentation()
})
router.get('/api/list-tra-trecho-hidroviario-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoHidroviarioL = new TraTrechoHidroviarioLResource(req, res)
  return await rec_TraTrechoHidroviarioL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-trecho-hidroviario-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoHidroviarioL = new TraTrechoHidroviarioLResource(req, res)
  return await rec_TraTrechoHidroviarioL.head()
})
router.head('/api/list-tra-trecho-hidroviario-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoHidroviarioL = new TraTrechoHidroviarioLResource(req, res)
  return await rec_TraTrechoHidroviarioL.headGivenParameters()
})
router.options('/api/list-tra-trecho-hidroviario-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoHidroviarioL = new TraTrechoHidroviarioLResource(req, res)
  return await rec_TraTrechoHidroviarioL.options()
})
router.options('/api/list-tra-trecho-hidroviario-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoHidroviarioL = new TraTrechoHidroviarioLResource(req, res)
  return await rec_TraTrechoHidroviarioL.optionsGivenParameters()
})
router.get('/api/list-tra-trecho-hidroviario-l/', async (req, res)=> {
  const rec_col_TraTrechoHidroviarioL = new TraTrechoHidroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoHidroviarioL.getRepresentation()
})
router.get('/api/list-tra-trecho-hidroviario-l/*', async (req, res)=> {
  const rec_col_TraTrechoHidroviarioL = new TraTrechoHidroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoHidroviarioL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-trecho-hidroviario-l/', async (req, res)=> {
  const rec_col_TraTrechoHidroviarioL = new TraTrechoHidroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoHidroviarioL.head()
})
router.head('/api/list-tra-trecho-hidroviario-l/*', async (req, res)=> {
  const rec_col_TraTrechoHidroviarioL = new TraTrechoHidroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoHidroviarioL.headGivenParameters()
})
router.options('/api/list-tra-trecho-hidroviario-l/', async (req, res)=> {
  const rec_col_TraTrechoHidroviarioL = new TraTrechoHidroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoHidroviarioL.options()
})
router.options('/api/list-tra-trecho-hidroviario-l/*', async (req, res)=> {
  const rec_col_TraTrechoHidroviarioL = new TraTrechoHidroviarioLCollectionResource(req, res)
  return await rec_col_TraTrechoHidroviarioL.optionsGivenParameters()
})
module.exports = router