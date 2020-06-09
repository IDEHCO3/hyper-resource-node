export {};
const express = require('express')
const router = express.Router()

const { TraPistaPontoPousoPResource, TraPistaPontoPousoPCollectionResource} = require('./../resource/TraPistaPontoPousoPResource')

router.get('/api/list-tra-pista-ponto-pouso-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraPistaPontoPousoP = new TraPistaPontoPousoPResource(req, res)
  return await rec_TraPistaPontoPousoP.getRepresentation()
})
router.get('/api/list-tra-pista-ponto-pouso-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraPistaPontoPousoP = new TraPistaPontoPousoPResource(req, res)
  return await rec_TraPistaPontoPousoP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-pista-ponto-pouso-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraPistaPontoPousoP = new TraPistaPontoPousoPResource(req, res)
  return await rec_TraPistaPontoPousoP.head()
})
router.head('/api/list-tra-pista-ponto-pouso-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraPistaPontoPousoP = new TraPistaPontoPousoPResource(req, res)
  return await rec_TraPistaPontoPousoP.headGivenParameters()
})
router.options('/api/list-tra-pista-ponto-pouso-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraPistaPontoPousoP = new TraPistaPontoPousoPResource(req, res)
  return await rec_TraPistaPontoPousoP.options()
})
router.options('/api/list-tra-pista-ponto-pouso-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraPistaPontoPousoP = new TraPistaPontoPousoPResource(req, res)
  return await rec_TraPistaPontoPousoP.optionsGivenParameters()
})
router.get('/api/list-tra-pista-ponto-pouso-p/', async (req, res)=> {
  const rec_col_TraPistaPontoPousoP = new TraPistaPontoPousoPCollectionResource(req, res)
  return await rec_col_TraPistaPontoPousoP.getRepresentation()
})
router.get('/api/list-tra-pista-ponto-pouso-p/*', async (req, res)=> {
  const rec_col_TraPistaPontoPousoP = new TraPistaPontoPousoPCollectionResource(req, res)
  return await rec_col_TraPistaPontoPousoP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-pista-ponto-pouso-p/', async (req, res)=> {
  const rec_col_TraPistaPontoPousoP = new TraPistaPontoPousoPCollectionResource(req, res)
  return await rec_col_TraPistaPontoPousoP.head()
})
router.head('/api/list-tra-pista-ponto-pouso-p/*', async (req, res)=> {
  const rec_col_TraPistaPontoPousoP = new TraPistaPontoPousoPCollectionResource(req, res)
  return await rec_col_TraPistaPontoPousoP.headGivenParameters()
})
router.options('/api/list-tra-pista-ponto-pouso-p/', async (req, res)=> {
  const rec_col_TraPistaPontoPousoP = new TraPistaPontoPousoPCollectionResource(req, res)
  return await rec_col_TraPistaPontoPousoP.options()
})
router.options('/api/list-tra-pista-ponto-pouso-p/*', async (req, res)=> {
  const rec_col_TraPistaPontoPousoP = new TraPistaPontoPousoPCollectionResource(req, res)
  return await rec_col_TraPistaPontoPousoP.optionsGivenParameters()
})
module.exports = router