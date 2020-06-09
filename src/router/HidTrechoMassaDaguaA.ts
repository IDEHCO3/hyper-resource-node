export {};
const express = require('express')
const router = express.Router()

const { HidTrechoMassaDaguaAResource, HidTrechoMassaDaguaACollectionResource} = require('./../resource/HidTrechoMassaDaguaAResource')

router.get('/api/list-hid-trecho-massa-dagua-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaAResource(req, res)
  return await rec_HidTrechoMassaDaguaA.getRepresentation()
})
router.get('/api/list-hid-trecho-massa-dagua-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaAResource(req, res)
  return await rec_HidTrechoMassaDaguaA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-trecho-massa-dagua-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaAResource(req, res)
  return await rec_HidTrechoMassaDaguaA.head()
})
router.head('/api/list-hid-trecho-massa-dagua-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaAResource(req, res)
  return await rec_HidTrechoMassaDaguaA.headGivenParameters()
})
router.options('/api/list-hid-trecho-massa-dagua-a/:id([0-9]+)', async (req, res)=> {
  const rec_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaAResource(req, res)
  return await rec_HidTrechoMassaDaguaA.options()
})
router.options('/api/list-hid-trecho-massa-dagua-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaAResource(req, res)
  return await rec_HidTrechoMassaDaguaA.optionsGivenParameters()
})
router.get('/api/list-hid-trecho-massa-dagua-a/', async (req, res)=> {
  const rec_col_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaACollectionResource(req, res)
  return await rec_col_HidTrechoMassaDaguaA.getRepresentation()
})
router.get('/api/list-hid-trecho-massa-dagua-a/*', async (req, res)=> {
  const rec_col_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaACollectionResource(req, res)
  return await rec_col_HidTrechoMassaDaguaA.getRepresentationGivenParameters()
})
router.head('/api/list-hid-trecho-massa-dagua-a/', async (req, res)=> {
  const rec_col_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaACollectionResource(req, res)
  return await rec_col_HidTrechoMassaDaguaA.head()
})
router.head('/api/list-hid-trecho-massa-dagua-a/*', async (req, res)=> {
  const rec_col_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaACollectionResource(req, res)
  return await rec_col_HidTrechoMassaDaguaA.headGivenParameters()
})
router.options('/api/list-hid-trecho-massa-dagua-a/', async (req, res)=> {
  const rec_col_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaACollectionResource(req, res)
  return await rec_col_HidTrechoMassaDaguaA.options()
})
router.options('/api/list-hid-trecho-massa-dagua-a/*', async (req, res)=> {
  const rec_col_HidTrechoMassaDaguaA = new HidTrechoMassaDaguaACollectionResource(req, res)
  return await rec_col_HidTrechoMassaDaguaA.optionsGivenParameters()
})
module.exports = router