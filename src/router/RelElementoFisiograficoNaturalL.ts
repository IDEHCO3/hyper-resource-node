export {};
const express = require('express')
const router = express.Router()

const { RelElementoFisiograficoNaturalLResource, RelElementoFisiograficoNaturalLCollectionResource} = require('./../resource/RelElementoFisiograficoNaturalLResource')

router.get('/api/list-rel-elemento-fisiografico-natural-l/:id([0-9]+)', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLResource(req, res)
  return await rec_RelElementoFisiograficoNaturalL.getRepresentation()
})
router.get('/api/list-rel-elemento-fisiografico-natural-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLResource(req, res)
  return await rec_RelElementoFisiograficoNaturalL.getRepresentationGivenParameters()
})
router.head('/api/list-rel-elemento-fisiografico-natural-l/:id([0-9]+)', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLResource(req, res)
  return await rec_RelElementoFisiograficoNaturalL.head()
})
router.head('/api/list-rel-elemento-fisiografico-natural-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLResource(req, res)
  return await rec_RelElementoFisiograficoNaturalL.headGivenParameters()
})
router.options('/api/list-rel-elemento-fisiografico-natural-l/:id([0-9]+)', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLResource(req, res)
  return await rec_RelElementoFisiograficoNaturalL.options()
})
router.options('/api/list-rel-elemento-fisiografico-natural-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLResource(req, res)
  return await rec_RelElementoFisiograficoNaturalL.optionsGivenParameters()
})
router.get('/api/list-rel-elemento-fisiografico-natural-l/', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalL.getRepresentation()
})
router.get('/api/list-rel-elemento-fisiografico-natural-l/*', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalL.getRepresentationGivenParameters()
})
router.head('/api/list-rel-elemento-fisiografico-natural-l/', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalL.head()
})
router.head('/api/list-rel-elemento-fisiografico-natural-l/*', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalL.headGivenParameters()
})
router.options('/api/list-rel-elemento-fisiografico-natural-l/', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalL.options()
})
router.options('/api/list-rel-elemento-fisiografico-natural-l/*', async (req, res)=> {
  const rec_col_RelElementoFisiograficoNaturalL = new RelElementoFisiograficoNaturalLCollectionResource(req, res)
  return await rec_col_RelElementoFisiograficoNaturalL.optionsGivenParameters()
})
module.exports = router