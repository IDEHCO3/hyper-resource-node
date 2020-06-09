export {};
const express = require('express')
const router = express.Router()

const { RelCurvaNivelLResource, RelCurvaNivelLCollectionResource} = require('./../resource/RelCurvaNivelLResource')

router.get('/api/list-rel-curva-nivel-l/:id([0-9]+)', async (req, res)=> {
  const rec_RelCurvaNivelL = new RelCurvaNivelLResource(req, res)
  return await rec_RelCurvaNivelL.getRepresentation()
})
router.get('/api/list-rel-curva-nivel-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelCurvaNivelL = new RelCurvaNivelLResource(req, res)
  return await rec_RelCurvaNivelL.getRepresentationGivenParameters()
})
router.head('/api/list-rel-curva-nivel-l/:id([0-9]+)', async (req, res)=> {
  const rec_RelCurvaNivelL = new RelCurvaNivelLResource(req, res)
  return await rec_RelCurvaNivelL.head()
})
router.head('/api/list-rel-curva-nivel-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelCurvaNivelL = new RelCurvaNivelLResource(req, res)
  return await rec_RelCurvaNivelL.headGivenParameters()
})
router.options('/api/list-rel-curva-nivel-l/:id([0-9]+)', async (req, res)=> {
  const rec_RelCurvaNivelL = new RelCurvaNivelLResource(req, res)
  return await rec_RelCurvaNivelL.options()
})
router.options('/api/list-rel-curva-nivel-l/:id([0-9]+)/*', async (req, res)=> {
  const rec_RelCurvaNivelL = new RelCurvaNivelLResource(req, res)
  return await rec_RelCurvaNivelL.optionsGivenParameters()
})
router.get('/api/list-rel-curva-nivel-l/', async (req, res)=> {
  const rec_col_RelCurvaNivelL = new RelCurvaNivelLCollectionResource(req, res)
  return await rec_col_RelCurvaNivelL.getRepresentation()
})
router.get('/api/list-rel-curva-nivel-l/*', async (req, res)=> {
  const rec_col_RelCurvaNivelL = new RelCurvaNivelLCollectionResource(req, res)
  return await rec_col_RelCurvaNivelL.getRepresentationGivenParameters()
})
router.head('/api/list-rel-curva-nivel-l/', async (req, res)=> {
  const rec_col_RelCurvaNivelL = new RelCurvaNivelLCollectionResource(req, res)
  return await rec_col_RelCurvaNivelL.head()
})
router.head('/api/list-rel-curva-nivel-l/*', async (req, res)=> {
  const rec_col_RelCurvaNivelL = new RelCurvaNivelLCollectionResource(req, res)
  return await rec_col_RelCurvaNivelL.headGivenParameters()
})
router.options('/api/list-rel-curva-nivel-l/', async (req, res)=> {
  const rec_col_RelCurvaNivelL = new RelCurvaNivelLCollectionResource(req, res)
  return await rec_col_RelCurvaNivelL.options()
})
router.options('/api/list-rel-curva-nivel-l/*', async (req, res)=> {
  const rec_col_RelCurvaNivelL = new RelCurvaNivelLCollectionResource(req, res)
  return await rec_col_RelCurvaNivelL.optionsGivenParameters()
})
module.exports = router