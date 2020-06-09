export {};
const express = require('express')
const router = express.Router()

const { LocAreaEdificadaAResource, LocAreaEdificadaACollectionResource} = require('./../resource/LocAreaEdificadaAResource')

router.get('/api/list-loc-area-edificada-a/:id([0-9]+)', async (req, res)=> {
  const rec_LocAreaEdificadaA = new LocAreaEdificadaAResource(req, res)
  return await rec_LocAreaEdificadaA.getRepresentation()
})
router.get('/api/list-loc-area-edificada-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocAreaEdificadaA = new LocAreaEdificadaAResource(req, res)
  return await rec_LocAreaEdificadaA.getRepresentationGivenParameters()
})
router.head('/api/list-loc-area-edificada-a/:id([0-9]+)', async (req, res)=> {
  const rec_LocAreaEdificadaA = new LocAreaEdificadaAResource(req, res)
  return await rec_LocAreaEdificadaA.head()
})
router.head('/api/list-loc-area-edificada-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocAreaEdificadaA = new LocAreaEdificadaAResource(req, res)
  return await rec_LocAreaEdificadaA.headGivenParameters()
})
router.options('/api/list-loc-area-edificada-a/:id([0-9]+)', async (req, res)=> {
  const rec_LocAreaEdificadaA = new LocAreaEdificadaAResource(req, res)
  return await rec_LocAreaEdificadaA.options()
})
router.options('/api/list-loc-area-edificada-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocAreaEdificadaA = new LocAreaEdificadaAResource(req, res)
  return await rec_LocAreaEdificadaA.optionsGivenParameters()
})
router.get('/api/list-loc-area-edificada-a/', async (req, res)=> {
  const rec_col_LocAreaEdificadaA = new LocAreaEdificadaACollectionResource(req, res)
  return await rec_col_LocAreaEdificadaA.getRepresentation()
})
router.get('/api/list-loc-area-edificada-a/*', async (req, res)=> {
  const rec_col_LocAreaEdificadaA = new LocAreaEdificadaACollectionResource(req, res)
  return await rec_col_LocAreaEdificadaA.getRepresentationGivenParameters()
})
router.head('/api/list-loc-area-edificada-a/', async (req, res)=> {
  const rec_col_LocAreaEdificadaA = new LocAreaEdificadaACollectionResource(req, res)
  return await rec_col_LocAreaEdificadaA.head()
})
router.head('/api/list-loc-area-edificada-a/*', async (req, res)=> {
  const rec_col_LocAreaEdificadaA = new LocAreaEdificadaACollectionResource(req, res)
  return await rec_col_LocAreaEdificadaA.headGivenParameters()
})
router.options('/api/list-loc-area-edificada-a/', async (req, res)=> {
  const rec_col_LocAreaEdificadaA = new LocAreaEdificadaACollectionResource(req, res)
  return await rec_col_LocAreaEdificadaA.options()
})
router.options('/api/list-loc-area-edificada-a/*', async (req, res)=> {
  const rec_col_LocAreaEdificadaA = new LocAreaEdificadaACollectionResource(req, res)
  return await rec_col_LocAreaEdificadaA.optionsGivenParameters()
})
module.exports = router