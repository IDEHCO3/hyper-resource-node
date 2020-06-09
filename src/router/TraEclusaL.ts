export {};
const express = require('express')
const router = express.Router()

const { TraEclusaLResource, TraEclusaLCollectionResource} = require('./../resource/TraEclusaLResource')

router.get('/api/list-tra-eclusa-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraEclusaL = new TraEclusaLResource(req, res)
  return await rec_TraEclusaL.getRepresentation()
})
router.get('/api/list-tra-eclusa-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEclusaL = new TraEclusaLResource(req, res)
  return await rec_TraEclusaL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-eclusa-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraEclusaL = new TraEclusaLResource(req, res)
  return await rec_TraEclusaL.head()
})
router.head('/api/list-tra-eclusa-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEclusaL = new TraEclusaLResource(req, res)
  return await rec_TraEclusaL.headGivenParameters()
})
router.options('/api/list-tra-eclusa-l/:id([0-9]+)', async (req, res)=> {
  const rec_TraEclusaL = new TraEclusaLResource(req, res)
  return await rec_TraEclusaL.options()
})
router.options('/api/list-tra-eclusa-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_TraEclusaL = new TraEclusaLResource(req, res)
  return await rec_TraEclusaL.optionsGivenParameters()
})
router.get('/api/list-tra-eclusa-l/', async (req, res)=> {
  const rec_col_TraEclusaL = new TraEclusaLCollectionResource(req, res)
  return await rec_col_TraEclusaL.getRepresentation()
})
router.get('/api/list-tra-eclusa-l/*', async (req, res)=> {
  const rec_col_TraEclusaL = new TraEclusaLCollectionResource(req, res)
  return await rec_col_TraEclusaL.getRepresentationGivenParameters()
})
router.head('/api/list-tra-eclusa-l/', async (req, res)=> {
  const rec_col_TraEclusaL = new TraEclusaLCollectionResource(req, res)
  return await rec_col_TraEclusaL.head()
})
router.head('/api/list-tra-eclusa-l/*', async (req, res)=> {
  const rec_col_TraEclusaL = new TraEclusaLCollectionResource(req, res)
  return await rec_col_TraEclusaL.headGivenParameters()
})
router.options('/api/list-tra-eclusa-l/', async (req, res)=> {
  const rec_col_TraEclusaL = new TraEclusaLCollectionResource(req, res)
  return await rec_col_TraEclusaL.options()
})
router.options('/api/list-tra-eclusa-l/*', async (req, res)=> {
  const rec_col_TraEclusaL = new TraEclusaLCollectionResource(req, res)
  return await rec_col_TraEclusaL.optionsGivenParameters()
})
module.exports = router