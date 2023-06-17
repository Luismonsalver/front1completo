var express = require('express');
var path = require('path');
var app = express();
var morgan = require('morgan');
var mysql = require('mysql');

var conexion = require('express-myconnection')


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

//PRUEBA
app.listen(3000, () => {
    console.log('El server está activo en el puerto 3000')
})

