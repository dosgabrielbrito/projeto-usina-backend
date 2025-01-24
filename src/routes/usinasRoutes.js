import express from 'express';
import UsinasController from '../controllers/usinasController.js';

const router = express.Router();

router
  .get('/usinas', UsinasController.getUsinas)
  .get('/usinas/maiores/:numero', UsinasController.getMaioresUsinas)
  .get('/usinas/atualizacao', UsinasController.getDataAtualizacao)
  .patch('/usinas', UsinasController.patchTodasUsinas);

export default router;
