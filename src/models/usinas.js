import mongoose from 'mongoose';

const usinaSchema = new mongoose.Schema(
  {
    _id: { type: String },
    idUsina: { type: String },
    SigTipoGeracao: { type: String },
    NomEmpreendimento: { type: String },
    MdaPotenciaOutorgadaKw: { type: Number },
  },
  {
    versionKey: false,
  }
);

const usinas = mongoose.model('usinas', usinaSchema);

export default usinas;
