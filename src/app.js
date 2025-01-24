import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import cors from 'cors';

//Setar conexão com o MongoDB:
db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso');
});

//Iniciar Instância do Express:
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
routes(app);

export default app;
