export {};
const express = require('express')
const router = express.Router()

const { RelCurvaBatimetricaLResource, RelCurvaBatimetricaLCollectionResource} = require('./../resource/RelCurvaBatimetricaLResource')

router.get('/api/list-rel-curva-batimetrica-l/:id([0-9]+)', async (req, res)=> {
  const rec_RelCurvaBatimetricaL = new RelCurvaBatimetricaLResource(req, res)
  return await rec_RelCurvaBatimetricaL.getRepresentation()
})
router.get('/api/list-rel-curva-batimetrica-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelCurvaBatimetricaL = new RelCurvaBatimetricaLResource(req, res)
  return await rec_RelCurvaBatimetricaL.getRepresentationGivenParameters()
})
router.head('/api/list-rel-curva-batimetrica-l/:id([0-9]+)', async (req, res)=> {
  const rec_RelCurvaBatimetricaL = new RelCurvaBatimetricaLResource(req, res)
  return await rec_RelCurvaBatimetricaL.head()
})
router.head('/api/list-rel-curva-batimetrica-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelCurvaBatimetricaL = new RelCurvaBatimetricaLResource(req, res)
  return await rec_RelCurvaBatimetricaL.headGivenParameters()
})
router.options('/api/list-rel-curva-batimetrica-l/:id([0-9]+)', async (req, res)=> {
  const rec_RelCurvaBatimetricaL = new RelCurvaBatimetricaLResource(req, res)
  return await rec_RelCurvaBatimetricaL.options()
})
router.options('/api/list-rel-curva-batimetrica-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelCurvaBatimetricaL = new RelCurvaBatimetricaLResource(req, res)
  return await rec_RelCurvaBatimetricaL.optionsGivenParameters()
})
router.get('/api/list-rel-curva-batimetrica-l/', async (req, res)=> {
  const rec_col_RelCurvaBatimetricaL = new RelCurvaBatimetricaLCollectionResource(req, res)
  return await rec_col_RelCurvaBatimetricaL.getRepresentation()
})
router.get('/api/list-rel-curva-batimetrica-l/*', async (req, res)=> {
  const rec_col_RelCurvaBatimetricaL = new RelCurvaBatimetricaLCollectionResource(req, res)
  return await rec_col_RelCurvaBatimetricaL.getRepresentationGivenParameters()
})
router.head('/api/list-rel-curva-batimetrica-l/', async (req, res)=> {
  const rec_col_RelCurvaBatimetricaL = new RelCurvaBatimetricaLCollectionResource(req, res)
  return await rec_col_RelCurvaBatimetricaL.head()
})
router.head('/api/list-rel-curva-batimetrica-l/*', async (req, res)=> {
  const rec_col_RelCurvaBatimetricaL = new RelCurvaBatimetricaLCollectionResource(req, res)
  return await rec_col_RelCurvaBatimetricaL.headGivenParameters()
})
router.options('/api/list-rel-curva-batimetrica-l/', async (req, res)=> {
  const rec_col_RelCurvaBatimetricaL = new RelCurvaBatimetricaLCollectionResource(req, res)
  return await rec_col_RelCurvaBatimetricaL.options()
})
router.options('/api/list-rel-curva-batimetrica-l/*', async (req, res)=> {
  const rec_col_RelCurvaBatimetricaL = new RelCurvaBatimetricaLCollectionResource(req, res)
  return await rec_col_RelCurvaBatimetricaL.optionsGivenParameters()
})
module.exports = router