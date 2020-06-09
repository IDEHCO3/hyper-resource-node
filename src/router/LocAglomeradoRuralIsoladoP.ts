export {};
const express = require('express')
const router = express.Router()

const { LocAglomeradoRuralIsoladoPResource, LocAglomeradoRuralIsoladoPCollectionResource} = require('./../resource/LocAglomeradoRuralIsoladoPResource')

router.get('/api/list-loc-aglomerado-rural-isolado-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPResource(req, res)
  return await rec_LocAglomeradoRuralIsoladoP.getRepresentation()
})
router.get('/api/list-loc-aglomerado-rural-isolado-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPResource(req, res)
  return await rec_LocAglomeradoRuralIsoladoP.getRepresentationGivenParameters()
})
router.head('/api/list-loc-aglomerado-rural-isolado-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPResource(req, res)
  return await rec_LocAglomeradoRuralIsoladoP.head()
})
router.head('/api/list-loc-aglomerado-rural-isolado-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPResource(req, res)
  return await rec_LocAglomeradoRuralIsoladoP.headGivenParameters()
})
router.options('/api/list-loc-aglomerado-rural-isolado-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPResource(req, res)
  return await rec_LocAglomeradoRuralIsoladoP.options()
})
router.options('/api/list-loc-aglomerado-rural-isolado-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPResource(req, res)
  return await rec_LocAglomeradoRuralIsoladoP.optionsGivenParameters()
})
router.get('/api/list-loc-aglomerado-rural-isolado-p/', async (req, res)=> {
  const rec_col_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPCollectionResource(req, res)
  return await rec_col_LocAglomeradoRuralIsoladoP.getRepresentation()
})
router.get('/api/list-loc-aglomerado-rural-isolado-p/*', async (req, res)=> {
  const rec_col_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPCollectionResource(req, res)
  return await rec_col_LocAglomeradoRuralIsoladoP.getRepresentationGivenParameters()
})
router.head('/api/list-loc-aglomerado-rural-isolado-p/', async (req, res)=> {
  const rec_col_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPCollectionResource(req, res)
  return await rec_col_LocAglomeradoRuralIsoladoP.head()
})
router.head('/api/list-loc-aglomerado-rural-isolado-p/*', async (req, res)=> {
  const rec_col_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPCollectionResource(req, res)
  return await rec_col_LocAglomeradoRuralIsoladoP.headGivenParameters()
})
router.options('/api/list-loc-aglomerado-rural-isolado-p/', async (req, res)=> {
  const rec_col_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPCollectionResource(req, res)
  return await rec_col_LocAglomeradoRuralIsoladoP.options()
})
router.options('/api/list-loc-aglomerado-rural-isolado-p/*', async (req, res)=> {
  const rec_col_LocAglomeradoRuralIsoladoP = new LocAglomeradoRuralIsoladoPCollectionResource(req, res)
  return await rec_col_LocAglomeradoRuralIsoladoP.optionsGivenParameters()
})
module.exports = router