export {};
const express = require('express')
const router = express.Router()

const { TraTrechoDutoLResource, TraTrechoDutoLCollectionResource} = require('./../resource/TraTrechoDutoLResource')

router.get('/api/list-tra-trecho-duto-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoDutoL = new TraTrechoDutoLResource(req, res)
  return await rec_TraTrechoDutoL.getRepresentation()
})
router.get('/api/list-tra-trecho-duto-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoDutoL = new TraTrechoDutoLResource(req, res)
  return await rec_TraTrechoDutoL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-trecho-duto-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoDutoL = new TraTrechoDutoLResource(req, res)
  return await rec_TraTrechoDutoL.head()
})
router.head('/api/list-tra-trecho-duto-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoDutoL = new TraTrechoDutoLResource(req, res)
  return await rec_TraTrechoDutoL.headGivenParameters()
})
router.options('/api/list-tra-trecho-duto-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTrechoDutoL = new TraTrechoDutoLResource(req, res)
  return await rec_TraTrechoDutoL.options()
})
router.options('/api/list-tra-trecho-duto-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTrechoDutoL = new TraTrechoDutoLResource(req, res)
  return await rec_TraTrechoDutoL.optionsGivenParameters()
})
router.get('/api/list-tra-trecho-duto-l/', async (req, res)=> {
  const rec_col_TraTrechoDutoL = new TraTrechoDutoLCollectionResource(req, res)
  return await rec_col_TraTrechoDutoL.getRepresentation()
})
router.get('/api/list-tra-trecho-duto-l/*', async (req, res)=> {
  const rec_col_TraTrechoDutoL = new TraTrechoDutoLCollectionResource(req, res)
  return await rec_col_TraTrechoDutoL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-trecho-duto-l/', async (req, res)=> {
  const rec_col_TraTrechoDutoL = new TraTrechoDutoLCollectionResource(req, res)
  return await rec_col_TraTrechoDutoL.head()
})
router.head('/api/list-tra-trecho-duto-l/*', async (req, res)=> {
  const rec_col_TraTrechoDutoL = new TraTrechoDutoLCollectionResource(req, res)
  return await rec_col_TraTrechoDutoL.headGivenParameters()
})
router.options('/api/list-tra-trecho-duto-l/', async (req, res)=> {
  const rec_col_TraTrechoDutoL = new TraTrechoDutoLCollectionResource(req, res)
  return await rec_col_TraTrechoDutoL.options()
})
router.options('/api/list-tra-trecho-duto-l/*', async (req, res)=> {
  const rec_col_TraTrechoDutoL = new TraTrechoDutoLCollectionResource(req, res)
  return await rec_col_TraTrechoDutoL.optionsGivenParameters()
})
module.exports = router