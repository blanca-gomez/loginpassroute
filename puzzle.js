// Snippets de código para poder componer el programa

//Usado?: SI
  const middlewares = require('./middlewares');
//--- Explicación:

// Guarda en la variable middleware el módulo importado del archivo middlewares.js
// -------------------------------------------------------------------------------------

//Usado?: SI
const bodyParser = require('body-parser');
//--- Explicación:
// Importar modulo de terceros de Node.js "middleware que parsea los datos de la request"
// -------------------------------------------------------------------------------------

//Usado?: SI
const session = require('express-session');
//--- Explicación:
// Importar modulo de terceros de Node.js "middleare que maneja las sesiones de usuario"
// -------------------------------------------------------------------------------------

//Usado?: SI
const express = require('express');
//--- Explicación:
//Importar módulo express
// -------------------------------------------------------------------------------------

//Usado?: SI
const bodyParser = require('body-parser');
//--- Explicación:
// Importar modulo de terceros de Node.js "middleware que parsea los datos de la request"
// -------------------------------------------------------------------------------------

//Usado?: SI
const session = require('express-session');
//--- Explicación:
// Importar modulo de terceros de Node.js "middleare que maneja las sesiones de usuario"
// -------------------------------------------------------------------------------------

//Usado?: SI
const dotenv = require('dotenv');
//--- Explicación:
// Importar modulo de terceros de Node.js "middleare que maneja las variables de entorno" 
// -------------------------------------------------------------------------------------

//Usado?: SI 
const middlewares = require('./middlewares');
//--- Explicación:
// Guarda en la variable middleware el módulo importado del archivo middlewares.js
// -------------------------------------------------------------------------------------

//Usado?: SI
const routes = require('./routes');
//--- Explicación:
// Guarda en la variable middleware el módulo importado del archivo routes.js
// -------------------------------------------------------------------------------------

//Usado?: SI
dotenv.config();
//--- Explicación:
//Llmar al método config para acceder a la variable de entorno.
// -------------------------------------------------------------------------------------

//Usado?: SI
const app = express();
//--- Explicación:
// Declarar en app la inicialización del express
// -------------------------------------------------------------------------------------

//Usado?: SI
const PORT = 4000;
//--- Explicación:
// Declaramos la variable PORT
// -------------------------------------------------------------------------------------

//Usado?: SI
const dotenv = require('dotenv');
//--- Explicación:
// Importar modulo de terceros de Node.js "middleare que maneja las variables de entorno" 
// -------------------------------------------------------------------------------------

//Usado?: SI
dotenv.config();
//--- Explicación:
//Llamar al método config para acceder a la variable de entorno.
// -------------------------------------------------------------------------------------

//Usado?: SI
middlewares.setupApp(app);
//--- Explicación: 
// Ejecutar el metodo setupApp con el express de app.
// -------------------------------------------------------------------------------------

//Usado?:SI
routes.setup(app);
//--- Explicación: 
//Declarar una ruta con el método setup con el express de app.
// -------------------------------------------------------------------------------------

//Usado?: SI
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: 
//middleware que valida la palabra secreta con un condicional y sino te manda al root 
// con el parametro error = 1  
// -------------------------------------------------------------------------------------


//Usado?: SI
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: 
//Función des del root y declara mensaje de error si lo hubiera y manda a profile si
// hubiera palabra secreta en la session 
// -------------------------------------------------------------------------------------


//Usado?: SI
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: 
//Envia DOM de la página de inicio
// -------------------------------------------------------------------------------------

//Usado?: SI
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación: 
// Función con el express del app que parsea con la libreria querystring y declara variables
// en session
// -------------------------------------------------------------------------------------

//Usado?:SI
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
//Hace un middleware desde profile con un post y manda el DOM
// -------------------------------------------------------------------------------------

//Usado?: SI
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 
//Declara el middelware que parsea con la libreria querystring
// -------------------------------------------------------------------------------------

//Usado?:SI
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 
//Declaramos sesión con el método session().
// -------------------------------------------------------------------------------------

//Usado?: SI
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 
//Declaramos la escucha del express, con el port declarado previamente.
// -------------------------------------------------------------------------------------

//Usado?: SI
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 
//middleware para verificar si tenemos la palabra secreta, y  sino redirect con error 2.
// -------------------------------------------------------------------------------------


//Usado?:SI
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
//Hace un middleware desde profile con un get y manda el DOM
// -------------------------------------------------------------------------------------


//Usado?: SI
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 
// Ruta de post des de logout "destruyendo" sesion con un control de error o redirect al root.
// -------------------------------------------------------------------------------------

//Usado?: SI
module.exports = {
  setup,
};
//--- Explicación:
//Exportar módulo setup
// -------------------------------------------------------------------------------------

//Usado?: SI
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:
//Exporta los middlewares
// -------------------------------------------------------------------------------------

