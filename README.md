##Proyecto 1 Curso FrontEnd Básico

###Objetivo:
Contruir una pequeña aplicación que es capaz de de consultar el precio del bitcoin
a través de un buscador. En esta primera versión debemos contruir un prototipo como el de la siguiente imagen:

// TODO diagrama prototipo

###Requerimientos:
- NodeJS >= 8.4 instalado a través de NVM. Instrucciones [acá](docs/nvm-install.md)
- Git

###Contexto
La aplicación posee una funcionalidad ya desarrollada que utiliza la siguiente url para obtener una lista `https://blockchain.info/es/ticker` y devuelve un objeto JSON el cual utilizaremos en este proyecto.

###Instalación
- ejecutar `npm i`
- ejecutar `npm start`
- abrir `http://localhost:3000/` en el navegador

###Parte 1: Crear las columnas de la tabla basado en data proveniente de una petición HTTP

En el archivo `./src/index.js` hay una función llamada `createTable()`. Implementar el código que sea capaz de dibujar una tabla basada en la data provista en la variable `tableData`.

- En el archivo `index.html` escribir el código HTML necesario. La tabla debe estar estructurada siguiendo la estructura recomendada en [este link](https://www.w3schools.com/tags/tag_thead.asp) utilizando los elementos <thead> y <th>. 
- Los nombres de las columnas de la tabla deben estar basados en la estructura del objeto que representa el valor del Bitcoin para una divisa. Adicionalmente debe agregarse una columna extra al inicio de nombre "Currency"
- Los nombres de las columnas deben comenzar con la primera letra en mayúscula

*Resultado esperado:*

![Alt text](docs/part1/img.png?raw=true "Column names")

###Parte 2: Crear las filas de la tabla basado en data proveniente de una petición HTTP