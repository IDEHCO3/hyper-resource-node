export {};
const express = require('express')
const router = express.Router()

const { HidBarragemLResource, HidBarragemLCollectionResource} = require('./../resource/HidBarragemLResource')

router.get('/api/list-hid-barragem-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidBarragemL = new HidBarragemLResource(req, res)
  return await rec_HidBarragemL.getRepresentation()
})
router.get('/api/list-hid-barragem-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidBarragemL = new HidBarragemLResource(req, res)
  return await rec_HidBarragemL.getRepresentationGivenParameters()
})
router.head('/api/list-hid-barragem-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidBarragemL = new HidBarragemLResource(req, res)
  return await rec_HidBarragemL.head()
})
router.head('/api/list-hid-barragem-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidBarragemL = new HidBarragemLResource(req, res)
  return await rec_HidBarragemL.headGivenParameters()
})
router.options('/api/list-hid-barragem-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidBarragemL = new HidBarragemLResource(req, res)
  return await rec_HidBarragemL.options()
})
router.options('/api/list-hid-barragem-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidBarragemL = new HidBarragemLResource(req, res)
  return await rec_HidBarragemL.optionsGivenParameters()
})
router.get('/api/list-hid-barragem-l/', async (req, res)=> {
  const rec_col_HidBarragemL = new HidBarragemLCollectionResource(req, res)
  return await rec_col_HidBarragemL.getRepresentation()
})
router.get('/api/list-hid-barragem-l/*', async (req, res)=> {
  const rec_col_HidBarragemL = new HidBarragemLCollectionResource(req, res)
  return await rec_col_HidBarragemL.getRepresentationGivenParameters()
})
router.head('/api/list-hid-barragem-l/', async (req, res)=> {
  const rec_col_HidBarragemL = new HidBarragemLCollectionResource(req, res)
  return await rec_col_HidBarragemL.head()
})
router.head('/api/list-hid-barragem-l/*', async (req, res)=> {
  const rec_col_HidBarragemL = new HidBarragemLCollectionResource(req, res)
  return await rec_col_HidBarragemL.headGivenParameters()
})
router.options('/api/list-hid-barragem-l/', async (req, res)=> {
  const rec_col_HidBarragemL = new HidBarragemLCollectionResource(req, res)
  return await rec_col_HidBarragemL.options()
})
router.options('/api/list-hid-barragem-l/*', async (req, res)=> {
  const rec_col_HidBarragemL = new HidBarragemLCollectionResource(req, res)
  return await rec_col_HidBarragemL.optionsGivenParameters()
})
module.exports = router