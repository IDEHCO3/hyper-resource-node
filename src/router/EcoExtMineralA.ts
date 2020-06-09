export {};
const express = require('express')
const router = express.Router()

const { EcoExtMineralAResource, EcoExtMineralACollectionResource} = require('./../resource/EcoExtMineralAResource')

router.get('/api/list-eco-ext-mineral-a/:id([0-9]+)', async (req, res)=> {
  const rec_EcoExtMineralA = new EcoExtMineralAResource(req, res)
  return await rec_EcoExtMineralA.getRepresentation()
})
router.get('/api/list-eco-ext-mineral-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_EcoExtMineralA = new EcoExtMineralAResource(req, res)
  return await rec_EcoExtMineralA.getRepresentationGivenParameters()
})
router.head('/api/list-eco-ext-mineral-a/:id([0-9]+)', async (req, res)=> {
  const rec_EcoExtMineralA = new EcoExtMineralAResource(req, res)
  return await rec_EcoExtMineralA.head()
})
router.head('/api/list-eco-ext-mineral-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_EcoExtMineralA = new EcoExtMineralAResource(req, res)
  return await rec_EcoExtMineralA.headGivenParameters()
})
router.options('/api/list-eco-ext-mineral-a/:id([0-9]+)', async (req, res)=> {
  const rec_EcoExtMineralA = new EcoExtMineralAResource(req, res)
  return await rec_EcoExtMineralA.options()
})
router.options('/api/list-eco-ext-mineral-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_EcoExtMineralA = new EcoExtMineralAResource(req, res)
  return await rec_EcoExtMineralA.optionsGivenParameters()
})
router.get('/api/list-eco-ext-mineral-a/', async (req, res)=> {
  const rec_col_EcoExtMineralA = new EcoExtMineralACollectionResource(req, res)
  return await rec_col_EcoExtMineralA.getRepresentation()
})
router.get('/api/list-eco-ext-mineral-a/*', async (req, res)=> {
  const rec_col_EcoExtMineralA = new EcoExtMineralACollectionResource(req, res)
  return await rec_col_EcoExtMineralA.getRepresentationGivenParameters()
})
router.head('/api/list-eco-ext-mineral-a/', async (req, res)=> {
  const rec_col_EcoExtMineralA = new EcoExtMineralACollectionResource(req, res)
  return await rec_col_EcoExtMineralA.head()
})
router.head('/api/list-eco-ext-mineral-a/*', async (req, res)=> {
  const rec_col_EcoExtMineralA = new EcoExtMineralACollectionResource(req, res)
  return await rec_col_EcoExtMineralA.headGivenParameters()
})
router.options('/api/list-eco-ext-mineral-a/', async (req, res)=> {
  const rec_col_EcoExtMineralA = new EcoExtMineralACollectionResource(req, res)
  return await rec_col_EcoExtMineralA.options()
})
router.options('/api/list-eco-ext-mineral-a/*', async (req, res)=> {
  const rec_col_EcoExtMineralA = new EcoExtMineralACollectionResource(req, res)
  return await rec_col_EcoExtMineralA.optionsGivenParameters()
})
module.exports = router