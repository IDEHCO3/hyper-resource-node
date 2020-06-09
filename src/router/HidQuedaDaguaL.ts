export {};
const express = require('express')
const router = express.Router()

const { HidQuedaDaguaLResource, HidQuedaDaguaLCollectionResource} = require('./../resource/HidQuedaDaguaLResource')

router.get('/api/list-hid-queda-dagua-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidQuedaDaguaL = new HidQuedaDaguaLResource(req, res)
  return await rec_HidQuedaDaguaL.getRepresentation()
})
router.get('/api/list-hid-queda-dagua-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidQuedaDaguaL = new HidQuedaDaguaLResource(req, res)
  return await rec_HidQuedaDaguaL.getRepresentationGivenParameters()
})
router.head('/api/list-hid-queda-dagua-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidQuedaDaguaL = new HidQuedaDaguaLResource(req, res)
  return await rec_HidQuedaDaguaL.head()
})
router.head('/api/list-hid-queda-dagua-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidQuedaDaguaL = new HidQuedaDaguaLResource(req, res)
  return await rec_HidQuedaDaguaL.headGivenParameters()
})
router.options('/api/list-hid-queda-dagua-l/:id([0-9]+)', async (req, res)=> {
  const rec_HidQuedaDaguaL = new HidQuedaDaguaLResource(req, res)
  return await rec_HidQuedaDaguaL.options()
})
router.options('/api/list-hid-queda-dagua-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidQuedaDaguaL = new HidQuedaDaguaLResource(req, res)
  return await rec_HidQuedaDaguaL.optionsGivenParameters()
})
router.get('/api/list-hid-queda-dagua-l/', async (req, res)=> {
  const rec_col_HidQuedaDaguaL = new HidQuedaDaguaLCollectionResource(req, res)
  return await rec_col_HidQuedaDaguaL.getRepresentation()
})
router.get('/api/list-hid-queda-dagua-l/*', async (req, res)=> {
  const rec_col_HidQuedaDaguaL = new HidQuedaDaguaLCollectionResource(req, res)
  return await rec_col_HidQuedaDaguaL.getRepresentationGivenParameters()
})
router.head('/api/list-hid-queda-dagua-l/', async (req, res)=> {
  const rec_col_HidQuedaDaguaL = new HidQuedaDaguaLCollectionResource(req, res)
  return await rec_col_HidQuedaDaguaL.head()
})
router.head('/api/list-hid-queda-dagua-l/*', async (req, res)=> {
  const rec_col_HidQuedaDaguaL = new HidQuedaDaguaLCollectionResource(req, res)
  return await rec_col_HidQuedaDaguaL.headGivenParameters()
})
router.options('/api/list-hid-queda-dagua-l/', async (req, res)=> {
  const rec_col_HidQuedaDaguaL = new HidQuedaDaguaLCollectionResource(req, res)
  return await rec_col_HidQuedaDaguaL.options()
})
router.options('/api/list-hid-queda-dagua-l/*', async (req, res)=> {
  const rec_col_HidQuedaDaguaL = new HidQuedaDaguaLCollectionResource(req, res)
  return await rec_col_HidQuedaDaguaL.optionsGivenParameters()
})
module.exports = router