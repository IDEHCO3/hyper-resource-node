export {};
const express = require('express')
const router = express.Router()

const { VegVegRestingaAResource, VegVegRestingaACollectionResource} = require('./../resource/VegVegRestingaAResource')

router.get('/api/list-veg-veg-restinga-a/:id([0-9]+)', async (req, res)=> {
  const rec_VegVegRestingaA = new VegVegRestingaAResource(req, res)
  return await rec_VegVegRestingaA.getRepresentation()
})
router.get('/api/list-veg-veg-restinga-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_VegVegRestingaA = new VegVegRestingaAResource(req, res)
  return await rec_VegVegRestingaA.getRepresentationGivenParameters()
})
router.head('/api/list-veg-veg-restinga-a/:id([0-9]+)', async (req, res)=> {
  const rec_VegVegRestingaA = new VegVegRestingaAResource(req, res)
  return await rec_VegVegRestingaA.head()
})
router.head('/api/list-veg-veg-restinga-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_VegVegRestingaA = new VegVegRestingaAResource(req, res)
  return await rec_VegVegRestingaA.headGivenParameters()
})
router.options('/api/list-veg-veg-restinga-a/:id([0-9]+)', async (req, res)=> {
  const rec_VegVegRestingaA = new VegVegRestingaAResource(req, res)
  return await rec_VegVegRestingaA.options()
})
router.options('/api/list-veg-veg-restinga-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_VegVegRestingaA = new VegVegRestingaAResource(req, res)
  return await rec_VegVegRestingaA.optionsGivenParameters()
})
router.get('/api/list-veg-veg-restinga-a/', async (req, res)=> {
  const rec_col_VegVegRestingaA = new VegVegRestingaACollectionResource(req, res)
  return await rec_col_VegVegRestingaA.getRepresentation()
})
router.get('/api/list-veg-veg-restinga-a/*', async (req, res)=> {
  const rec_col_VegVegRestingaA = new VegVegRestingaACollectionResource(req, res)
  return await rec_col_VegVegRestingaA.getRepresentationGivenParameters()
})
router.head('/api/list-veg-veg-restinga-a/', async (req, res)=> {
  const rec_col_VegVegRestingaA = new VegVegRestingaACollectionResource(req, res)
  return await rec_col_VegVegRestingaA.head()
})
router.head('/api/list-veg-veg-restinga-a/*', async (req, res)=> {
  const rec_col_VegVegRestingaA = new VegVegRestingaACollectionResource(req, res)
  return await rec_col_VegVegRestingaA.headGivenParameters()
})
router.options('/api/list-veg-veg-restinga-a/', async (req, res)=> {
  const rec_col_VegVegRestingaA = new VegVegRestingaACollectionResource(req, res)
  return await rec_col_VegVegRestingaA.options()
})
router.options('/api/list-veg-veg-restinga-a/*', async (req, res)=> {
  const rec_col_VegVegRestingaA = new VegVegRestingaACollectionResource(req, res)
  return await rec_col_VegVegRestingaA.optionsGivenParameters()
})
module.exports = router