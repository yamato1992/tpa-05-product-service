const express = require('express');
const controller = require('./controller');

const setup = (app) => {
  const apiRouter = express.Router();

  apiRouter.get('/products', controller.showProducts);
  apiRouter.get('/price:ids?', controller.calcTotalPrice);
  app.use('/api', apiRouter);
};

module.exports = setup;
