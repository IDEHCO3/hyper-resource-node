export {};
const express = require('express')
const router = express.Router()

const { EncTermeletricaPResource, EncTermeletricaPCollectionResource} = require('./../resource/EncTermeletricaPResource')

router.get('/api/list-enc-termeletrica-p/:id([0-9]+)', async (req, res)=> {
  const rec_EncTermeletricaP = new EncTermeletricaPResource(req, res)
  return await rec_EncTermeletricaP.getRepresentation()
})
router.get('/api/list-enc-termeletrica-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EncTermeletricaP = new EncTermeletricaPResource(req, res)
  return await rec_EncTermeletricaP.getRepresentationGivenParameters()
})
router.head('/api/list-enc-termeletrica-p/:id([0-9]+)', async (req, res)=> {
  const rec_EncTermeletricaP = new EncTermeletricaPResource(req, res)
  return await rec_EncTermeletricaP.head()
})
router.head('/api/list-enc-termeletrica-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EncTermeletricaP = new EncTermeletricaPResource(req, res)
  return await rec_EncTermeletricaP.headGivenParameters()
})
router.options('/api/list-enc-termeletrica-p/:id([0-9]+)', async (req, res)=> {
  const rec_EncTermeletricaP = new EncTermeletricaPResource(req, res)
  return await rec_EncTermeletricaP.options()
})
router.options('/api/list-enc-termeletrica-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EncTermeletricaP = new EncTermeletricaPResource(req, res)
  return await rec_EncTermeletricaP.optionsGivenParameters()
})
router.get('/api/list-enc-termeletrica-p/', async (req, res)=> {
  const rec_col_EncTermeletricaP = new EncTermeletricaPCollectionResource(req, res)
  return await rec_col_EncTermeletricaP.getRepresentation()
})
router.get('/api/list-enc-termeletrica-p/*', async (req, res)=> {
  const rec_col_EncTermeletricaP = new EncTermeletricaPCollectionResource(req, res)
  return await rec_col_EncTermeletricaP.getRepresentationGivenParameters()
})
router.head('/api/list-enc-termeletrica-p/', async (req, res)=> {
  const rec_col_EncTermeletricaP = new EncTermeletricaPCollectionResource(req, res)
  return await rec_col_EncTermeletricaP.head()
})
router.head('/api/list-enc-termeletrica-p/*', async (req, res)=> {
  const rec_col_EncTermeletricaP = new EncTermeletricaPCollectionResource(req, res)
  return await rec_col_EncTermeletricaP.headGivenParameters()
})
router.options('/api/list-enc-termeletrica-p/', async (req, res)=> {
  const rec_col_EncTermeletricaP = new EncTermeletricaPCollectionResource(req, res)
  return await rec_col_EncTermeletricaP.options()
})
router.options('/api/list-enc-termeletrica-p/*', async (req, res)=> {
  const rec_col_EncTermeletricaP = new EncTermeletricaPCollectionResource(req, res)
  return await rec_col_EncTermeletricaP.optionsGivenParameters()
})
module.exports = router