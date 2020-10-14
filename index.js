// Importar express
const express = require("express");

// Importar handlebars como template engine
//const exphbs = require("express-handlebars");

// Crear un servidor express
const app = express();

// Crear una ruta para /
// Información sobre los verbos HTTP
// https://developer.mozilla.org/es/docs/Web/HTTP/Methods
app.get("/", (req, res, next) => {
    res.send("Bienvenido al examen");
  });

/*app.get("/Ejercicio01", (req, res, next) => {
    res.render("Ejercicio01");
});*/

// Inicializar el servidor en un puerto en específico
app.listen(5000, () => {
    console.log("Servidor ejecutándose en el puerto 5000");
  });
