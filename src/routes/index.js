import express from 'express';
import usinas from './usinasRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'API Usinas' });
  });

  app.use(express.json(), usinas);
};

export default routes;
