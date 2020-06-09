export {};
const express = require('express')
const router = express.Router()

const { TraEdifConstPortuariaPResource, TraEdifConstPortuariaPCollectionResource} = require('./../resource/TraEdifConstPortuariaPResource')

router.get('/api/list-tra-edif-const-portuaria-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraEdifConstPortuariaP = new TraEdifConstPortuariaPResource(req, res)
  return await rec_TraEdifConstPortuariaP.getRepresentation()
})
router.get('/api/list-tra-edif-const-portuaria-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEdifConstPortuariaP = new TraEdifConstPortuariaPResource(req, res)
  return await rec_TraEdifConstPortuariaP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-edif-const-portuaria-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraEdifConstPortuariaP = new TraEdifConstPortuariaPResource(req, res)
  return await rec_TraEdifConstPortuariaP.head()
})
router.head('/api/list-tra-edif-const-portuaria-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEdifConstPortuariaP = new TraEdifConstPortuariaPResource(req, res)
  return await rec_TraEdifConstPortuariaP.headGivenParameters()
})
router.options('/api/list-tra-edif-const-portuaria-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraEdifConstPortuariaP = new TraEdifConstPortuariaPResource(req, res)
  return await rec_TraEdifConstPortuariaP.options()
})
router.options('/api/list-tra-edif-const-portuaria-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEdifConstPortuariaP = new TraEdifConstPortuariaPResource(req, res)
  return await rec_TraEdifConstPortuariaP.optionsGivenParameters()
})
router.get('/api/list-tra-edif-const-portuaria-p/', async (req, res)=> {
  const rec_col_TraEdifConstPortuariaP = new TraEdifConstPortuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstPortuariaP.getRepresentation()
})
router.get('/api/list-tra-edif-const-portuaria-p/*', async (req, res)=> {
  const rec_col_TraEdifConstPortuariaP = new TraEdifConstPortuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstPortuariaP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-edif-const-portuaria-p/', async (req, res)=> {
  const rec_col_TraEdifConstPortuariaP = new TraEdifConstPortuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstPortuariaP.head()
})
router.head('/api/list-tra-edif-const-portuaria-p/*', async (req, res)=> {
  const rec_col_TraEdifConstPortuariaP = new TraEdifConstPortuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstPortuariaP.headGivenParameters()
})
router.options('/api/list-tra-edif-const-portuaria-p/', async (req, res)=> {
  const rec_col_TraEdifConstPortuariaP = new TraEdifConstPortuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstPortuariaP.options()
})
router.options('/api/list-tra-edif-const-portuaria-p/*', async (req, res)=> {
  const rec_col_TraEdifConstPortuariaP = new TraEdifConstPortuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstPortuariaP.optionsGivenParameters()
})
module.exports = router