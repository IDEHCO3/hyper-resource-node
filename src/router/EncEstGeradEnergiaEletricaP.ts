export {};
const express = require('express')
const router = express.Router()

const { EncEstGeradEnergiaEletricaPResource, EncEstGeradEnergiaEletricaPCollectionResource} = require('./../resource/EncEstGeradEnergiaEletricaPResource')

router.get('/api/list-enc-est-gerad-energia-eletrica-p/:id([0-9]+)', async (req, res)=> {
  const rec_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPResource(req, res)
  return await rec_EncEstGeradEnergiaEletricaP.getRepresentation()
})
router.get('/api/list-enc-est-gerad-energia-eletrica-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPResource(req, res)
  return await rec_EncEstGeradEnergiaEletricaP.getRepresentationGivenParameters()
})
router.head('/api/list-enc-est-gerad-energia-eletrica-p/:id([0-9]+)', async (req, res)=> {
  const rec_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPResource(req, res)
  return await rec_EncEstGeradEnergiaEletricaP.head()
})
router.head('/api/list-enc-est-gerad-energia-eletrica-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPResource(req, res)
  return await rec_EncEstGeradEnergiaEletricaP.headGivenParameters()
})
router.options('/api/list-enc-est-gerad-energia-eletrica-p/:id([0-9]+)', async (req, res)=> {
  const rec_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPResource(req, res)
  return await rec_EncEstGeradEnergiaEletricaP.options()
})
router.options('/api/list-enc-est-gerad-energia-eletrica-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPResource(req, res)
  return await rec_EncEstGeradEnergiaEletricaP.optionsGivenParameters()
})
router.get('/api/list-enc-est-gerad-energia-eletrica-p/', async (req, res)=> {
  const rec_col_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPCollectionResource(req, res)
  return await rec_col_EncEstGeradEnergiaEletricaP.getRepresentation()
})
router.get('/api/list-enc-est-gerad-energia-eletrica-p/*', async (req, res)=> {
  const rec_col_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPCollectionResource(req, res)
  return await rec_col_EncEstGeradEnergiaEletricaP.getRepresentationGivenParameters()
})
router.head('/api/list-enc-est-gerad-energia-eletrica-p/', async (req, res)=> {
  const rec_col_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPCollectionResource(req, res)
  return await rec_col_EncEstGeradEnergiaEletricaP.head()
})
router.head('/api/list-enc-est-gerad-energia-eletrica-p/*', async (req, res)=> {
  const rec_col_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPCollectionResource(req, res)
  return await rec_col_EncEstGeradEnergiaEletricaP.headGivenParameters()
})
router.options('/api/list-enc-est-gerad-energia-eletrica-p/', async (req, res)=> {
  const rec_col_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPCollectionResource(req, res)
  return await rec_col_EncEstGeradEnergiaEletricaP.options()
})
router.options('/api/list-enc-est-gerad-energia-eletrica-p/*', async (req, res)=> {
  const rec_col_EncEstGeradEnergiaEletricaP = new EncEstGeradEnergiaEletricaPCollectionResource(req, res)
  return await rec_col_EncEstGeradEnergiaEletricaP.optionsGivenParameters()
})
module.exports = router