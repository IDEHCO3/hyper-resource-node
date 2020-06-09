export {};
const express = require('express')
const router = express.Router()

const { LimTerraIndigenaAResource, LimTerraIndigenaACollectionResource} = require('./../resource/LimTerraIndigenaAResource')

router.get('/api/list-lim-terra-indigena-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimTerraIndigenaA = new LimTerraIndigenaAResource(req, res)
  return await rec_LimTerraIndigenaA.getRepresentation()
})
router.get('/api/list-lim-terra-indigena-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimTerraIndigenaA = new LimTerraIndigenaAResource(req, res)
  return await rec_LimTerraIndigenaA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-terra-indigena-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimTerraIndigenaA = new LimTerraIndigenaAResource(req, res)
  return await rec_LimTerraIndigenaA.head()
})
router.head('/api/list-lim-terra-indigena-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimTerraIndigenaA = new LimTerraIndigenaAResource(req, res)
  return await rec_LimTerraIndigenaA.headGivenParameters()
})
router.options('/api/list-lim-terra-indigena-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimTerraIndigenaA = new LimTerraIndigenaAResource(req, res)
  return await rec_LimTerraIndigenaA.options()
})
router.options('/api/list-lim-terra-indigena-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimTerraIndigenaA = new LimTerraIndigenaAResource(req, res)
  return await rec_LimTerraIndigenaA.optionsGivenParameters()
})
router.get('/api/list-lim-terra-indigena-a/', async (req, res)=> {
  const rec_col_LimTerraIndigenaA = new LimTerraIndigenaACollectionResource(req, res)
  return await rec_col_LimTerraIndigenaA.getRepresentation()
})
router.get('/api/list-lim-terra-indigena-a/*', async (req, res)=> {
  const rec_col_LimTerraIndigenaA = new LimTerraIndigenaACollectionResource(req, res)
  return await rec_col_LimTerraIndigenaA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-terra-indigena-a/', async (req, res)=> {
  const rec_col_LimTerraIndigenaA = new LimTerraIndigenaACollectionResource(req, res)
  return await rec_col_LimTerraIndigenaA.head()
})
router.head('/api/list-lim-terra-indigena-a/*', async (req, res)=> {
  const rec_col_LimTerraIndigenaA = new LimTerraIndigenaACollectionResource(req, res)
  return await rec_col_LimTerraIndigenaA.headGivenParameters()
})
router.options('/api/list-lim-terra-indigena-a/', async (req, res)=> {
  const rec_col_LimTerraIndigenaA = new LimTerraIndigenaACollectionResource(req, res)
  return await rec_col_LimTerraIndigenaA.options()
})
router.options('/api/list-lim-terra-indigena-a/*', async (req, res)=> {
  const rec_col_LimTerraIndigenaA = new LimTerraIndigenaACollectionResource(req, res)
  return await rec_col_LimTerraIndigenaA.optionsGivenParameters()
})
module.exports = router