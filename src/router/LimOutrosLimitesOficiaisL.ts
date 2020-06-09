export {};
const express = require('express')
const router = express.Router()

const { LimOutrosLimitesOficiaisLResource, LimOutrosLimitesOficiaisLCollectionResource} = require('./../resource/LimOutrosLimitesOficiaisLResource')

router.get('/api/list-lim-outros-limites-oficiais-l/:id([0-9]+)', async (req, res)=> {
  const rec_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLResource(req, res)
  return await rec_LimOutrosLimitesOficiaisL.getRepresentation()
})
router.get('/api/list-lim-outros-limites-oficiais-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLResource(req, res)
  return await rec_LimOutrosLimitesOficiaisL.getRepresentationGivenParameters()
})
router.head('/api/list-lim-outros-limites-oficiais-l/:id([0-9]+)', async (req, res)=> {
  const rec_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLResource(req, res)
  return await rec_LimOutrosLimitesOficiaisL.head()
})
router.head('/api/list-lim-outros-limites-oficiais-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLResource(req, res)
  return await rec_LimOutrosLimitesOficiaisL.headGivenParameters()
})
router.options('/api/list-lim-outros-limites-oficiais-l/:id([0-9]+)', async (req, res)=> {
  const rec_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLResource(req, res)
  return await rec_LimOutrosLimitesOficiaisL.options()
})
router.options('/api/list-lim-outros-limites-oficiais-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLResource(req, res)
  return await rec_LimOutrosLimitesOficiaisL.optionsGivenParameters()
})
router.get('/api/list-lim-outros-limites-oficiais-l/', async (req, res)=> {
  const rec_col_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLCollectionResource(req, res)
  return await rec_col_LimOutrosLimitesOficiaisL.getRepresentation()
})
router.get('/api/list-lim-outros-limites-oficiais-l/*', async (req, res)=> {
  const rec_col_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLCollectionResource(req, res)
  return await rec_col_LimOutrosLimitesOficiaisL.getRepresentationGivenParameters()
})
router.head('/api/list-lim-outros-limites-oficiais-l/', async (req, res)=> {
  const rec_col_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLCollectionResource(req, res)
  return await rec_col_LimOutrosLimitesOficiaisL.head()
})
router.head('/api/list-lim-outros-limites-oficiais-l/*', async (req, res)=> {
  const rec_col_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLCollectionResource(req, res)
  return await rec_col_LimOutrosLimitesOficiaisL.headGivenParameters()
})
router.options('/api/list-lim-outros-limites-oficiais-l/', async (req, res)=> {
  const rec_col_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLCollectionResource(req, res)
  return await rec_col_LimOutrosLimitesOficiaisL.options()
})
router.options('/api/list-lim-outros-limites-oficiais-l/*', async (req, res)=> {
  const rec_col_LimOutrosLimitesOficiaisL = new LimOutrosLimitesOficiaisLCollectionResource(req, res)
  return await rec_col_LimOutrosLimitesOficiaisL.optionsGivenParameters()
})
module.exports = router