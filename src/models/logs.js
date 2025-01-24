import mongoose from 'mongoose';

const logSchema = new mongoose.Schema(
  {
    idData: { type: String },
    data: { type: String },
  },
  {
    versionKey: false,
  }
);

const logs = mongoose.model('logs', logSchema);

export default logs;
