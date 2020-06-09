export {};
const express = require('express')
const router = express.Router()

const { LocAldeiaIndigenaPResource, LocAldeiaIndigenaPCollectionResource} = require('./../resource/LocAldeiaIndigenaPResource')

router.get('/api/list-loc-aldeia-indigena-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocAldeiaIndigenaP = new LocAldeiaIndigenaPResource(req, res)
  return await rec_LocAldeiaIndigenaP.getRepresentation()
})
router.get('/api/list-loc-aldeia-indigena-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocAldeiaIndigenaP = new LocAldeiaIndigenaPResource(req, res)
  return await rec_LocAldeiaIndigenaP.getRepresentationGivenParameters()
})
router.head('/api/list-loc-aldeia-indigena-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocAldeiaIndigenaP = new LocAldeiaIndigenaPResource(req, res)
  return await rec_LocAldeiaIndigenaP.head()
})
router.head('/api/list-loc-aldeia-indigena-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocAldeiaIndigenaP = new LocAldeiaIndigenaPResource(req, res)
  return await rec_LocAldeiaIndigenaP.headGivenParameters()
})
router.options('/api/list-loc-aldeia-indigena-p/:id([0-9]+)', async (req, res)=> {
  const rec_LocAldeiaIndigenaP = new LocAldeiaIndigenaPResource(req, res)
  return await rec_LocAldeiaIndigenaP.options()
})
router.options('/api/list-loc-aldeia-indigena-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_LocAldeiaIndigenaP = new LocAldeiaIndigenaPResource(req, res)
  return await rec_LocAldeiaIndigenaP.optionsGivenParameters()
})
router.get('/api/list-loc-aldeia-indigena-p/', async (req, res)=> {
  const rec_col_LocAldeiaIndigenaP = new LocAldeiaIndigenaPCollectionResource(req, res)
  return await rec_col_LocAldeiaIndigenaP.getRepresentation()
})
router.get('/api/list-loc-aldeia-indigena-p/*', async (req, res)=> {
  const rec_col_LocAldeiaIndigenaP = new LocAldeiaIndigenaPCollectionResource(req, res)
  return await rec_col_LocAldeiaIndigenaP.getRepresentationGivenParameters()
})
router.head('/api/list-loc-aldeia-indigena-p/', async (req, res)=> {
  const rec_col_LocAldeiaIndigenaP = new LocAldeiaIndigenaPCollectionResource(req, res)
  return await rec_col_LocAldeiaIndigenaP.head()
})
router.head('/api/list-loc-aldeia-indigena-p/*', async (req, res)=> {
  const rec_col_LocAldeiaIndigenaP = new LocAldeiaIndigenaPCollectionResource(req, res)
  return await rec_col_LocAldeiaIndigenaP.headGivenParameters()
})
router.options('/api/list-loc-aldeia-indigena-p/', async (req, res)=> {
  const rec_col_LocAldeiaIndigenaP = new LocAldeiaIndigenaPCollectionResource(req, res)
  return await rec_col_LocAldeiaIndigenaP.options()
})
router.options('/api/list-loc-aldeia-indigena-p/*', async (req, res)=> {
  const rec_col_LocAldeiaIndigenaP = new LocAldeiaIndigenaPCollectionResource(req, res)
  return await rec_col_LocAldeiaIndigenaP.optionsGivenParameters()
})
module.exports = router