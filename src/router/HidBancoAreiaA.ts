export {};
const express = require('express')
const router = express.Router()

const { HidBancoAreiaAResource, HidBancoAreiaACollectionResource} = require('./../resource/HidBancoAreiaAResource')

router.get('/api/list-hid-banco-areia-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidBancoAreiaA = new HidBancoAreiaAResource(req, res)
  return await rec_HidBancoAreiaA.getRepresentation()
})
router.get('/api/list-hid-banco-areia-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidBancoAreiaA = new HidBancoAreiaAResource(req, res)
  return await rec_HidBancoAreiaA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-banco-areia-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidBancoAreiaA = new HidBancoAreiaAResource(req, res)
  return await rec_HidBancoAreiaA.head()
})
router.head('/api/list-hid-banco-areia-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidBancoAreiaA = new HidBancoAreiaAResource(req, res)
  return await rec_HidBancoAreiaA.headGivenParameters()
})
router.options('/api/list-hid-banco-areia-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidBancoAreiaA = new HidBancoAreiaAResource(req, res)
  return await rec_HidBancoAreiaA.options()
})
router.options('/api/list-hid-banco-areia-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidBancoAreiaA = new HidBancoAreiaAResource(req, res)
  return await rec_HidBancoAreiaA.optionsGivenParameters()
})
router.get('/api/list-hid-banco-areia-a/', async (req, res)=> {
  const rec_col_HidBancoAreiaA = new HidBancoAreiaACollectionResource(req, res)
  return await rec_col_HidBancoAreiaA.getRepresentation()
})
router.get('/api/list-hid-banco-areia-a/*', async (req, res)=> {
  const rec_col_HidBancoAreiaA = new HidBancoAreiaACollectionResource(req, res)
  return await rec_col_HidBancoAreiaA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-banco-areia-a/', async (req, res)=> {
  const rec_col_HidBancoAreiaA = new HidBancoAreiaACollectionResource(req, res)
  return await rec_col_HidBancoAreiaA.head()
})
router.head('/api/list-hid-banco-areia-a/*', async (req, res)=> {
  const rec_col_HidBancoAreiaA = new HidBancoAreiaACollectionResource(req, res)
  return await rec_col_HidBancoAreiaA.headGivenParameters()
})
router.options('/api/list-hid-banco-areia-a/', async (req, res)=> {
  const rec_col_HidBancoAreiaA = new HidBancoAreiaACollectionResource(req, res)
  return await rec_col_HidBancoAreiaA.options()
})
router.options('/api/list-hid-banco-areia-a/*', async (req, res)=> {
  const rec_col_HidBancoAreiaA = new HidBancoAreiaACollectionResource(req, res)
  return await rec_col_HidBancoAreiaA.optionsGivenParameters()
})
module.exports = router