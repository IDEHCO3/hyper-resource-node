export {};
const express = require('express')
const router = express.Router()

const { HidCorredeiraPResource, HidCorredeiraPCollectionResource} = require('./../resource/HidCorredeiraPResource')

router.get('/api/list-hid-corredeira-p/:id([0-9]+)', async (req, res)=> {
  const rec_HidCorredeiraP = new HidCorredeiraPResource(req, res)
  return await rec_HidCorredeiraP.getRepresentation()
})
router.get('/api/list-hid-corredeira-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidCorredeiraP = new HidCorredeiraPResource(req, res)
  return await rec_HidCorredeiraP.getRepresentationGivenParameters()
})
router.head('/api/list-hid-corredeira-p/:id([0-9]+)', async (req, res)=> {
  const rec_HidCorredeiraP = new HidCorredeiraPResource(req, res)
  return await rec_HidCorredeiraP.head()
})
router.head('/api/list-hid-corredeira-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidCorredeiraP = new HidCorredeiraPResource(req, res)
  return await rec_HidCorredeiraP.headGivenParameters()
})
router.options('/api/list-hid-corredeira-p/:id([0-9]+)', async (req, res)=> {
  const rec_HidCorredeiraP = new HidCorredeiraPResource(req, res)
  return await rec_HidCorredeiraP.options()
})
router.options('/api/list-hid-corredeira-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidCorredeiraP = new HidCorredeiraPResource(req, res)
  return await rec_HidCorredeiraP.optionsGivenParameters()
})
router.get('/api/list-hid-corredeira-p/', async (req, res)=> {
  const rec_col_HidCorredeiraP = new HidCorredeiraPCollectionResource(req, res)
  return await rec_col_HidCorredeiraP.getRepresentation()
})
router.get('/api/list-hid-corredeira-p/*', async (req, res)=> {
  const rec_col_HidCorredeiraP = new HidCorredeiraPCollectionResource(req, res)
  return await rec_col_HidCorredeiraP.getRepresentationGivenParameters()
})
router.head('/api/list-hid-corredeira-p/', async (req, res)=> {
  const rec_col_HidCorredeiraP = new HidCorredeiraPCollectionResource(req, res)
  return await rec_col_HidCorredeiraP.head()
})
router.head('/api/list-hid-corredeira-p/*', async (req, res)=> {
  const rec_col_HidCorredeiraP = new HidCorredeiraPCollectionResource(req, res)
  return await rec_col_HidCorredeiraP.headGivenParameters()
})
router.options('/api/list-hid-corredeira-p/', async (req, res)=> {
  const rec_col_HidCorredeiraP = new HidCorredeiraPCollectionResource(req, res)
  return await rec_col_HidCorredeiraP.options()
})
router.options('/api/list-hid-corredeira-p/*', async (req, res)=> {
  const rec_col_HidCorredeiraP = new HidCorredeiraPCollectionResource(req, res)
  return await rec_col_HidCorredeiraP.optionsGivenParameters()
})
module.exports = router