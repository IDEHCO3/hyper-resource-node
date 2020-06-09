export {};
const express = require('express')
const router = express.Router()

const { HidIlhaAResource, HidIlhaACollectionResource} = require('./../resource/HidIlhaAResource')

router.get('/api/list-hid-ilha-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidIlhaA = new HidIlhaAResource(req, res)
  return await rec_HidIlhaA.getRepresentation()
})
router.get('/api/list-hid-ilha-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidIlhaA = new HidIlhaAResource(req, res)
  return await rec_HidIlhaA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-ilha-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidIlhaA = new HidIlhaAResource(req, res)
  return await rec_HidIlhaA.head()
})
router.head('/api/list-hid-ilha-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidIlhaA = new HidIlhaAResource(req, res)
  return await rec_HidIlhaA.headGivenParameters()
})
router.options('/api/list-hid-ilha-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidIlhaA = new HidIlhaAResource(req, res)
  return await rec_HidIlhaA.options()
})
router.options('/api/list-hid-ilha-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidIlhaA = new HidIlhaAResource(req, res)
  return await rec_HidIlhaA.optionsGivenParameters()
})
router.get('/api/list-hid-ilha-a/', async (req, res)=> {
  const rec_col_HidIlhaA = new HidIlhaACollectionResource(req, res)
  return await rec_col_HidIlhaA.getRepresentation()
})
router.get('/api/list-hid-ilha-a/*', async (req, res)=> {
  const rec_col_HidIlhaA = new HidIlhaACollectionResource(req, res)
  return await rec_col_HidIlhaA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-ilha-a/', async (req, res)=> {
  const rec_col_HidIlhaA = new HidIlhaACollectionResource(req, res)
  return await rec_col_HidIlhaA.head()
})
router.head('/api/list-hid-ilha-a/*', async (req, res)=> {
  const rec_col_HidIlhaA = new HidIlhaACollectionResource(req, res)
  return await rec_col_HidIlhaA.headGivenParameters()
})
router.options('/api/list-hid-ilha-a/', async (req, res)=> {
  const rec_col_HidIlhaA = new HidIlhaACollectionResource(req, res)
  return await rec_col_HidIlhaA.options()
})
router.options('/api/list-hid-ilha-a/*', async (req, res)=> {
  const rec_col_HidIlhaA = new HidIlhaACollectionResource(req, res)
  return await rec_col_HidIlhaA.optionsGivenParameters()
})
module.exports = router