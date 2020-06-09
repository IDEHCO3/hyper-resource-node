export {};
const express = require('express')
const router = express.Router()

const { HidTerrenoSujeitoInundacaoAResource, HidTerrenoSujeitoInundacaoACollectionResource} = require('./../resource/HidTerrenoSujeitoInundacaoAResource')

router.get('/api/list-hid-terreno-sujeito-inundacao-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoAResource(req, res)
  return await rec_HidTerrenoSujeitoInundacaoA.getRepresentation()
})
router.get('/api/list-hid-terreno-sujeito-inundacao-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoAResource(req, res)
  return await rec_HidTerrenoSujeitoInundacaoA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-terreno-sujeito-inundacao-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoAResource(req, res)
  return await rec_HidTerrenoSujeitoInundacaoA.head()
})
router.head('/api/list-hid-terreno-sujeito-inundacao-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoAResource(req, res)
  return await rec_HidTerrenoSujeitoInundacaoA.headGivenParameters()
})
router.options('/api/list-hid-terreno-sujeito-inundacao-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoAResource(req, res)
  return await rec_HidTerrenoSujeitoInundacaoA.options()
})
router.options('/api/list-hid-terreno-sujeito-inundacao-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoAResource(req, res)
  return await rec_HidTerrenoSujeitoInundacaoA.optionsGivenParameters()
})
router.get('/api/list-hid-terreno-sujeito-inundacao-a/', async (req, res)=> {
  const rec_col_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoACollectionResource(req, res)
  return await rec_col_HidTerrenoSujeitoInundacaoA.getRepresentation()
})
router.get('/api/list-hid-terreno-sujeito-inundacao-a/*', async (req, res)=> {
  const rec_col_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoACollectionResource(req, res)
  return await rec_col_HidTerrenoSujeitoInundacaoA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-terreno-sujeito-inundacao-a/', async (req, res)=> {
  const rec_col_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoACollectionResource(req, res)
  return await rec_col_HidTerrenoSujeitoInundacaoA.head()
})
router.head('/api/list-hid-terreno-sujeito-inundacao-a/*', async (req, res)=> {
  const rec_col_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoACollectionResource(req, res)
  return await rec_col_HidTerrenoSujeitoInundacaoA.headGivenParameters()
})
router.options('/api/list-hid-terreno-sujeito-inundacao-a/', async (req, res)=> {
  const rec_col_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoACollectionResource(req, res)
  return await rec_col_HidTerrenoSujeitoInundacaoA.options()
})
router.options('/api/list-hid-terreno-sujeito-inundacao-a/*', async (req, res)=> {
  const rec_col_HidTerrenoSujeitoInundacaoA = new HidTerrenoSujeitoInundacaoACollectionResource(req, res)
  return await rec_col_HidTerrenoSujeitoInundacaoA.optionsGivenParameters()
})
module.exports = router