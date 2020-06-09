export {};
const express = require('express')
const router = express.Router()

const { TraEdifMetroFerroviariaPResource, TraEdifMetroFerroviariaPCollectionResource} = require('./../resource/TraEdifMetroFerroviariaPResource')

router.get('/api/list-tra-edif-metro-ferroviaria-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPResource(req, res)
  return await rec_TraEdifMetroFerroviariaP.getRepresentation()
})
router.get('/api/list-tra-edif-metro-ferroviaria-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPResource(req, res)
  return await rec_TraEdifMetroFerroviariaP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-edif-metro-ferroviaria-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPResource(req, res)
  return await rec_TraEdifMetroFerroviariaP.head()
})
router.head('/api/list-tra-edif-metro-ferroviaria-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPResource(req, res)
  return await rec_TraEdifMetroFerroviariaP.headGivenParameters()
})
router.options('/api/list-tra-edif-metro-ferroviaria-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPResource(req, res)
  return await rec_TraEdifMetroFerroviariaP.options()
})
router.options('/api/list-tra-edif-metro-ferroviaria-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPResource(req, res)
  return await rec_TraEdifMetroFerroviariaP.optionsGivenParameters()
})
router.get('/api/list-tra-edif-metro-ferroviaria-p/', async (req, res)=> {
  const rec_col_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPCollectionResource(req, res)
  return await rec_col_TraEdifMetroFerroviariaP.getRepresentation()
})
router.get('/api/list-tra-edif-metro-ferroviaria-p/*', async (req, res)=> {
  const rec_col_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPCollectionResource(req, res)
  return await rec_col_TraEdifMetroFerroviariaP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-edif-metro-ferroviaria-p/', async (req, res)=> {
  const rec_col_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPCollectionResource(req, res)
  return await rec_col_TraEdifMetroFerroviariaP.head()
})
router.head('/api/list-tra-edif-metro-ferroviaria-p/*', async (req, res)=> {
  const rec_col_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPCollectionResource(req, res)
  return await rec_col_TraEdifMetroFerroviariaP.headGivenParameters()
})
router.options('/api/list-tra-edif-metro-ferroviaria-p/', async (req, res)=> {
  const rec_col_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPCollectionResource(req, res)
  return await rec_col_TraEdifMetroFerroviariaP.options()
})
router.options('/api/list-tra-edif-metro-ferroviaria-p/*', async (req, res)=> {
  const rec_col_TraEdifMetroFerroviariaP = new TraEdifMetroFerroviariaPCollectionResource(req, res)
  return await rec_col_TraEdifMetroFerroviariaP.optionsGivenParameters()
})
module.exports = router