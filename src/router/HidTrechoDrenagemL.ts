export {};
const express = require('express')
const router = express.Router()

const { HidTrechoDrenagemLResource, HidTrechoDrenagemLCollectionResource} = require('./../resource/HidTrechoDrenagemLResource')

router.get('/api/list-hid-trecho-drenagem-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidTrechoDrenagemL = new HidTrechoDrenagemLResource(req, res)
  return await rec_HidTrechoDrenagemL.getRepresentation()
})
router.get('/api/list-hid-trecho-drenagem-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidTrechoDrenagemL = new HidTrechoDrenagemLResource(req, res)
  return await rec_HidTrechoDrenagemL.getRepresentationGivenParameters()
})
router.head('/api/list-hid-trecho-drenagem-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidTrechoDrenagemL = new HidTrechoDrenagemLResource(req, res)
  return await rec_HidTrechoDrenagemL.head()
})
router.head('/api/list-hid-trecho-drenagem-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidTrechoDrenagemL = new HidTrechoDrenagemLResource(req, res)
  return await rec_HidTrechoDrenagemL.headGivenParameters()
})
router.options('/api/list-hid-trecho-drenagem-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidTrechoDrenagemL = new HidTrechoDrenagemLResource(req, res)
  return await rec_HidTrechoDrenagemL.options()
})
router.options('/api/list-hid-trecho-drenagem-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidTrechoDrenagemL = new HidTrechoDrenagemLResource(req, res)
  return await rec_HidTrechoDrenagemL.optionsGivenParameters()
})
router.get('/api/list-hid-trecho-drenagem-l/', async (req, res)=> {
  const rec_col_HidTrechoDrenagemL = new HidTrechoDrenagemLCollectionResource(req, res)
  return await rec_col_HidTrechoDrenagemL.getRepresentation()
})
router.get('/api/list-hid-trecho-drenagem-l/*', async (req, res)=> {
  const rec_col_HidTrechoDrenagemL = new HidTrechoDrenagemLCollectionResource(req, res)
  return await rec_col_HidTrechoDrenagemL.getRepresentationGivenParameters()
})
router.head('/api/list-hid-trecho-drenagem-l/', async (req, res)=> {
  const rec_col_HidTrechoDrenagemL = new HidTrechoDrenagemLCollectionResource(req, res)
  return await rec_col_HidTrechoDrenagemL.head()
})
router.head('/api/list-hid-trecho-drenagem-l/*', async (req, res)=> {
  const rec_col_HidTrechoDrenagemL = new HidTrechoDrenagemLCollectionResource(req, res)
  return await rec_col_HidTrechoDrenagemL.headGivenParameters()
})
router.options('/api/list-hid-trecho-drenagem-l/', async (req, res)=> {
  const rec_col_HidTrechoDrenagemL = new HidTrechoDrenagemLCollectionResource(req, res)
  return await rec_col_HidTrechoDrenagemL.options()
})
router.options('/api/list-hid-trecho-drenagem-l/*', async (req, res)=> {
  const rec_col_HidTrechoDrenagemL = new HidTrechoDrenagemLCollectionResource(req, res)
  return await rec_col_HidTrechoDrenagemL.optionsGivenParameters()
})
module.exports = router