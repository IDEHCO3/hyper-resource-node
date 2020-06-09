export {};
const express = require('express')
const router = express.Router()

const { LocCapitalPResource, LocCapitalPCollectionResource} = require('./../resource/LocCapitalPResource')

router.get('/api/list-loc-capital-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocCapitalP = new LocCapitalPResource(req, res)
  return await rec_LocCapitalP.getRepresentation()
})
router.get('/api/list-loc-capital-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocCapitalP = new LocCapitalPResource(req, res)
  return await rec_LocCapitalP.getRepresentationGivenParameters()
})
router.head('/api/list-loc-capital-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocCapitalP = new LocCapitalPResource(req, res)
  return await rec_LocCapitalP.head()
})
router.head('/api/list-loc-capital-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocCapitalP = new LocCapitalPResource(req, res)
  return await rec_LocCapitalP.headGivenParameters()
})
router.options('/api/list-loc-capital-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocCapitalP = new LocCapitalPResource(req, res)
  return await rec_LocCapitalP.options()
})
router.options('/api/list-loc-capital-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocCapitalP = new LocCapitalPResource(req, res)
  return await rec_LocCapitalP.optionsGivenParameters()
})
router.get('/api/list-loc-capital-p/', async (req, res)=> {
  const rec_col_LocCapitalP = new LocCapitalPCollectionResource(req, res)
  return await rec_col_LocCapitalP.getRepresentation()
})
router.get('/api/list-loc-capital-p/*', async (req, res)=> {
  const rec_col_LocCapitalP = new LocCapitalPCollectionResource(req, res)
  return await rec_col_LocCapitalP.getRepresentationGivenParameters()
})
router.head('/api/list-loc-capital-p/', async (req, res)=> {
  const rec_col_LocCapitalP = new LocCapitalPCollectionResource(req, res)
  return await rec_col_LocCapitalP.head()
})
router.head('/api/list-loc-capital-p/*', async (req, res)=> {
  const rec_col_LocCapitalP = new LocCapitalPCollectionResource(req, res)
  return await rec_col_LocCapitalP.headGivenParameters()
})
router.options('/api/list-loc-capital-p/', async (req, res)=> {
  const rec_col_LocCapitalP = new LocCapitalPCollectionResource(req, res)
  return await rec_col_LocCapitalP.options()
})
router.options('/api/list-loc-capital-p/*', async (req, res)=> {
  const rec_col_LocCapitalP = new LocCapitalPCollectionResource(req, res)
  return await rec_col_LocCapitalP.optionsGivenParameters()
})
module.exports = router