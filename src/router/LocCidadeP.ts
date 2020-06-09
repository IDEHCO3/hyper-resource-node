export {};
const express = require('express')
const router = express.Router()

const { LocCidadePResource, LocCidadePCollectionResource} = require('./../resource/LocCidadePResource')

router.get('/api/list-loc-cidade-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocCidadeP = new LocCidadePResource(req, res)
  return await rec_LocCidadeP.getRepresentation()
})
router.get('/api/list-loc-cidade-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocCidadeP = new LocCidadePResource(req, res)
  return await rec_LocCidadeP.getRepresentationGivenParameters()
})
router.head('/api/list-loc-cidade-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocCidadeP = new LocCidadePResource(req, res)
  return await rec_LocCidadeP.head()
})
router.head('/api/list-loc-cidade-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocCidadeP = new LocCidadePResource(req, res)
  return await rec_LocCidadeP.headGivenParameters()
})
router.options('/api/list-loc-cidade-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocCidadeP = new LocCidadePResource(req, res)
  return await rec_LocCidadeP.options()
})
router.options('/api/list-loc-cidade-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocCidadeP = new LocCidadePResource(req, res)
  return await rec_LocCidadeP.optionsGivenParameters()
})
router.get('/api/list-loc-cidade-p/', async (req, res)=> {
  const rec_col_LocCidadeP = new LocCidadePCollectionResource(req, res)
  return await rec_col_LocCidadeP.getRepresentation()
})
router.get('/api/list-loc-cidade-p/*', async (req, res)=> {
  const rec_col_LocCidadeP = new LocCidadePCollectionResource(req, res)
  return await rec_col_LocCidadeP.getRepresentationGivenParameters()
})
router.head('/api/list-loc-cidade-p/', async (req, res)=> {
  const rec_col_LocCidadeP = new LocCidadePCollectionResource(req, res)
  return await rec_col_LocCidadeP.head()
})
router.head('/api/list-loc-cidade-p/*', async (req, res)=> {
  const rec_col_LocCidadeP = new LocCidadePCollectionResource(req, res)
  return await rec_col_LocCidadeP.headGivenParameters()
})
router.options('/api/list-loc-cidade-p/', async (req, res)=> {
  const rec_col_LocCidadeP = new LocCidadePCollectionResource(req, res)
  return await rec_col_LocCidadeP.options()
})
router.options('/api/list-loc-cidade-p/*', async (req, res)=> {
  const rec_col_LocCidadeP = new LocCidadePCollectionResource(req, res)
  return await rec_col_LocCidadeP.optionsGivenParameters()
})
module.exports = router