export {};
const express = require('express')
const router = express.Router()

const { AdmEdifPubMilitarPResource, AdmEdifPubMilitarPCollectionResource} = require('./../resource/AdmEdifPubMilitarPResource')

router.get('/api/list-adm-edif-pub-militar-p/:id([0-9]+)', async (req, res)=> {
  const rec_AdmEdifPubMilitarP = new AdmEdifPubMilitarPResource(req, res)
  return await rec_AdmEdifPubMilitarP.getRepresentation()
})
router.get('/api/list-adm-edif-pub-militar-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_AdmEdifPubMilitarP = new AdmEdifPubMilitarPResource(req, res)
  return await rec_AdmEdifPubMilitarP.getRepresentationGivenParameters()
})
router.head('/api/list-adm-edif-pub-militar-p/:id([0-9]+)', async (req, res)=> {
  const rec_AdmEdifPubMilitarP = new AdmEdifPubMilitarPResource(req, res)
  return await rec_AdmEdifPubMilitarP.head()
})
router.head('/api/list-adm-edif-pub-militar-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_AdmEdifPubMilitarP = new AdmEdifPubMilitarPResource(req, res)
  return await rec_AdmEdifPubMilitarP.headGivenParameters()
})
router.options('/api/list-adm-edif-pub-militar-p/:id([0-9]+)', async (req, res)=> {
  const rec_AdmEdifPubMilitarP = new AdmEdifPubMilitarPResource(req, res)
  return await rec_AdmEdifPubMilitarP.options()
})
router.options('/api/list-adm-edif-pub-militar-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_AdmEdifPubMilitarP = new AdmEdifPubMilitarPResource(req, res)
  return await rec_AdmEdifPubMilitarP.optionsGivenParameters()
})
router.get('/api/list-adm-edif-pub-militar-p/', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarP = new AdmEdifPubMilitarPCollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarP.getRepresentation()
})
router.get('/api/list-adm-edif-pub-militar-p/*', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarP = new AdmEdifPubMilitarPCollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarP.getRepresentationGivenParameters()
})
router.head('/api/list-adm-edif-pub-militar-p/', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarP = new AdmEdifPubMilitarPCollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarP.head()
})
router.head('/api/list-adm-edif-pub-militar-p/*', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarP = new AdmEdifPubMilitarPCollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarP.headGivenParameters()
})
router.options('/api/list-adm-edif-pub-militar-p/', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarP = new AdmEdifPubMilitarPCollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarP.options()
})
router.options('/api/list-adm-edif-pub-militar-p/*', async (req, res)=> {
  const rec_col_AdmEdifPubMilitarP = new AdmEdifPubMilitarPCollectionResource(req, res)
  return await rec_col_AdmEdifPubMilitarP.optionsGivenParameters()
})
module.exports = router