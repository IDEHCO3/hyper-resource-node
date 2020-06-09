export {};
const express = require('express')
const router = express.Router()

const { RelPontoCotadoAltimetricoPResource, RelPontoCotadoAltimetricoPCollectionResource} = require('./../resource/RelPontoCotadoAltimetricoPResource')

router.get('/api/list-rel-ponto-cotado-altimetrico-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPResource(req, res)
  return await rec_RelPontoCotadoAltimetricoP.getRepresentation()
})
router.get('/api/list-rel-ponto-cotado-altimetrico-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPResource(req, res)
  return await rec_RelPontoCotadoAltimetricoP.getRepresentationGivenParameters()
})
router.head('/api/list-rel-ponto-cotado-altimetrico-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPResource(req, res)
  return await rec_RelPontoCotadoAltimetricoP.head()
})
router.head('/api/list-rel-ponto-cotado-altimetrico-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPResource(req, res)
  return await rec_RelPontoCotadoAltimetricoP.headGivenParameters()
})
router.options('/api/list-rel-ponto-cotado-altimetrico-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPResource(req, res)
  return await rec_RelPontoCotadoAltimetricoP.options()
})
router.options('/api/list-rel-ponto-cotado-altimetrico-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPResource(req, res)
  return await rec_RelPontoCotadoAltimetricoP.optionsGivenParameters()
})
router.get('/api/list-rel-ponto-cotado-altimetrico-p/', async (req, res)=> {
  const rec_col_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoAltimetricoP.getRepresentation()
})
router.get('/api/list-rel-ponto-cotado-altimetrico-p/*', async (req, res)=> {
  const rec_col_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoAltimetricoP.getRepresentationGivenParameters()
})
router.head('/api/list-rel-ponto-cotado-altimetrico-p/', async (req, res)=> {
  const rec_col_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoAltimetricoP.head()
})
router.head('/api/list-rel-ponto-cotado-altimetrico-p/*', async (req, res)=> {
  const rec_col_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoAltimetricoP.headGivenParameters()
})
router.options('/api/list-rel-ponto-cotado-altimetrico-p/', async (req, res)=> {
  const rec_col_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoAltimetricoP.options()
})
router.options('/api/list-rel-ponto-cotado-altimetrico-p/*', async (req, res)=> {
  const rec_col_RelPontoCotadoAltimetricoP = new RelPontoCotadoAltimetricoPCollectionResource(req, res)
  return await rec_col_RelPontoCotadoAltimetricoP.optionsGivenParameters()
})
module.exports = router