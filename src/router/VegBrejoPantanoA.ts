export {};
const express = require('express')
const router = express.Router()

const { VegBrejoPantanoAResource, VegBrejoPantanoACollectionResource} = require('./../resource/VegBrejoPantanoAResource')

router.get('/api/list-veg-brejo-pantano-a/:id([0-9]+)', async (req, res)=> {
  const rec_VegBrejoPantanoA = new VegBrejoPantanoAResource(req, res)
  return await rec_VegBrejoPantanoA.getRepresentation()
})
router.get('/api/list-veg-brejo-pantano-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_VegBrejoPantanoA = new VegBrejoPantanoAResource(req, res)
  return await rec_VegBrejoPantanoA.getRepresentationGivenParameters()
})
router.head('/api/list-veg-brejo-pantano-a/:id([0-9]+)', async (req, res)=> {
  const rec_VegBrejoPantanoA = new VegBrejoPantanoAResource(req, res)
  return await rec_VegBrejoPantanoA.head()
})
router.head('/api/list-veg-brejo-pantano-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_VegBrejoPantanoA = new VegBrejoPantanoAResource(req, res)
  return await rec_VegBrejoPantanoA.headGivenParameters()
})
router.options('/api/list-veg-brejo-pantano-a/:id([0-9]+)', async (req, res)=> {
  const rec_VegBrejoPantanoA = new VegBrejoPantanoAResource(req, res)
  return await rec_VegBrejoPantanoA.options()
})
router.options('/api/list-veg-brejo-pantano-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_VegBrejoPantanoA = new VegBrejoPantanoAResource(req, res)
  return await rec_VegBrejoPantanoA.optionsGivenParameters()
})
router.get('/api/list-veg-brejo-pantano-a/', async (req, res)=> {
  const rec_col_VegBrejoPantanoA = new VegBrejoPantanoACollectionResource(req, res)
  return await rec_col_VegBrejoPantanoA.getRepresentation()
})
router.get('/api/list-veg-brejo-pantano-a/*', async (req, res)=> {
  const rec_col_VegBrejoPantanoA = new VegBrejoPantanoACollectionResource(req, res)
  return await rec_col_VegBrejoPantanoA.getRepresentationGivenParameters()
})
router.head('/api/list-veg-brejo-pantano-a/', async (req, res)=> {
  const rec_col_VegBrejoPantanoA = new VegBrejoPantanoACollectionResource(req, res)
  return await rec_col_VegBrejoPantanoA.head()
})
router.head('/api/list-veg-brejo-pantano-a/*', async (req, res)=> {
  const rec_col_VegBrejoPantanoA = new VegBrejoPantanoACollectionResource(req, res)
  return await rec_col_VegBrejoPantanoA.headGivenParameters()
})
router.options('/api/list-veg-brejo-pantano-a/', async (req, res)=> {
  const rec_col_VegBrejoPantanoA = new VegBrejoPantanoACollectionResource(req, res)
  return await rec_col_VegBrejoPantanoA.options()
})
router.options('/api/list-veg-brejo-pantano-a/*', async (req, res)=> {
  const rec_col_VegBrejoPantanoA = new VegBrejoPantanoACollectionResource(req, res)
  return await rec_col_VegBrejoPantanoA.optionsGivenParameters()
})
module.exports = router