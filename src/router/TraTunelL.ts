export {};
const express = require('express')
const router = express.Router()

const { TraTunelLResource, TraTunelLCollectionResource} = require('./../resource/TraTunelLResource')

router.get('/api/list-tra-tunel-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTunelL = new TraTunelLResource(req, res)
  return await rec_TraTunelL.getRepresentation()
})
router.get('/api/list-tra-tunel-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTunelL = new TraTunelLResource(req, res)
  return await rec_TraTunelL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-tunel-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTunelL = new TraTunelLResource(req, res)
  return await rec_TraTunelL.head()
})
router.head('/api/list-tra-tunel-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTunelL = new TraTunelLResource(req, res)
  return await rec_TraTunelL.headGivenParameters()
})
router.options('/api/list-tra-tunel-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraTunelL = new TraTunelLResource(req, res)
  return await rec_TraTunelL.options()
})
router.options('/api/list-tra-tunel-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraTunelL = new TraTunelLResource(req, res)
  return await rec_TraTunelL.optionsGivenParameters()
})
router.get('/api/list-tra-tunel-l/', async (req, res)=> {
  const rec_col_TraTunelL = new TraTunelLCollectionResource(req, res)
  return await rec_col_TraTunelL.getRepresentation()
})
router.get('/api/list-tra-tunel-l/*', async (req, res)=> {
  const rec_col_TraTunelL = new TraTunelLCollectionResource(req, res)
  return await rec_col_TraTunelL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-tunel-l/', async (req, res)=> {
  const rec_col_TraTunelL = new TraTunelLCollectionResource(req, res)
  return await rec_col_TraTunelL.head()
})
router.head('/api/list-tra-tunel-l/*', async (req, res)=> {
  const rec_col_TraTunelL = new TraTunelLCollectionResource(req, res)
  return await rec_col_TraTunelL.headGivenParameters()
})
router.options('/api/list-tra-tunel-l/', async (req, res)=> {
  const rec_col_TraTunelL = new TraTunelLCollectionResource(req, res)
  return await rec_col_TraTunelL.options()
})
router.options('/api/list-tra-tunel-l/*', async (req, res)=> {
  const rec_col_TraTunelL = new TraTunelLCollectionResource(req, res)
  return await rec_col_TraTunelL.optionsGivenParameters()
})
module.exports = router