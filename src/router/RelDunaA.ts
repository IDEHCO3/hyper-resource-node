export {};
const express = require('express')
const router = express.Router()

const { RelDunaAResource, RelDunaACollectionResource} = require('./../resource/RelDunaAResource')

router.get('/api/list-rel-duna-a/:id([0-9]+)', async (req, res)=> {
  const rec_RelDunaA = new RelDunaAResource(req, res)
  return await rec_RelDunaA.getRepresentation()
})
router.get('/api/list-rel-duna-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelDunaA = new RelDunaAResource(req, res)
  return await rec_RelDunaA.getRepresentationGivenParameters()
})
router.head('/api/list-rel-duna-a/:id([0-9]+)', async (req, res)=> {
  const rec_RelDunaA = new RelDunaAResource(req, res)
  return await rec_RelDunaA.head()
})
router.head('/api/list-rel-duna-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelDunaA = new RelDunaAResource(req, res)
  return await rec_RelDunaA.headGivenParameters()
})
router.options('/api/list-rel-duna-a/:id([0-9]+)', async (req, res)=> {
  const rec_RelDunaA = new RelDunaAResource(req, res)
  return await rec_RelDunaA.options()
})
router.options('/api/list-rel-duna-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelDunaA = new RelDunaAResource(req, res)
  return await rec_RelDunaA.optionsGivenParameters()
})
router.get('/api/list-rel-duna-a/', async (req, res)=> {
  const rec_col_RelDunaA = new RelDunaACollectionResource(req, res)
  return await rec_col_RelDunaA.getRepresentation()
})
router.get('/api/list-rel-duna-a/*', async (req, res)=> {
  const rec_col_RelDunaA = new RelDunaACollectionResource(req, res)
  return await rec_col_RelDunaA.getRepresentationGivenParameters()
})
router.head('/api/list-rel-duna-a/', async (req, res)=> {
  const rec_col_RelDunaA = new RelDunaACollectionResource(req, res)
  return await rec_col_RelDunaA.head()
})
router.head('/api/list-rel-duna-a/*', async (req, res)=> {
  const rec_col_RelDunaA = new RelDunaACollectionResource(req, res)
  return await rec_col_RelDunaA.headGivenParameters()
})
router.options('/api/list-rel-duna-a/', async (req, res)=> {
  const rec_col_RelDunaA = new RelDunaACollectionResource(req, res)
  return await rec_col_RelDunaA.options()
})
router.options('/api/list-rel-duna-a/*', async (req, res)=> {
  const rec_col_RelDunaA = new RelDunaACollectionResource(req, res)
  return await rec_col_RelDunaA.optionsGivenParameters()
})
module.exports = router