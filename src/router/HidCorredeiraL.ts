export {};
const express = require('express')
const router = express.Router()

const { HidCorredeiraLResource, HidCorredeiraLCollectionResource} = require('./../resource/HidCorredeiraLResource')

router.get('/api/list-hid-corredeira-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidCorredeiraL = new HidCorredeiraLResource(req, res)
  return await rec_HidCorredeiraL.getRepresentation()
})
router.get('/api/list-hid-corredeira-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidCorredeiraL = new HidCorredeiraLResource(req, res)
  return await rec_HidCorredeiraL.getRepresentationGivenParameters()
})
router.head('/api/list-hid-corredeira-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidCorredeiraL = new HidCorredeiraLResource(req, res)
  return await rec_HidCorredeiraL.head()
})
router.head('/api/list-hid-corredeira-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidCorredeiraL = new HidCorredeiraLResource(req, res)
  return await rec_HidCorredeiraL.headGivenParameters()
})
router.options('/api/list-hid-corredeira-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidCorredeiraL = new HidCorredeiraLResource(req, res)
  return await rec_HidCorredeiraL.options()
})
router.options('/api/list-hid-corredeira-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidCorredeiraL = new HidCorredeiraLResource(req, res)
  return await rec_HidCorredeiraL.optionsGivenParameters()
})
router.get('/api/list-hid-corredeira-l/', async (req, res)=> {
  const rec_col_HidCorredeiraL = new HidCorredeiraLCollectionResource(req, res)
  return await rec_col_HidCorredeiraL.getRepresentation()
})
router.get('/api/list-hid-corredeira-l/*', async (req, res)=> {
  const rec_col_HidCorredeiraL = new HidCorredeiraLCollectionResource(req, res)
  return await rec_col_HidCorredeiraL.getRepresentationGivenParameters()
})
router.head('/api/list-hid-corredeira-l/', async (req, res)=> {
  const rec_col_HidCorredeiraL = new HidCorredeiraLCollectionResource(req, res)
  return await rec_col_HidCorredeiraL.head()
})
router.head('/api/list-hid-corredeira-l/*', async (req, res)=> {
  const rec_col_HidCorredeiraL = new HidCorredeiraLCollectionResource(req, res)
  return await rec_col_HidCorredeiraL.headGivenParameters()
})
router.options('/api/list-hid-corredeira-l/', async (req, res)=> {
  const rec_col_HidCorredeiraL = new HidCorredeiraLCollectionResource(req, res)
  return await rec_col_HidCorredeiraL.options()
})
router.options('/api/list-hid-corredeira-l/*', async (req, res)=> {
  const rec_col_HidCorredeiraL = new HidCorredeiraLCollectionResource(req, res)
  return await rec_col_HidCorredeiraL.optionsGivenParameters()
})
module.exports = router