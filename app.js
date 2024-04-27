const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

const routes = require('./routes');
const middlewares = require('./middlewares');

app.use(bodyParser.urlencoded({ extended: true }));

// middlewares.setupApp(app); Creemos que deberia de ir aqui pero no detecta middlwares 
routes.setup(app);



app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });
