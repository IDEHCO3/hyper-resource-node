export {};
const express = require('express')
const router = express.Router()

const { HidBarragemPResource, HidBarragemPCollectionResource} = require('./../resource/HidBarragemPResource')

router.get('/api/list-hid-barragem-p/:id([0-9]+)', async (req, res)=> {
  const rec_HidBarragemP = new HidBarragemPResource(req, res)
  return await rec_HidBarragemP.getRepresentation()
})
router.get('/api/list-hid-barragem-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidBarragemP = new HidBarragemPResource(req, res)
  return await rec_HidBarragemP.getRepresentationGivenParameters()
})
router.head('/api/list-hid-barragem-p/:id([0-9]+)', async (req, res)=> {
  const rec_HidBarragemP = new HidBarragemPResource(req, res)
  return await rec_HidBarragemP.head()
})
router.head('/api/list-hid-barragem-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidBarragemP = new HidBarragemPResource(req, res)
  return await rec_HidBarragemP.headGivenParameters()
})
router.options('/api/list-hid-barragem-p/:id([0-9]+)', async (req, res)=> {
  const rec_HidBarragemP = new HidBarragemPResource(req, res)
  return await rec_HidBarragemP.options()
})
router.options('/api/list-hid-barragem-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidBarragemP = new HidBarragemPResource(req, res)
  return await rec_HidBarragemP.optionsGivenParameters()
})
router.get('/api/list-hid-barragem-p/', async (req, res)=> {
  const rec_col_HidBarragemP = new HidBarragemPCollectionResource(req, res)
  return await rec_col_HidBarragemP.getRepresentation()
})
router.get('/api/list-hid-barragem-p/*', async (req, res)=> {
  const rec_col_HidBarragemP = new HidBarragemPCollectionResource(req, res)
  return await rec_col_HidBarragemP.getRepresentationGivenParameters()
})
router.head('/api/list-hid-barragem-p/', async (req, res)=> {
  const rec_col_HidBarragemP = new HidBarragemPCollectionResource(req, res)
  return await rec_col_HidBarragemP.head()
})
router.head('/api/list-hid-barragem-p/*', async (req, res)=> {
  const rec_col_HidBarragemP = new HidBarragemPCollectionResource(req, res)
  return await rec_col_HidBarragemP.headGivenParameters()
})
router.options('/api/list-hid-barragem-p/', async (req, res)=> {
  const rec_col_HidBarragemP = new HidBarragemPCollectionResource(req, res)
  return await rec_col_HidBarragemP.options()
})
router.options('/api/list-hid-barragem-p/*', async (req, res)=> {
  const rec_col_HidBarragemP = new HidBarragemPCollectionResource(req, res)
  return await rec_col_HidBarragemP.optionsGivenParameters()
})
module.exports = router