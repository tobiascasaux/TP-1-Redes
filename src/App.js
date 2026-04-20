const express = require('express')
require('dotenv').config();
const dispositivosRoutes = require('./routes/dispositivos.routes.js');
const logs = require('./middlewares/logs.js');
const authorization = require('./middlewares/authorization.js');

const app = express();
const PORT = process.env.PORT

app.use(express.json()); // convierte texto json a en un objeto
app.use(logs) // traemos la informacion de la peticion [metodo, ruta y tiempo]
app.use(authorization) // verifica que el header authorization sea correcto

app.use('/dispositivos', dispositivosRoutes) // busca las diferentes rutas de dispositivosRoutes en el "tema" de dispositivos


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});