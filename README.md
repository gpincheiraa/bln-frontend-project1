## Proyecto 1 Curso FrontEnd Básico

### Objetivo:
Contruir una pequeña aplicación que es capaz de de consultar el precio del bitcoin en distintas monedas y desplegar una tabla con la lista de monedas. Tambien contempla un filtro. En esta primera versión debemos contruir un prototipo como el de la siguiente imagen:

// @TODO: diagrama prototipo

### Requerimientos:
- NodeJS >= 8.4 instalado a través de NVM. Instrucciones [acá](docs/nvm-install.md)
- Git

###Contexto
La aplicación posee una funcionalidad ya desarrollada que utiliza la siguiente url para obtener una lista `https://blockchain.info/es/ticker` y devuelve un objeto JSON el cual utilizaremos en este proyecto.

###Instalación
- ejecutar `npm i`
- ejecutar `npm start`
- abrir `http://localhost:3000/` en el navegador

###Parte 1: Crear las columnas de la tabla basado en data proveniente de una petición HTTP

En el archivo `./src/index.js` hay una función llamada `createTable()`. Implementar el código que sea capaz de dibujar las columnas de una tabla basada en la data provista en la variable `tableData`.

- En el archivo `index.html` escribir el código HTML necesario. La tabla debe estar estructurada siguiendo la estructura recomendada en [este link](https://www.w3schools.com/tags/tag_thead.asp) utilizando los elementos `<thead>` y `<th>`. Se debe agregar una clase al tag `<table></table>` llamada `home__table`. El agregar esta clase es sumamente importante ya que los test automatizados se basarán en esto para corroborar que la tabla cumple con los requisitos de esta tarea.

- Los nombres de las columnas de la tabla deben estar basados en la estructura del objeto que representa el valor del Bitcoin para una divisa. Adicionalmente debe agregarse una columna extra al inicio de nombre "Currency"

- Los nombres de las columnas deben comenzar con la primera letra en mayúscula

*Resultado esperado:*

![Alt text](docs/part1/img.png?raw=true "Column names")

###Parte 2: Crear las filas de la tabla basado en data proveniente de una petición HTTP

En el archivo `./src/index.js` hay una función llamada `createTable()`. Implementar el código que sea capaz de dibujar los datos de una tabla basada en la data provista en la variable `tableData`.

- Escribir el código que sea capaz de dibujar los datos de la tabla siguiendo la estructura recomendada en el ejercicio anterior, por lo tanto las filas y columnas deberían estar contenidas dentro de la etiqueta `<tbody></tbody>`

- Dado que la petición HTTP responde un objeto con la siguiente estructura:

```
    {
        "<CÓDIGO_MONEDA>": { 
            // PROPIEDADES MONEDA
        },
        "<CÓDIGO_MONEDA>": { 
            // PROPIEDADES MONEDA
        },
        ....
    }
```

utilizar la primera columna para escribir el código de la moneda y en las siguiente las propiedades de la moneda.

*Resultado esperado:*

![Alt text](docs/part2/img.png?raw=true "Table data")


**Opcional:** Las columnas de la tabla deben ser capaces de reaccionar a un "cambio de contrato". Esto es: si las propiedades de los objetos provistos para cada tipo de moneda cambian en el futuro, (ejemplo: se agrega un nuevo campo o se quita uno) la tabla debe ser capaz de dibujar las columnas basado en las propiedades.


// @TODO: Pauta puntajes items anteriores

## Parte 3: Buscador de moneda

En el archivo `./src/index.js` hay una función llamada `createTable()`. Implementar el código que sea capaz de crear una lista de tags `<option>` y `<select>` utilizando la estructura recomendada en [este link](https://www.w3schools.com/tags/tag_select.asp).
Se debe agregar una clase al tag `<select>` llamada `home__select--currency`. El agregar esta clase es sumamente importante ya que los test automatizados se basarán en esto para corroborar que el selector de moneda cumple con los requisitos de esta tarea.

*Resultado esperado:*

## Parte 4: Scroll que deje centrado en la pantalla y marcado con un color la moneda buscada



