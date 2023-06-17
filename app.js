//Requerimientos

const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const conexion = require('express-myconnection')

const formularioRoutes = require('./routes/formulario')
const indexRouter = require('./routes/index');
const messiRouter = require('./routes/messi');
const verstappenRouter = require('./routes/verstappen');

//Asignación del puerto

app.set('port', process.env.PORT || 3000)

//Motor de vistas EJS

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

///Middleware a ejecutar antes de las peticiones

app.use(morgan('dev')); 

app.use(conexion(mysql, { //Conexión con la base de datos
    host: 'localhost',
    user: 'admin',
    password: 'password',
    port: 3306,
    database: 'frontendbd'

}, 'single'));

app.use(express.urlencoded({extended: false})); //Convertir la consulta URL en objeto JS

//Rutas de las páginas
app.use('/formulario', formularioRoutes);
app.use('/', indexRouter);
app.use('/messi', messiRouter);
app.use('/verstappen', verstappenRouter);

//Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Mensaje por consola para comprobar que el servidor está activo
app.listen(3000, () => {
    console.log('Servidor activo en el puerto 3000')
})

