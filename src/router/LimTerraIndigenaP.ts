export {};
const express = require('express')
const router = express.Router()

const { LimTerraIndigenaPResource, LimTerraIndigenaPCollectionResource} = require('./../resource/LimTerraIndigenaPResource')

router.get('/api/list-lim-terra-indigena-p/:id([0-9]+)', async (req, res)=> {
  const rec_LimTerraIndigenaP = new LimTerraIndigenaPResource(req, res)
  return await rec_LimTerraIndigenaP.getRepresentation()
})
router.get('/api/list-lim-terra-indigena-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimTerraIndigenaP = new LimTerraIndigenaPResource(req, res)
  return await rec_LimTerraIndigenaP.getRepresentationGivenParameters()
})
router.head('/api/list-lim-terra-indigena-p/:id([0-9]+)', async (req, res)=> {
  const rec_LimTerraIndigenaP = new LimTerraIndigenaPResource(req, res)
  return await rec_LimTerraIndigenaP.head()
})
router.head('/api/list-lim-terra-indigena-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimTerraIndigenaP = new LimTerraIndigenaPResource(req, res)
  return await rec_LimTerraIndigenaP.headGivenParameters()
})
router.options('/api/list-lim-terra-indigena-p/:id([0-9]+)', async (req, res)=> {
  const rec_LimTerraIndigenaP = new LimTerraIndigenaPResource(req, res)
  return await rec_LimTerraIndigenaP.options()
})
router.options('/api/list-lim-terra-indigena-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimTerraIndigenaP = new LimTerraIndigenaPResource(req, res)
  return await rec_LimTerraIndigenaP.optionsGivenParameters()
})
router.get('/api/list-lim-terra-indigena-p/', async (req, res)=> {
  const rec_col_LimTerraIndigenaP = new LimTerraIndigenaPCollectionResource(req, res)
  return await rec_col_LimTerraIndigenaP.getRepresentation()
})
router.get('/api/list-lim-terra-indigena-p/*', async (req, res)=> {
  const rec_col_LimTerraIndigenaP = new LimTerraIndigenaPCollectionResource(req, res)
  return await rec_col_LimTerraIndigenaP.getRepresentationGivenParameters()
})
router.head('/api/list-lim-terra-indigena-p/', async (req, res)=> {
  const rec_col_LimTerraIndigenaP = new LimTerraIndigenaPCollectionResource(req, res)
  return await rec_col_LimTerraIndigenaP.head()
})
router.head('/api/list-lim-terra-indigena-p/*', async (req, res)=> {
  const rec_col_LimTerraIndigenaP = new LimTerraIndigenaPCollectionResource(req, res)
  return await rec_col_LimTerraIndigenaP.headGivenParameters()
})
router.options('/api/list-lim-terra-indigena-p/', async (req, res)=> {
  const rec_col_LimTerraIndigenaP = new LimTerraIndigenaPCollectionResource(req, res)
  return await rec_col_LimTerraIndigenaP.options()
})
router.options('/api/list-lim-terra-indigena-p/*', async (req, res)=> {
  const rec_col_LimTerraIndigenaP = new LimTerraIndigenaPCollectionResource(req, res)
  return await rec_col_LimTerraIndigenaP.optionsGivenParameters()
})
module.exports = router