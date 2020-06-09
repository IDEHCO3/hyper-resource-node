export {};
const express = require('express')
const router = express.Router()

const { LimUnidadeConservacaoNaoSnucAResource, LimUnidadeConservacaoNaoSnucACollectionResource} = require('./../resource/LimUnidadeConservacaoNaoSnucAResource')

router.get('/api/list-lim-unidade-conservacao-nao-snuc-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucAResource(req, res)
  return await rec_LimUnidadeConservacaoNaoSnucA.getRepresentation()
})
router.get('/api/list-lim-unidade-conservacao-nao-snuc-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucAResource(req, res)
  return await rec_LimUnidadeConservacaoNaoSnucA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-unidade-conservacao-nao-snuc-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucAResource(req, res)
  return await rec_LimUnidadeConservacaoNaoSnucA.head()
})
router.head('/api/list-lim-unidade-conservacao-nao-snuc-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucAResource(req, res)
  return await rec_LimUnidadeConservacaoNaoSnucA.headGivenParameters()
})
router.options('/api/list-lim-unidade-conservacao-nao-snuc-a/:id([0-9]+)', async (req, res)=> {
  const rec_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucAResource(req, res)
  return await rec_LimUnidadeConservacaoNaoSnucA.options()
})
router.options('/api/list-lim-unidade-conservacao-nao-snuc-a/:id([0-9]+)/*', async (req, res)=> {
  const rec_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucAResource(req, res)
  return await rec_LimUnidadeConservacaoNaoSnucA.optionsGivenParameters()
})
router.get('/api/list-lim-unidade-conservacao-nao-snuc-a/', async (req, res)=> {
  const rec_col_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucACollectionResource(req, res)
  return await rec_col_LimUnidadeConservacaoNaoSnucA.getRepresentation()
})
router.get('/api/list-lim-unidade-conservacao-nao-snuc-a/*', async (req, res)=> {
  const rec_col_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucACollectionResource(req, res)
  return await rec_col_LimUnidadeConservacaoNaoSnucA.getRepresentationGivenParameters()
})
router.head('/api/list-lim-unidade-conservacao-nao-snuc-a/', async (req, res)=> {
  const rec_col_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucACollectionResource(req, res)
  return await rec_col_LimUnidadeConservacaoNaoSnucA.head()
})
router.head('/api/list-lim-unidade-conservacao-nao-snuc-a/*', async (req, res)=> {
  const rec_col_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucACollectionResource(req, res)
  return await rec_col_LimUnidadeConservacaoNaoSnucA.headGivenParameters()
})
router.options('/api/list-lim-unidade-conservacao-nao-snuc-a/', async (req, res)=> {
  const rec_col_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucACollectionResource(req, res)
  return await rec_col_LimUnidadeConservacaoNaoSnucA.options()
})
router.options('/api/list-lim-unidade-conservacao-nao-snuc-a/*', async (req, res)=> {
  const rec_col_LimUnidadeConservacaoNaoSnucA = new LimUnidadeConservacaoNaoSnucACollectionResource(req, res)
  return await rec_col_LimUnidadeConservacaoNaoSnucA.optionsGivenParameters()
})
module.exports = router