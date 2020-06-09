export {};
const express = require('express')
const router = express.Router()

const { EncHidreletricaPResource, EncHidreletricaPCollectionResource} = require('./../resource/EncHidreletricaPResource')

router.get('/api/list-enc-hidreletrica-p/:id([0-9]+)', async (req, res)=> {
  const rec_EncHidreletricaP = new EncHidreletricaPResource(req, res)
  return await rec_EncHidreletricaP.getRepresentation()
})
router.get('/api/list-enc-hidreletrica-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EncHidreletricaP = new EncHidreletricaPResource(req, res)
  return await rec_EncHidreletricaP.getRepresentationGivenParameters()
})
router.head('/api/list-enc-hidreletrica-p/:id([0-9]+)', async (req, res)=> {
  const rec_EncHidreletricaP = new EncHidreletricaPResource(req, res)
  return await rec_EncHidreletricaP.head()
})
router.head('/api/list-enc-hidreletrica-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EncHidreletricaP = new EncHidreletricaPResource(req, res)
  return await rec_EncHidreletricaP.headGivenParameters()
})
router.options('/api/list-enc-hidreletrica-p/:id([0-9]+)', async (req, res)=> {
  const rec_EncHidreletricaP = new EncHidreletricaPResource(req, res)
  return await rec_EncHidreletricaP.options()
})
router.options('/api/list-enc-hidreletrica-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EncHidreletricaP = new EncHidreletricaPResource(req, res)
  return await rec_EncHidreletricaP.optionsGivenParameters()
})
router.get('/api/list-enc-hidreletrica-p/', async (req, res)=> {
  const rec_col_EncHidreletricaP = new EncHidreletricaPCollectionResource(req, res)
  return await rec_col_EncHidreletricaP.getRepresentation()
})
router.get('/api/list-enc-hidreletrica-p/*', async (req, res)=> {
  const rec_col_EncHidreletricaP = new EncHidreletricaPCollectionResource(req, res)
  return await rec_col_EncHidreletricaP.getRepresentationGivenParameters()
})
router.head('/api/list-enc-hidreletrica-p/', async (req, res)=> {
  const rec_col_EncHidreletricaP = new EncHidreletricaPCollectionResource(req, res)
  return await rec_col_EncHidreletricaP.head()
})
router.head('/api/list-enc-hidreletrica-p/*', async (req, res)=> {
  const rec_col_EncHidreletricaP = new EncHidreletricaPCollectionResource(req, res)
  return await rec_col_EncHidreletricaP.headGivenParameters()
})
router.options('/api/list-enc-hidreletrica-p/', async (req, res)=> {
  const rec_col_EncHidreletricaP = new EncHidreletricaPCollectionResource(req, res)
  return await rec_col_EncHidreletricaP.options()
})
router.options('/api/list-enc-hidreletrica-p/*', async (req, res)=> {
  const rec_col_EncHidreletricaP = new EncHidreletricaPCollectionResource(req, res)
  return await rec_col_EncHidreletricaP.optionsGivenParameters()
})
module.exports = router