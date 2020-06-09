export {};
const express = require('express')
const router = express.Router()

const { TraEdifConstAeroportuariaPResource, TraEdifConstAeroportuariaPCollectionResource} = require('./../resource/TraEdifConstAeroportuariaPResource')

router.get('/api/list-tra-edif-const-aeroportuaria-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPResource(req, res)
  return await rec_TraEdifConstAeroportuariaP.getRepresentation()
})
router.get('/api/list-tra-edif-const-aeroportuaria-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPResource(req, res)
  return await rec_TraEdifConstAeroportuariaP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-edif-const-aeroportuaria-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPResource(req, res)
  return await rec_TraEdifConstAeroportuariaP.head()
})
router.head('/api/list-tra-edif-const-aeroportuaria-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPResource(req, res)
  return await rec_TraEdifConstAeroportuariaP.headGivenParameters()
})
router.options('/api/list-tra-edif-const-aeroportuaria-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPResource(req, res)
  return await rec_TraEdifConstAeroportuariaP.options()
})
router.options('/api/list-tra-edif-const-aeroportuaria-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPResource(req, res)
  return await rec_TraEdifConstAeroportuariaP.optionsGivenParameters()
})
router.get('/api/list-tra-edif-const-aeroportuaria-p/', async (req, res)=> {
  const rec_col_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstAeroportuariaP.getRepresentation()
})
router.get('/api/list-tra-edif-const-aeroportuaria-p/*', async (req, res)=> {
  const rec_col_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstAeroportuariaP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-edif-const-aeroportuaria-p/', async (req, res)=> {
  const rec_col_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstAeroportuariaP.head()
})
router.head('/api/list-tra-edif-const-aeroportuaria-p/*', async (req, res)=> {
  const rec_col_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstAeroportuariaP.headGivenParameters()
})
router.options('/api/list-tra-edif-const-aeroportuaria-p/', async (req, res)=> {
  const rec_col_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstAeroportuariaP.options()
})
router.options('/api/list-tra-edif-const-aeroportuaria-p/*', async (req, res)=> {
  const rec_col_TraEdifConstAeroportuariaP = new TraEdifConstAeroportuariaPCollectionResource(req, res)
  return await rec_col_TraEdifConstAeroportuariaP.optionsGivenParameters()
})
module.exports = router