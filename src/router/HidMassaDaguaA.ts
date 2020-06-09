export {};
const express = require('express')
const router = express.Router()

const { HidMassaDaguaAResource, HidMassaDaguaACollectionResource} = require('./../resource/HidMassaDaguaAResource')

router.get('/api/list-hid-massa-dagua-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidMassaDaguaA = new HidMassaDaguaAResource(req, res)
  return await rec_HidMassaDaguaA.getRepresentation()
})
router.get('/api/list-hid-massa-dagua-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidMassaDaguaA = new HidMassaDaguaAResource(req, res)
  return await rec_HidMassaDaguaA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-massa-dagua-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidMassaDaguaA = new HidMassaDaguaAResource(req, res)
  return await rec_HidMassaDaguaA.head()
})
router.head('/api/list-hid-massa-dagua-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidMassaDaguaA = new HidMassaDaguaAResource(req, res)
  return await rec_HidMassaDaguaA.headGivenParameters()
})
router.options('/api/list-hid-massa-dagua-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidMassaDaguaA = new HidMassaDaguaAResource(req, res)
  return await rec_HidMassaDaguaA.options()
})
router.options('/api/list-hid-massa-dagua-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidMassaDaguaA = new HidMassaDaguaAResource(req, res)
  return await rec_HidMassaDaguaA.optionsGivenParameters()
})
router.get('/api/list-hid-massa-dagua-a/', async (req, res)=> {
  const rec_col_HidMassaDaguaA = new HidMassaDaguaACollectionResource(req, res)
  return await rec_col_HidMassaDaguaA.getRepresentation()
})
router.get('/api/list-hid-massa-dagua-a/*', async (req, res)=> {
  const rec_col_HidMassaDaguaA = new HidMassaDaguaACollectionResource(req, res)
  return await rec_col_HidMassaDaguaA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-massa-dagua-a/', async (req, res)=> {
  const rec_col_HidMassaDaguaA = new HidMassaDaguaACollectionResource(req, res)
  return await rec_col_HidMassaDaguaA.head()
})
router.head('/api/list-hid-massa-dagua-a/*', async (req, res)=> {
  const rec_col_HidMassaDaguaA = new HidMassaDaguaACollectionResource(req, res)
  return await rec_col_HidMassaDaguaA.headGivenParameters()
})
router.options('/api/list-hid-massa-dagua-a/', async (req, res)=> {
  const rec_col_HidMassaDaguaA = new HidMassaDaguaACollectionResource(req, res)
  return await rec_col_HidMassaDaguaA.options()
})
router.options('/api/list-hid-massa-dagua-a/*', async (req, res)=> {
  const rec_col_HidMassaDaguaA = new HidMassaDaguaACollectionResource(req, res)
  return await rec_col_HidMassaDaguaA.optionsGivenParameters()
})
module.exports = router