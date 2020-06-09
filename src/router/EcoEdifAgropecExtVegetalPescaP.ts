export {};
const express = require('express')
const router = express.Router()

const { EcoEdifAgropecExtVegetalPescaPResource, EcoEdifAgropecExtVegetalPescaPCollectionResource} = require('./../resource/EcoEdifAgropecExtVegetalPescaPResource')

router.get('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/:id([0-9]+)', async (req, res)=> {
  const rec_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPResource(req, res)
  return await rec_EcoEdifAgropecExtVegetalPescaP.getRepresentation()
})
router.get('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPResource(req, res)
  return await rec_EcoEdifAgropecExtVegetalPescaP.getRepresentationGivenParameters()
})
router.head('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/:id([0-9]+)', async (req, res)=> {
  const rec_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPResource(req, res)
  return await rec_EcoEdifAgropecExtVegetalPescaP.head()
})
router.head('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPResource(req, res)
  return await rec_EcoEdifAgropecExtVegetalPescaP.headGivenParameters()
})
router.options('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/:id([0-9]+)', async (req, res)=> {
  const rec_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPResource(req, res)
  return await rec_EcoEdifAgropecExtVegetalPescaP.options()
})
router.options('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPResource(req, res)
  return await rec_EcoEdifAgropecExtVegetalPescaP.optionsGivenParameters()
})
router.get('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/', async (req, res)=> {
  const rec_col_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPCollectionResource(req, res)
  return await rec_col_EcoEdifAgropecExtVegetalPescaP.getRepresentation()
})
router.get('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/*', async (req, res)=> {
  const rec_col_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPCollectionResource(req, res)
  return await rec_col_EcoEdifAgropecExtVegetalPescaP.getRepresentationGivenParameters()
})
router.head('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/', async (req, res)=> {
  const rec_col_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPCollectionResource(req, res)
  return await rec_col_EcoEdifAgropecExtVegetalPescaP.head()
})
router.head('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/*', async (req, res)=> {
  const rec_col_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPCollectionResource(req, res)
  return await rec_col_EcoEdifAgropecExtVegetalPescaP.headGivenParameters()
})
router.options('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/', async (req, res)=> {
  const rec_col_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPCollectionResource(req, res)
  return await rec_col_EcoEdifAgropecExtVegetalPescaP.options()
})
router.options('/api/list-eco-edif-agropec-ext-vegetal-pesca-p/*', async (req, res)=> {
  const rec_col_EcoEdifAgropecExtVegetalPescaP = new EcoEdifAgropecExtVegetalPescaPCollectionResource(req, res)
  return await rec_col_EcoEdifAgropecExtVegetalPescaP.optionsGivenParameters()
})
module.exports = router