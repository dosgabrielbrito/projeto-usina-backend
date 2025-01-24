const fs = require('fs');

function buscaTodasUsinas() {
  const usinas = JSON.parse(fs.readFileSync('./dataTest/usinas-db.json'));

  const usinasDados = usinas.map(
    ({ _id, SigTipoGeracao, NomEmpreendimento, MdaPotenciaOutorgadaKw }) => ({
      _id,
      SigTipoGeracao,
      NomEmpreendimento,
      MdaPotenciaOutorgadaKw,
    })
  );

  return usinasDados;
}

function montaRankingPotencia(ranking) {
  const usinas = JSON.parse(fs.readFileSync('./dataTest/usinas-db.json'));

  const usinasRanking = usinas
    .sort((a, b) => b.MdaPotenciaOutorgadaKw - a.MdaPotenciaOutorgadaKw)
    .slice(0, ranking);

  const usinasDados = usinasRanking.map(
    ({ _id, SigTipoGeracao, NomEmpreendimento, MdaPotenciaOutorgadaKw }) => ({
      _id,
      SigTipoGeracao,
      NomEmpreendimento,
      MdaPotenciaOutorgadaKw,
    })
  );

  return usinasDados;
}

function buscaDataAtualizacao() {
  const dataAtualizacao = JSON.parse(
    fs.readFileSync('./dataTest/data-atualizacao.json')
  );
  return dataAtualizacao;
}

function atualizarUsinas() {
  // const usinasAtualizacao = JSON.parse(
  //   fs.readFileSync('./dataTest/usinas-nova.json')
  // );
  const usinasAtualizacao = JSON.parse(
    fs.readFileSync('./dataTest/usinas-original.json')
  );
  fs.writeFileSync(
    './dataTest/usinas-db.json',
    JSON.stringify(usinasAtualizacao)
  );

  const usinasDados = usinasAtualizacao.map(
    ({ _id, SigTipoGeracao, NomEmpreendimento, MdaPotenciaOutorgadaKw }) => ({
      _id,
      SigTipoGeracao,
      NomEmpreendimento,
      MdaPotenciaOutorgadaKw,
    })
  );

  const now = new Date();

  fs.writeFileSync(
    './dataTest/data-atualizacao.json',
    JSON.stringify({ dataAtualizacao: now })
  );

  return { dataAtualizacao: now };
}

module.exports = {
  buscaTodasUsinas,
  montaRankingPotencia,
  buscaDataAtualizacao,
  atualizarUsinas,
};
