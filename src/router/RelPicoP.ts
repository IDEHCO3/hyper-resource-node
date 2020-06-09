export {};
const express = require('express')
const router = express.Router()

const { RelPicoPResource, RelPicoPCollectionResource} = require('./../resource/RelPicoPResource')

router.get('/api/list-rel-pico-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelPicoP = new RelPicoPResource(req, res)
  return await rec_RelPicoP.getRepresentation()
})
router.get('/api/list-rel-pico-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelPicoP = new RelPicoPResource(req, res)
  return await rec_RelPicoP.getRepresentationGivenParameters()
})
router.head('/api/list-rel-pico-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelPicoP = new RelPicoPResource(req, res)
  return await rec_RelPicoP.head()
})
router.head('/api/list-rel-pico-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelPicoP = new RelPicoPResource(req, res)
  return await rec_RelPicoP.headGivenParameters()
})
router.options('/api/list-rel-pico-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelPicoP = new RelPicoPResource(req, res)
  return await rec_RelPicoP.options()
})
router.options('/api/list-rel-pico-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelPicoP = new RelPicoPResource(req, res)
  return await rec_RelPicoP.optionsGivenParameters()
})
router.get('/api/list-rel-pico-p/', async (req, res)=> {
  const rec_col_RelPicoP = new RelPicoPCollectionResource(req, res)
  return await rec_col_RelPicoP.getRepresentation()
})
router.get('/api/list-rel-pico-p/*', async (req, res)=> {
  const rec_col_RelPicoP = new RelPicoPCollectionResource(req, res)
  return await rec_col_RelPicoP.getRepresentationGivenParameters()
})
router.head('/api/list-rel-pico-p/', async (req, res)=> {
  const rec_col_RelPicoP = new RelPicoPCollectionResource(req, res)
  return await rec_col_RelPicoP.head()
})
router.head('/api/list-rel-pico-p/*', async (req, res)=> {
  const rec_col_RelPicoP = new RelPicoPCollectionResource(req, res)
  return await rec_col_RelPicoP.headGivenParameters()
})
router.options('/api/list-rel-pico-p/', async (req, res)=> {
  const rec_col_RelPicoP = new RelPicoPCollectionResource(req, res)
  return await rec_col_RelPicoP.options()
})
router.options('/api/list-rel-pico-p/*', async (req, res)=> {
  const rec_col_RelPicoP = new RelPicoPCollectionResource(req, res)
  return await rec_col_RelPicoP.optionsGivenParameters()
})
module.exports = router