export {};
const express = require('express')
const router = express.Router()

const { RelElementoFisiograficoNaturalPResource, RelElementoFisiograficoNaturalPCollectionResource} = require('./../resource/RelElementoFisiograficoNaturalPResource')

router.get('/api/list-rel-elemento-fisiografico-natural-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPResource(req, res)
  return await rec_RelElementoFisiograficoNaturalP.getRepresentation()
})
router.get('/api/list-rel-elemento-fisiografico-natural-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPResource(req, res)
  return await rec_RelElementoFisiograficoNaturalP.getRepresentationGivenParameters()
})
router.head('/api/list-rel-elemento-fisiografico-natural-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPResource(req, res)
  return await rec_RelElementoFisiograficoNaturalP.head()
})
router.head('/api/list-rel-elemento-fisiografico-natural-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPResource(req, res)
  return await rec_RelElementoFisiograficoNaturalP.headGivenParameters()
})
router.options('/api/list-rel-elemento-fisiografico-natural-p/:id([0-9]+)', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPResource(req, res)
  return await rec_RelElementoFisiograficoNaturalP.options()
})
router.options('/api/list-rel-elemento-fisiografico-natural-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPResource(req, res)
  return await rec_RelElementoFisiograficoNaturalP.optionsGivenParameters()
})
router.get('/api/list-rel-elemento-fisiografico-natural-p/', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalP.getRepresentation()
})
router.get('/api/list-rel-elemento-fisiografico-natural-p/*', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalP.getRepresentationGivenParameters()
})
router.head('/api/list-rel-elemento-fisiografico-natural-p/', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalP.head()
})
router.head('/api/list-rel-elemento-fisiografico-natural-p/*', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalP.headGivenParameters()
})
router.options('/api/list-rel-elemento-fisiografico-natural-p/', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalP.options()
})
router.options('/api/list-rel-elemento-fisiografico-natural-p/*', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalP = new RelElementoFisiograficoNaturalPCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalP.optionsGivenParameters()
})
module.exports = router