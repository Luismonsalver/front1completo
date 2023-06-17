CREATE DATABASE frontendbd;

use frontendbd;

CREATE TABLE formulario (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mayorEdad BOOLEAN NOT NULL,
  ligaFav VARCHAR(255) NOT NULL,
  opcion VARCHAR(255) NOT NULL,
  noticiasCorreo BOOLEAN NOT NULL,
  fechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;

describe formulario;