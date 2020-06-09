export {};
const express = require('express')
const router = express.Router()

const { LocVilaPResource, LocVilaPCollectionResource} = require('./../resource/LocVilaPResource')

router.get('/api/list-loc-vila-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocVilaP = new LocVilaPResource(req, res)
  return await rec_LocVilaP.getRepresentation()
})
router.get('/api/list-loc-vila-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocVilaP = new LocVilaPResource(req, res)
  return await rec_LocVilaP.getRepresentationGivenParameters()
})
router.head('/api/list-loc-vila-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocVilaP = new LocVilaPResource(req, res)
  return await rec_LocVilaP.head()
})
router.head('/api/list-loc-vila-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocVilaP = new LocVilaPResource(req, res)
  return await rec_LocVilaP.headGivenParameters()
})
router.options('/api/list-loc-vila-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocVilaP = new LocVilaPResource(req, res)
  return await rec_LocVilaP.options()
})
router.options('/api/list-loc-vila-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocVilaP = new LocVilaPResource(req, res)
  return await rec_LocVilaP.optionsGivenParameters()
})
router.get('/api/list-loc-vila-p/', async (req, res)=> {
  const rec_col_LocVilaP = new LocVilaPCollectionResource(req, res)
  return await rec_col_LocVilaP.getRepresentation()
})
router.get('/api/list-loc-vila-p/*', async (req, res)=> {
  const rec_col_LocVilaP = new LocVilaPCollectionResource(req, res)
  return await rec_col_LocVilaP.getRepresentationGivenParameters()
})
router.head('/api/list-loc-vila-p/', async (req, res)=> {
  const rec_col_LocVilaP = new LocVilaPCollectionResource(req, res)
  return await rec_col_LocVilaP.head()
})
router.head('/api/list-loc-vila-p/*', async (req, res)=> {
  const rec_col_LocVilaP = new LocVilaPCollectionResource(req, res)
  return await rec_col_LocVilaP.headGivenParameters()
})
router.options('/api/list-loc-vila-p/', async (req, res)=> {
  const rec_col_LocVilaP = new LocVilaPCollectionResource(req, res)
  return await rec_col_LocVilaP.options()
})
router.options('/api/list-loc-vila-p/*', async (req, res)=> {
  const rec_col_LocVilaP = new LocVilaPCollectionResource(req, res)
  return await rec_col_LocVilaP.optionsGivenParameters()
})
module.exports = router