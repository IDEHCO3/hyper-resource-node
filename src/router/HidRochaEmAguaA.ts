export {};
const express = require('express')
const router = express.Router()

const { HidRochaEmAguaAResource, HidRochaEmAguaACollectionResource} = require('./../resource/HidRochaEmAguaAResource')

router.get('/api/list-hid-rocha-em-agua-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidRochaEmAguaA = new HidRochaEmAguaAResource(req, res)
  return await rec_HidRochaEmAguaA.getRepresentation()
})
router.get('/api/list-hid-rocha-em-agua-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidRochaEmAguaA = new HidRochaEmAguaAResource(req, res)
  return await rec_HidRochaEmAguaA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-rocha-em-agua-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidRochaEmAguaA = new HidRochaEmAguaAResource(req, res)
  return await rec_HidRochaEmAguaA.head()
})
router.head('/api/list-hid-rocha-em-agua-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidRochaEmAguaA = new HidRochaEmAguaAResource(req, res)
  return await rec_HidRochaEmAguaA.headGivenParameters()
})
router.options('/api/list-hid-rocha-em-agua-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidRochaEmAguaA = new HidRochaEmAguaAResource(req, res)
  return await rec_HidRochaEmAguaA.options()
})
router.options('/api/list-hid-rocha-em-agua-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidRochaEmAguaA = new HidRochaEmAguaAResource(req, res)
  return await rec_HidRochaEmAguaA.optionsGivenParameters()
})
router.get('/api/list-hid-rocha-em-agua-a/', async (req, res)=> {
  const rec_col_HidRochaEmAguaA = new HidRochaEmAguaACollectionResource(req, res)
  return await rec_col_HidRochaEmAguaA.getRepresentation()
})
router.get('/api/list-hid-rocha-em-agua-a/*', async (req, res)=> {
  const rec_col_HidRochaEmAguaA = new HidRochaEmAguaACollectionResource(req, res)
  return await rec_col_HidRochaEmAguaA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-rocha-em-agua-a/', async (req, res)=> {
  const rec_col_HidRochaEmAguaA = new HidRochaEmAguaACollectionResource(req, res)
  return await rec_col_HidRochaEmAguaA.head()
})
router.head('/api/list-hid-rocha-em-agua-a/*', async (req, res)=> {
  const rec_col_HidRochaEmAguaA = new HidRochaEmAguaACollectionResource(req, res)
  return await rec_col_HidRochaEmAguaA.headGivenParameters()
})
router.options('/api/list-hid-rocha-em-agua-a/', async (req, res)=> {
  const rec_col_HidRochaEmAguaA = new HidRochaEmAguaACollectionResource(req, res)
  return await rec_col_HidRochaEmAguaA.options()
})
router.options('/api/list-hid-rocha-em-agua-a/*', async (req, res)=> {
  const rec_col_HidRochaEmAguaA = new HidRochaEmAguaACollectionResource(req, res)
  return await rec_col_HidRochaEmAguaA.optionsGivenParameters()
})
module.exports = router