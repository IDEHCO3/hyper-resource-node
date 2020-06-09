export {};
const express = require('express')
const router = express.Router()

const { TraTravessiaPResource, TraTravessiaPCollectionResource} = require('./../resource/TraTravessiaPResource')

router.get('/api/list-tra-travessia-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraTravessiaP = new TraTravessiaPResource(req, res)
  return await rec_TraTravessiaP.getRepresentation()
})
router.get('/api/list-tra-travessia-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTravessiaP = new TraTravessiaPResource(req, res)
  return await rec_TraTravessiaP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-travessia-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraTravessiaP = new TraTravessiaPResource(req, res)
  return await rec_TraTravessiaP.head()
})
router.head('/api/list-tra-travessia-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTravessiaP = new TraTravessiaPResource(req, res)
  return await rec_TraTravessiaP.headGivenParameters()
})
router.options('/api/list-tra-travessia-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraTravessiaP = new TraTravessiaPResource(req, res)
  return await rec_TraTravessiaP.options()
})
router.options('/api/list-tra-travessia-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTravessiaP = new TraTravessiaPResource(req, res)
  return await rec_TraTravessiaP.optionsGivenParameters()
})
router.get('/api/list-tra-travessia-p/', async (req, res)=> {
  const rec_col_TraTravessiaP = new TraTravessiaPCollectionResource(req, res)
  return await rec_col_TraTravessiaP.getRepresentation()
})
router.get('/api/list-tra-travessia-p/*', async (req, res)=> {
  const rec_col_TraTravessiaP = new TraTravessiaPCollectionResource(req, res)
  return await rec_col_TraTravessiaP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-travessia-p/', async (req, res)=> {
  const rec_col_TraTravessiaP = new TraTravessiaPCollectionResource(req, res)
  return await rec_col_TraTravessiaP.head()
})
router.head('/api/list-tra-travessia-p/*', async (req, res)=> {
  const rec_col_TraTravessiaP = new TraTravessiaPCollectionResource(req, res)
  return await rec_col_TraTravessiaP.headGivenParameters()
})
router.options('/api/list-tra-travessia-p/', async (req, res)=> {
  const rec_col_TraTravessiaP = new TraTravessiaPCollectionResource(req, res)
  return await rec_col_TraTravessiaP.options()
})
router.options('/api/list-tra-travessia-p/*', async (req, res)=> {
  const rec_col_TraTravessiaP = new TraTravessiaPCollectionResource(req, res)
  return await rec_col_TraTravessiaP.optionsGivenParameters()
})
module.exports = router