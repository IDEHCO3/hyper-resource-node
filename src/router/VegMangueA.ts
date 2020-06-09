export {};
const express = require('express')
const router = express.Router()

const { VegMangueAResource, VegMangueACollectionResource} = require('./../resource/VegMangueAResource')

router.get('/api/list-veg-mangue-a/:id([0-9]+)', async (req, res)=> {
  const rec_VegMangueA = new VegMangueAResource(req, res)
  return await rec_VegMangueA.getRepresentation()
})
router.get('/api/list-veg-mangue-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_VegMangueA = new VegMangueAResource(req, res)
  return await rec_VegMangueA.getRepresentationGivenParameters()
})
router.head('/api/list-veg-mangue-a/:id([0-9]+)', async (req, res)=> {
  const rec_VegMangueA = new VegMangueAResource(req, res)
  return await rec_VegMangueA.head()
})
router.head('/api/list-veg-mangue-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_VegMangueA = new VegMangueAResource(req, res)
  return await rec_VegMangueA.headGivenParameters()
})
router.options('/api/list-veg-mangue-a/:id([0-9]+)', async (req, res)=> {
  const rec_VegMangueA = new VegMangueAResource(req, res)
  return await rec_VegMangueA.options()
})
router.options('/api/list-veg-mangue-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_VegMangueA = new VegMangueAResource(req, res)
  return await rec_VegMangueA.optionsGivenParameters()
})
router.get('/api/list-veg-mangue-a/', async (req, res)=> {
  const rec_col_VegMangueA = new VegMangueACollectionResource(req, res)
  return await rec_col_VegMangueA.getRepresentation()
})
router.get('/api/list-veg-mangue-a/*', async (req, res)=> {
  const rec_col_VegMangueA = new VegMangueACollectionResource(req, res)
  return await rec_col_VegMangueA.getRepresentationGivenParameters()
})
router.head('/api/list-veg-mangue-a/', async (req, res)=> {
  const rec_col_VegMangueA = new VegMangueACollectionResource(req, res)
  return await rec_col_VegMangueA.head()
})
router.head('/api/list-veg-mangue-a/*', async (req, res)=> {
  const rec_col_VegMangueA = new VegMangueACollectionResource(req, res)
  return await rec_col_VegMangueA.headGivenParameters()
})
router.options('/api/list-veg-mangue-a/', async (req, res)=> {
  const rec_col_VegMangueA = new VegMangueACollectionResource(req, res)
  return await rec_col_VegMangueA.options()
})
router.options('/api/list-veg-mangue-a/*', async (req, res)=> {
  const rec_col_VegMangueA = new VegMangueACollectionResource(req, res)
  return await rec_col_VegMangueA.optionsGivenParameters()
})
module.exports = router