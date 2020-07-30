const express = require('express');

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/', (request, response) => {
  response.send(`
    <html>
      <head>
        <title>API Node.js com Postgres</title>
      </head>
      <body style="margin:0;padding:0;background:#3e3B47;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <h1 style="color:#d9d9d9;margin:70px;">API Node.js com Postgres</h1>
        <h2 style="color:#d9d9d9;">Recurso: /users</h3>
      </body>
    </html>
  `);
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;