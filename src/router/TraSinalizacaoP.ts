export {};
const express = require('express')
const router = express.Router()

const { TraSinalizacaoPResource, TraSinalizacaoPCollectionResource} = require('./../resource/TraSinalizacaoPResource')

router.get('/api/list-tra-sinalizacao-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraSinalizacaoP = new TraSinalizacaoPResource(req, res)
  return await rec_TraSinalizacaoP.getRepresentation()
})
router.get('/api/list-tra-sinalizacao-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraSinalizacaoP = new TraSinalizacaoPResource(req, res)
  return await rec_TraSinalizacaoP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-sinalizacao-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraSinalizacaoP = new TraSinalizacaoPResource(req, res)
  return await rec_TraSinalizacaoP.head()
})
router.head('/api/list-tra-sinalizacao-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraSinalizacaoP = new TraSinalizacaoPResource(req, res)
  return await rec_TraSinalizacaoP.headGivenParameters()
})
router.options('/api/list-tra-sinalizacao-p/:id([0-9]+)', async (req, res)=> {
  const rec_TraSinalizacaoP = new TraSinalizacaoPResource(req, res)
  return await rec_TraSinalizacaoP.options()
})
router.options('/api/list-tra-sinalizacao-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraSinalizacaoP = new TraSinalizacaoPResource(req, res)
  return await rec_TraSinalizacaoP.optionsGivenParameters()
})
router.get('/api/list-tra-sinalizacao-p/', async (req, res)=> {
  const rec_col_TraSinalizacaoP = new TraSinalizacaoPCollectionResource(req, res)
  return await rec_col_TraSinalizacaoP.getRepresentation()
})
router.get('/api/list-tra-sinalizacao-p/*', async (req, res)=> {
  const rec_col_TraSinalizacaoP = new TraSinalizacaoPCollectionResource(req, res)
  return await rec_col_TraSinalizacaoP.getRepresentationGivenParameters()
})
router.head('/api/list-tra-sinalizacao-p/', async (req, res)=> {
  const rec_col_TraSinalizacaoP = new TraSinalizacaoPCollectionResource(req, res)
  return await rec_col_TraSinalizacaoP.head()
})
router.head('/api/list-tra-sinalizacao-p/*', async (req, res)=> {
  const rec_col_TraSinalizacaoP = new TraSinalizacaoPCollectionResource(req, res)
  return await rec_col_TraSinalizacaoP.headGivenParameters()
})
router.options('/api/list-tra-sinalizacao-p/', async (req, res)=> {
  const rec_col_TraSinalizacaoP = new TraSinalizacaoPCollectionResource(req, res)
  return await rec_col_TraSinalizacaoP.options()
})
router.options('/api/list-tra-sinalizacao-p/*', async (req, res)=> {
  const rec_col_TraSinalizacaoP = new TraSinalizacaoPCollectionResource(req, res)
  return await rec_col_TraSinalizacaoP.optionsGivenParameters()
})
module.exports = router