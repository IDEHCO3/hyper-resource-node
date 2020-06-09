export {};
const express = require('express')
const router = express.Router()

const { TraTravessiaLResource, TraTravessiaLCollectionResource} = require('./../resource/TraTravessiaLResource')

router.get('/api/list-tra-travessia-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTravessiaL = new TraTravessiaLResource(req, res)
  return await rec_TraTravessiaL.getRepresentation()
})
router.get('/api/list-tra-travessia-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTravessiaL = new TraTravessiaLResource(req, res)
  return await rec_TraTravessiaL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-travessia-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTravessiaL = new TraTravessiaLResource(req, res)
  return await rec_TraTravessiaL.head()
})
router.head('/api/list-tra-travessia-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTravessiaL = new TraTravessiaLResource(req, res)
  return await rec_TraTravessiaL.headGivenParameters()
})
router.options('/api/list-tra-travessia-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTravessiaL = new TraTravessiaLResource(req, res)
  return await rec_TraTravessiaL.options()
})
router.options('/api/list-tra-travessia-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTravessiaL = new TraTravessiaLResource(req, res)
  return await rec_TraTravessiaL.optionsGivenParameters()
})
router.get('/api/list-tra-travessia-l/', async (req, res)=> {
  const rec_col_TraTravessiaL = new TraTravessiaLCollectionResource(req, res)
  return await rec_col_TraTravessiaL.getRepresentation()
})
router.get('/api/list-tra-travessia-l/*', async (req, res)=> {
  const rec_col_TraTravessiaL = new TraTravessiaLCollectionResource(req, res)
  return await rec_col_TraTravessiaL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-travessia-l/', async (req, res)=> {
  const rec_col_TraTravessiaL = new TraTravessiaLCollectionResource(req, res)
  return await rec_col_TraTravessiaL.head()
})
router.head('/api/list-tra-travessia-l/*', async (req, res)=> {
  const rec_col_TraTravessiaL = new TraTravessiaLCollectionResource(req, res)
  return await rec_col_TraTravessiaL.headGivenParameters()
})
router.options('/api/list-tra-travessia-l/', async (req, res)=> {
  const rec_col_TraTravessiaL = new TraTravessiaLCollectionResource(req, res)
  return await rec_col_TraTravessiaL.options()
})
router.options('/api/list-tra-travessia-l/*', async (req, res)=> {
  const rec_col_TraTravessiaL = new TraTravessiaLCollectionResource(req, res)
  return await rec_col_TraTravessiaL.optionsGivenParameters()
})
module.exports = router