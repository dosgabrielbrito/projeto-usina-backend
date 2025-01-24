import { usinas, logs } from '../models/index.js';
import converterCSV from '../utils/csvToJson.js';

class UsinasController {
  static getUsinas = async (req, res, next) => {
    try {
      const usinasBusca = await usinas.find();

      res.status(200).send(usinasBusca);
      next();
    } catch (erro) {
      next(erro);
    }
  };

  static getMaioresUsinas = async (req, res, next) => {
    try {
      const usinasBusca = await usinas.find();
      const usinasRanking = req.params.numero;

      const usinasResultado = usinasBusca
        .sort((a, b) => b.MdaPotenciaOutorgadaKw - a.MdaPotenciaOutorgadaKw)
        .slice(0, usinasRanking);

      res.status(200).send(usinasResultado);
      next();
    } catch (erro) {
      next(erro);
    }
  };

  static getDataAtualizacao = async (req, res, next) => {
    try {
      const dataBusca = await logs.find({ idData: '1' });
      res.status(200).send(dataBusca);
      next();
    } catch (erro) {
      next(erro);
    }
  };

  static patchTodasUsinas = async (req, res, next) => {
    try {
      //Versão Curta do CSV:
      const pathCSV = './dataTest/usinas-curta.csv';
      //const pathCSV = './dataTest/usinas-longa.csv';

      //Deletar dados anteriores:
      await usinas.deleteMany({});

      //Ler CSV, converter para JSON e filtrar colunas:
      const usinasAtualizacao = await converterCSV(pathCSV);

      //Inserir novos dados:
      await usinas.insertMany(usinasAtualizacao);

      //Data de Atualização:
      const now = new Date();
      const dataAtualizacao = await logs.updateOne(
        { id: '1' },
        { data: now },
        { upsert: true }
      );

      //Retorno API
      res.status(200).send({ dataAtualizacao, usinasAtualizacao });
      next();
    } catch (erro) {
      next(erro);
    }
  };
}

export default UsinasController;
