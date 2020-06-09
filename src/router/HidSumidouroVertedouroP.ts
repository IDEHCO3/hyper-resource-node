export {};
const express = require('express')
const router = express.Router()

const { HidSumidouroVertedouroPResource, HidSumidouroVertedouroPCollectionResource} = require('./../resource/HidSumidouroVertedouroPResource')

router.get('/api/list-hid-sumidouro-vertedouro-p/:id([0-9]+)', async (req, res)=> {
  const rec_HidSumidouroVertedouroP = new HidSumidouroVertedouroPResource(req, res)
  return await rec_HidSumidouroVertedouroP.getRepresentation()
})
router.get('/api/list-hid-sumidouro-vertedouro-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidSumidouroVertedouroP = new HidSumidouroVertedouroPResource(req, res)
  return await rec_HidSumidouroVertedouroP.getRepresentationGivenParameters()
})
router.head('/api/list-hid-sumidouro-vertedouro-p/:id([0-9]+)', async (req, res)=> {
  const rec_HidSumidouroVertedouroP = new HidSumidouroVertedouroPResource(req, res)
  return await rec_HidSumidouroVertedouroP.head()
})
router.head('/api/list-hid-sumidouro-vertedouro-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidSumidouroVertedouroP = new HidSumidouroVertedouroPResource(req, res)
  return await rec_HidSumidouroVertedouroP.headGivenParameters()
})
router.options('/api/list-hid-sumidouro-vertedouro-p/:id([0-9]+)', async (req, res)=> {
  const rec_HidSumidouroVertedouroP = new HidSumidouroVertedouroPResource(req, res)
  return await rec_HidSumidouroVertedouroP.options()
})
router.options('/api/list-hid-sumidouro-vertedouro-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidSumidouroVertedouroP = new HidSumidouroVertedouroPResource(req, res)
  return await rec_HidSumidouroVertedouroP.optionsGivenParameters()
})
router.get('/api/list-hid-sumidouro-vertedouro-p/', async (req, res)=> {
  const rec_col_HidSumidouroVertedouroP = new HidSumidouroVertedouroPCollectionResource(req, res)
  return await rec_col_HidSumidouroVertedouroP.getRepresentation()
})
router.get('/api/list-hid-sumidouro-vertedouro-p/*', async (req, res)=> {
  const rec_col_HidSumidouroVertedouroP = new HidSumidouroVertedouroPCollectionResource(req, res)
  return await rec_col_HidSumidouroVertedouroP.getRepresentationGivenParameters()
})
router.head('/api/list-hid-sumidouro-vertedouro-p/', async (req, res)=> {
  const rec_col_HidSumidouroVertedouroP = new HidSumidouroVertedouroPCollectionResource(req, res)
  return await rec_col_HidSumidouroVertedouroP.head()
})
router.head('/api/list-hid-sumidouro-vertedouro-p/*', async (req, res)=> {
  const rec_col_HidSumidouroVertedouroP = new HidSumidouroVertedouroPCollectionResource(req, res)
  return await rec_col_HidSumidouroVertedouroP.headGivenParameters()
})
router.options('/api/list-hid-sumidouro-vertedouro-p/', async (req, res)=> {
  const rec_col_HidSumidouroVertedouroP = new HidSumidouroVertedouroPCollectionResource(req, res)
  return await rec_col_HidSumidouroVertedouroP.options()
})
router.options('/api/list-hid-sumidouro-vertedouro-p/*', async (req, res)=> {
  const rec_col_HidSumidouroVertedouroP = new HidSumidouroVertedouroPCollectionResource(req, res)
  return await rec_col_HidSumidouroVertedouroP.optionsGivenParameters()
})
module.exports = router