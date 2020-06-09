export {};
const express = require('express')
const router = express.Router()

const { EcoExtMineralPResource, EcoExtMineralPCollectionResource} = require('./../resource/EcoExtMineralPResource')

router.get('/api/list-eco-ext-mineral-p/:id([0-9]+)', async (req, res)=> {
  const rec_EcoExtMineralP = new EcoExtMineralPResource(req, res)
  return await rec_EcoExtMineralP.getRepresentation()
})
router.get('/api/list-eco-ext-mineral-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EcoExtMineralP = new EcoExtMineralPResource(req, res)
  return await rec_EcoExtMineralP.getRepresentationGivenParameters()
})
router.head('/api/list-eco-ext-mineral-p/:id([0-9]+)', async (req, res)=> {
  const rec_EcoExtMineralP = new EcoExtMineralPResource(req, res)
  return await rec_EcoExtMineralP.head()
})
router.head('/api/list-eco-ext-mineral-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EcoExtMineralP = new EcoExtMineralPResource(req, res)
  return await rec_EcoExtMineralP.headGivenParameters()
})
router.options('/api/list-eco-ext-mineral-p/:id([0-9]+)', async (req, res)=> {
  const rec_EcoExtMineralP = new EcoExtMineralPResource(req, res)
  return await rec_EcoExtMineralP.options()
})
router.options('/api/list-eco-ext-mineral-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EcoExtMineralP = new EcoExtMineralPResource(req, res)
  return await rec_EcoExtMineralP.optionsGivenParameters()
})
router.get('/api/list-eco-ext-mineral-p/', async (req, res)=> {
  const rec_col_EcoExtMineralP = new EcoExtMineralPCollectionResource(req, res)
  return await rec_col_EcoExtMineralP.getRepresentation()
})
router.get('/api/list-eco-ext-mineral-p/*', async (req, res)=> {
  const rec_col_EcoExtMineralP = new EcoExtMineralPCollectionResource(req, res)
  return await rec_col_EcoExtMineralP.getRepresentationGivenParameters()
})
router.head('/api/list-eco-ext-mineral-p/', async (req, res)=> {
  const rec_col_EcoExtMineralP = new EcoExtMineralPCollectionResource(req, res)
  return await rec_col_EcoExtMineralP.head()
})
router.head('/api/list-eco-ext-mineral-p/*', async (req, res)=> {
  const rec_col_EcoExtMineralP = new EcoExtMineralPCollectionResource(req, res)
  return await rec_col_EcoExtMineralP.headGivenParameters()
})
router.options('/api/list-eco-ext-mineral-p/', async (req, res)=> {
  const rec_col_EcoExtMineralP = new EcoExtMineralPCollectionResource(req, res)
  return await rec_col_EcoExtMineralP.options()
})
router.options('/api/list-eco-ext-mineral-p/*', async (req, res)=> {
  const rec_col_EcoExtMineralP = new EcoExtMineralPCollectionResource(req, res)
  return await rec_col_EcoExtMineralP.optionsGivenParameters()
})
module.exports = router