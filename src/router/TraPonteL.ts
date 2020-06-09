export {};
const express = require('express')
const router = express.Router()

const { TraPonteLResource, TraPonteLCollectionResource} = require('./../resource/TraPonteLResource')

router.get('/api/list-tra-ponte-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraPonteL = new TraPonteLResource(req, res)
  return await rec_TraPonteL.getRepresentation()
})
router.get('/api/list-tra-ponte-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraPonteL = new TraPonteLResource(req, res)
  return await rec_TraPonteL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-ponte-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraPonteL = new TraPonteLResource(req, res)
  return await rec_TraPonteL.head()
})
router.head('/api/list-tra-ponte-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraPonteL = new TraPonteLResource(req, res)
  return await rec_TraPonteL.headGivenParameters()
})
router.options('/api/list-tra-ponte-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraPonteL = new TraPonteLResource(req, res)
  return await rec_TraPonteL.options()
})
router.options('/api/list-tra-ponte-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraPonteL = new TraPonteLResource(req, res)
  return await rec_TraPonteL.optionsGivenParameters()
})
router.get('/api/list-tra-ponte-l/', async (req, res)=> {
  const rec_col_TraPonteL = new TraPonteLCollectionResource(req, res)
  return await rec_col_TraPonteL.getRepresentation()
})
router.get('/api/list-tra-ponte-l/*', async (req, res)=> {
  const rec_col_TraPonteL = new TraPonteLCollectionResource(req, res)
  return await rec_col_TraPonteL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-ponte-l/', async (req, res)=> {
  const rec_col_TraPonteL = new TraPonteLCollectionResource(req, res)
  return await rec_col_TraPonteL.head()
})
router.head('/api/list-tra-ponte-l/*', async (req, res)=> {
  const rec_col_TraPonteL = new TraPonteLCollectionResource(req, res)
  return await rec_col_TraPonteL.headGivenParameters()
})
router.options('/api/list-tra-ponte-l/', async (req, res)=> {
  const rec_col_TraPonteL = new TraPonteLCollectionResource(req, res)
  return await rec_col_TraPonteL.options()
})
router.options('/api/list-tra-ponte-l/*', async (req, res)=> {
  const rec_col_TraPonteL = new TraPonteLCollectionResource(req, res)
  return await rec_col_TraPonteL.optionsGivenParameters()
})
module.exports = router