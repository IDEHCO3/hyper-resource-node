export {};
const express = require('express')
const router = express.Router()

const { LimPaisAResource, LimPaisACollectionResource} = require('./../resource/LimPaisAResource')

router.get('/api/list-lim-pais-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimPaisA = new LimPaisAResource(req, res)
  return await rec_LimPaisA.getRepresentation()
})
router.get('/api/list-lim-pais-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimPaisA = new LimPaisAResource(req, res)
  return await rec_LimPaisA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-pais-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimPaisA = new LimPaisAResource(req, res)
  return await rec_LimPaisA.head()
})
router.head('/api/list-lim-pais-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimPaisA = new LimPaisAResource(req, res)
  return await rec_LimPaisA.headGivenParameters()
})
router.options('/api/list-lim-pais-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimPaisA = new LimPaisAResource(req, res)
  return await rec_LimPaisA.options()
})
router.options('/api/list-lim-pais-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimPaisA = new LimPaisAResource(req, res)
  return await rec_LimPaisA.optionsGivenParameters()
})
router.get('/api/list-lim-pais-a/', async (req, res)=> {
  const rec_col_LimPaisA = new LimPaisACollectionResource(req, res)
  return await rec_col_LimPaisA.getRepresentation()
})
router.get('/api/list-lim-pais-a/*', async (req, res)=> {
  const rec_col_LimPaisA = new LimPaisACollectionResource(req, res)
  return await rec_col_LimPaisA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-pais-a/', async (req, res)=> {
  const rec_col_LimPaisA = new LimPaisACollectionResource(req, res)
  return await rec_col_LimPaisA.head()
})
router.head('/api/list-lim-pais-a/*', async (req, res)=> {
  const rec_col_LimPaisA = new LimPaisACollectionResource(req, res)
  return await rec_col_LimPaisA.headGivenParameters()
})
router.options('/api/list-lim-pais-a/', async (req, res)=> {
  const rec_col_LimPaisA = new LimPaisACollectionResource(req, res)
  return await rec_col_LimPaisA.options()
})
router.options('/api/list-lim-pais-a/*', async (req, res)=> {
  const rec_col_LimPaisA = new LimPaisACollectionResource(req, res)
  return await rec_col_LimPaisA.optionsGivenParameters()
})
module.exports = router