import csvtojson from 'csvtojson';

async function converterCSV(pathCSV) {
  //Converter para JSON:
  const json = await csvtojson().fromFile(pathCSV);

  //Reduzir propriedades:
  let filtroDados = json.map(
    ({ _id, SigTipoGeracao, NomEmpreendimento, MdaPotenciaOutorgadaKw }) => ({
      _id,
      SigTipoGeracao,
      NomEmpreendimento,
      MdaPotenciaOutorgadaKw,
    })
  );

  //Converter propriedade de Potência para Número:
  filtroDados.forEach(
    (usina) =>
      (usina.MdaPotenciaOutorgadaKw = Number(usina.MdaPotenciaOutorgadaKw))
  );

  //Modificar nome da propriedade _id:
  filtroDados = filtroDados.map((usina) => {
    return {
      idUsina: usina._id,
      SigTipoGeracao: usina.SigTipoGeracao,
      NomEmpreendimento: usina.NomEmpreendimento,
      MdaPotenciaOutorgadaKw: usina.MdaPotenciaOutorgadaKw,
    };
  });

  return filtroDados;
}

export default converterCSV;
