export {};
const express = require('express')
const router = express.Router()

const { HidRecifeAResource, HidRecifeACollectionResource} = require('./../resource/HidRecifeAResource')

router.get('/api/list-hid-recife-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidRecifeA = new HidRecifeAResource(req, res)
  return await rec_HidRecifeA.getRepresentation()
})
router.get('/api/list-hid-recife-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidRecifeA = new HidRecifeAResource(req, res)
  return await rec_HidRecifeA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-recife-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidRecifeA = new HidRecifeAResource(req, res)
  return await rec_HidRecifeA.head()
})
router.head('/api/list-hid-recife-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidRecifeA = new HidRecifeAResource(req, res)
  return await rec_HidRecifeA.headGivenParameters()
})
router.options('/api/list-hid-recife-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidRecifeA = new HidRecifeAResource(req, res)
  return await rec_HidRecifeA.options()
})
router.options('/api/list-hid-recife-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidRecifeA = new HidRecifeAResource(req, res)
  return await rec_HidRecifeA.optionsGivenParameters()
})
router.get('/api/list-hid-recife-a/', async (req, res)=> {
  const rec_col_HidRecifeA = new HidRecifeACollectionResource(req, res)
  return await rec_col_HidRecifeA.getRepresentation()
})
router.get('/api/list-hid-recife-a/*', async (req, res)=> {
  const rec_col_HidRecifeA = new HidRecifeACollectionResource(req, res)
  return await rec_col_HidRecifeA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-recife-a/', async (req, res)=> {
  const rec_col_HidRecifeA = new HidRecifeACollectionResource(req, res)
  return await rec_col_HidRecifeA.head()
})
router.head('/api/list-hid-recife-a/*', async (req, res)=> {
  const rec_col_HidRecifeA = new HidRecifeACollectionResource(req, res)
  return await rec_col_HidRecifeA.headGivenParameters()
})
router.options('/api/list-hid-recife-a/', async (req, res)=> {
  const rec_col_HidRecifeA = new HidRecifeACollectionResource(req, res)
  return await rec_col_HidRecifeA.options()
})
router.options('/api/list-hid-recife-a/*', async (req, res)=> {
  const rec_col_HidRecifeA = new HidRecifeACollectionResource(req, res)
  return await rec_col_HidRecifeA.optionsGivenParameters()
})
module.exports = router