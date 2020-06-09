export {};
const express = require('express')
const router = express.Router()

const { RelPontoCotadoBatimetricoPResource, RelPontoCotadoBatimetricoPCollectionResource} = require('./../resource/RelPontoCotadoBatimetricoPResource')

router.get('/api/list-rel-ponto-cotado-batimetrico-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPResource(req, res)
  return await rec_RelPontoCotadoBatimetricoP.getRepresentation()
})
router.get('/api/list-rel-ponto-cotado-batimetrico-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPResource(req, res)
  return await rec_RelPontoCotadoBatimetricoP.getRepresentationGivenParameters()
})
router.head('/api/list-rel-ponto-cotado-batimetrico-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPResource(req, res)
  return await rec_RelPontoCotadoBatimetricoP.head()
})
router.head('/api/list-rel-ponto-cotado-batimetrico-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPResource(req, res)
  return await rec_RelPontoCotadoBatimetricoP.headGivenParameters()
})
router.options('/api/list-rel-ponto-cotado-batimetrico-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPResource(req, res)
  return await rec_RelPontoCotadoBatimetricoP.options()
})
router.options('/api/list-rel-ponto-cotado-batimetrico-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPResource(req, res)
  return await rec_RelPontoCotadoBatimetricoP.optionsGivenParameters()
})
router.get('/api/list-rel-ponto-cotado-batimetrico-p/', async (req, res)=> {
  const rec_col_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoBatimetricoP.getRepresentation()
})
router.get('/api/list-rel-ponto-cotado-batimetrico-p/*', async (req, res)=> {
  const rec_col_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoBatimetricoP.getRepresentationGivenParameters()
})
router.head('/api/list-rel-ponto-cotado-batimetrico-p/', async (req, res)=> {
  const rec_col_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoBatimetricoP.head()
})
router.head('/api/list-rel-ponto-cotado-batimetrico-p/*', async (req, res)=> {
  const rec_col_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoBatimetricoP.headGivenParameters()
})
router.options('/api/list-rel-ponto-cotado-batimetrico-p/', async (req, res)=> {
  const rec_col_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoBatimetricoP.options()
})
router.options('/api/list-rel-ponto-cotado-batimetrico-p/*', async (req, res)=> {
  const rec_col_RelPontoCotadoBatimetricoP = new RelPontoCotadoBatimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoBatimetricoP.optionsGivenParameters()
})
module.exports = router