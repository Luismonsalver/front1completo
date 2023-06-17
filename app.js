const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');

const conexion = require('express-myconnection')

const formularioRoutes = require('./routes/formulario')
const indexRouter = require('./routes/index');

//CONFIGURACIONES DEL SERVIDOR(BASICAS)

//Que use el puerto del sistema, de lo contrario que use el 3000

app.set('port', process.env.PORT || 3000)

//Asignar el motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

///MIDDLEWARE PARA EJECUTARSE ANTES DE LAS PETICIONES ANTES DE LOS USUARIOS

app.use(morgan('dev')); //Muestra mensajes por consola sencillos

app.use(conexion(mysql, {
    host: 'localhost',
    user: 'admin',
    password: 'password',
    port: 3306,
    database: 'frontendbd'

}, 'single')); ///Establecer conexión con MYSQL

app.use(express.urlencoded({extended: false}));

app.use('/', formularioRoutes);
app.use('/index', indexRouter);

app.use(express.static(path.join(__dirname, 'public')));

//PRUEBA
app.listen(3000, () => {
    console.log('El server está activo en el puerto 3000')
})

