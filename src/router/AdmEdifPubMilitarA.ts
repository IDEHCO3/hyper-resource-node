export {};
const express = require('express')
const router = express.Router()

const { AdmEdifPubMilitarAResource, AdmEdifPubMilitarACollectionResource} = require('./../resource/AdmEdifPubMilitarAResource')

router.get('/api/list-adm-edif-pub-militar-a/:id([0-9]+)', async (req, res)=> {
  const rec_AdmEdifPubMilitarA = new AdmEdifPubMilitarAResource(req, res)
  return await rec_AdmEdifPubMilitarA.getRepresentation()
})
router.get('/api/list-adm-edif-pub-militar-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_AdmEdifPubMilitarA = new AdmEdifPubMilitarAResource(req, res)
  return await rec_AdmEdifPubMilitarA.getRepresentationGivenParameters()
})
router.head('/api/list-adm-edif-pub-militar-a/:id([0-9]+)', async (req, res)=> {
  const rec_AdmEdifPubMilitarA = new AdmEdifPubMilitarAResource(req, res)
  return await rec_AdmEdifPubMilitarA.head()
})
router.head('/api/list-adm-edif-pub-militar-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_AdmEdifPubMilitarA = new AdmEdifPubMilitarAResource(req, res)
  return await rec_AdmEdifPubMilitarA.headGivenParameters()
})
router.options('/api/list-adm-edif-pub-militar-a/:id([0-9]+)', async (req, res)=> {
  const rec_AdmEdifPubMilitarA = new AdmEdifPubMilitarAResource(req, res)
  return await rec_AdmEdifPubMilitarA.options()
})
router.options('/api/list-adm-edif-pub-militar-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_AdmEdifPubMilitarA = new AdmEdifPubMilitarAResource(req, res)
  return await rec_AdmEdifPubMilitarA.optionsGivenParameters()
})
router.get('/api/list-adm-edif-pub-militar-a/', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarA = new AdmEdifPubMilitarACollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarA.getRepresentation()
})
router.get('/api/list-adm-edif-pub-militar-a/*', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarA = new AdmEdifPubMilitarACollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarA.getRepresentationGivenParameters()
})
router.head('/api/list-adm-edif-pub-militar-a/', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarA = new AdmEdifPubMilitarACollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarA.head()
})
router.head('/api/list-adm-edif-pub-militar-a/*', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarA = new AdmEdifPubMilitarACollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarA.headGivenParameters()
})
router.options('/api/list-adm-edif-pub-militar-a/', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarA = new AdmEdifPubMilitarACollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarA.options()
})
router.options('/api/list-adm-edif-pub-militar-a/*', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarA = new AdmEdifPubMilitarACollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarA.optionsGivenParameters()
})
module.exports = router