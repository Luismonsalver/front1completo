1. Instalamos la siguiente lista de programas: Visual Studio Code, Node.js, XAMPP

2. Vamos al siguiente link: https://github.com/Luismonsalver/frontendbd y descargamos la carpeta de nuestro programa desde el botón de Code/Local y luego a Download ZIP (Hay que tomar en cuenta que existe otro repositorio creado con el link: https://github.com/Luismonsalver/actividad3frontend, el cual contiene únicamente todo lo relacionado al Front End)

3. Una vez descargado el ZIP, lo extraemos y obtenemos la carpeta frontendbd

4. Teniendo XAMPP instalado, vamos a XAMPP y abrimos los puertos de Apache y MySQL con los botones de START, al haberse activado los puertos y servicios se verán en color verde y nos notificará en consola el cambio de estatus y que se encuentra activo, entonces le damos a ADMIN en el servicio de MySQL y así nos abrirá el phpmyadmin (Que nos permite administrar nuestras Bases de Datos)

5. Vamos a necesitar crear un usuario desde PHPMyadmin, nos vamos a Cuentas de Usuario, nos saldrá agregar cuentas de usuario (en la parte inferior) y le damos a ese botón, colocaremos los siguientes datos: usuario (admin); nombre de host (local, localhost); contraseña (password); y le damos en privilegios globales a seleccionar todo, luego de esto le damos a continuar

6. Lo siguiente es crear nuestra base de datos, la barra horizontal del medio hay un botón de “Importar”, le damos a ese botón e importamos el archivo de nombre frontendbd.sql, que se encuentra dentro de la carpeta frontendbd que hemos descargado, luego de esto nos aparecerá nuestra base de datos, y podemos observarlo desde la barra vertical izquierda, además de mandarnos a la base de datos, mostrándonos que hay una tabla creada

7. Abrimos Visual Studio Code y seleccionamos en Archivo/Abrir Carpeta, luego de esto seleccionamos la carpeta de frontendbd, de esta manera podrán ver el código del proyecto y podrán inicializarlo

8. Lo siguiente es crear una terminal desde Visual Studio Code desde Terminal/Nuevo Terminal/

9. Inicializamos el servidor con el comando npm run start

10. Ahora podemos ir desde nuestro navegador a localhost:3000 que mostrará la página de inicio o landing page, en la cual podremos navegar por otras páginas

11. Las otras páginas por las que podremos navegar son localhost:3000/formulario, localhost:3000/messi y localhost:3000/verstappen. Las dos últimas mencionadas aparecen en la sección general de noticias, ambas aparecen en la primera fila

12. Para ir a localhost:3000/formulario que es donde se localiza el formulario y donde está conectada la base de datos, se debe presionar la opción de "Regístrate" que se encuentra localizada arriba a la derecha en la landing page

13. Desde ahí podrás insertar los datos que te pida, algunos de ellos son obligatorios. Estos datos se guardarán automáticamente en la tabla y podrás revisarlos desde phpmyadmin