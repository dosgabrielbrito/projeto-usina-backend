import app from './src/app.js';
import 'dotenv/config';

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
