const express = require('express');
const controller = require('./controller');

const setup = (app) => {
  const apiRouter = express.Router();

  //
  // TODO
  //
  // apiRouter にAPIルートとハンドラーを設定する
  //
  apiRouter.get('/products', controller.show);
  app.use('/api', apiRouter);
};

module.exports = setup;
