export {};
const express = require('express')
const router = express.Router()

const { AdmPostoFiscalPResource, AdmPostoFiscalPCollectionResource} = require('./../resource/AdmPostoFiscalPResource')

router.get('/api/list-adm-posto-fiscal-p/:id([0-9]+)', async (req, res)=> {
  const rec_AdmPostoFiscalP = new AdmPostoFiscalPResource(req, res)
  return await rec_AdmPostoFiscalP.getRepresentation()
})
router.get('/api/list-adm-posto-fiscal-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_AdmPostoFiscalP = new AdmPostoFiscalPResource(req, res)
  return await rec_AdmPostoFiscalP.getRepresentationGivenParameters()
})
router.head('/api/list-adm-posto-fiscal-p/:id([0-9]+)', async (req, res)=> {
  const rec_AdmPostoFiscalP = new AdmPostoFiscalPResource(req, res)
  return await rec_AdmPostoFiscalP.head()
})
router.head('/api/list-adm-posto-fiscal-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_AdmPostoFiscalP = new AdmPostoFiscalPResource(req, res)
  return await rec_AdmPostoFiscalP.headGivenParameters()
})
router.options('/api/list-adm-posto-fiscal-p/:id([0-9]+)', async (req, res)=> {
  const rec_AdmPostoFiscalP = new AdmPostoFiscalPResource(req, res)
  return await rec_AdmPostoFiscalP.options()
})
router.options('/api/list-adm-posto-fiscal-p/:id([0-9]+)/*', async (req, res)=> {
  const rec_AdmPostoFiscalP = new AdmPostoFiscalPResource(req, res)
  return await rec_AdmPostoFiscalP.optionsGivenParameters()
})
router.get('/api/list-adm-posto-fiscal-p/', async (req, res)=> {
  const rec_col_AdmPostoFiscalP = new AdmPostoFiscalPCollectionResource(req, res)
  return await rec_col_AdmPostoFiscalP.getRepresentation()
})
router.get('/api/list-adm-posto-fiscal-p/*', async (req, res)=> {
  const rec_col_AdmPostoFiscalP = new AdmPostoFiscalPCollectionResource(req, res)
  return await rec_col_AdmPostoFiscalP.getRepresentationGivenParameters()
})
router.head('/api/list-adm-posto-fiscal-p/', async (req, res)=> {
  const rec_col_AdmPostoFiscalP = new AdmPostoFiscalPCollectionResource(req, res)
  return await rec_col_AdmPostoFiscalP.head()
})
router.head('/api/list-adm-posto-fiscal-p/*', async (req, res)=> {
  const rec_col_AdmPostoFiscalP = new AdmPostoFiscalPCollectionResource(req, res)
  return await rec_col_AdmPostoFiscalP.headGivenParameters()
})
router.options('/api/list-adm-posto-fiscal-p/', async (req, res)=> {
  const rec_col_AdmPostoFiscalP = new AdmPostoFiscalPCollectionResource(req, res)
  return await rec_col_AdmPostoFiscalP.options()
})
router.options('/api/list-adm-posto-fiscal-p/*', async (req, res)=> {
  const rec_col_AdmPostoFiscalP = new AdmPostoFiscalPCollectionResource(req, res)
  return await rec_col_AdmPostoFiscalP.optionsGivenParameters()
})
module.exports = router