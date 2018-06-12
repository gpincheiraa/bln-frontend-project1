[![Build Status](https://travis-ci.org/gpincheiraa/bln-frontend-project1.svg?branch=master)](https://travis-ci.org/gpincheiraa/bln-frontend-project1) 
[![Greenkeeper badge](https://badges.greenkeeper.io/gpincheiraa/bln-frontend-project1.svg)](https://greenkeeper.io/)

### Proyecto 1 Curso FrontEnd Básico

# Monitor de valor del Bitcoin

### Objetivo:
Contruir una pequeña aplicación que es capaz de consultar el precio del Bitcoin en distintas monedas y desplegar una tabla con la lista de monedas. También contempla un filtro. En esta primera versión debemos contruir un prototipo similar a la siguiente imagen:

// **@TODO**: Diagrama prototipo

Como se puede observar en el diagrama también necesitamos incluir el balance de nuestra billetera Bitcoin. Para esto el proyecto ya cuenta con un mecanismo que realiza este trabajo en el cual solo con configurar nuestra dirección Bitcoin podemos lograr este objetivo. Más adelante se explica como realizar esta configuración.

### Requerimientos:
- NodeJS >= 8.4 instalado a través de NVM. Instrucciones [click acá](docs/nvm-install.md)
- Git
- Crear un proyecto en [GITHUB](https://github.com). 
// **@TODO**: Instrucciones [click acá]
- Crear una cuenta [TRAVIS](https://travis-ci.org) y linkear el repositorio al proyecto github. 
// **@TODO**: Instrucciones [click acá]

### Contexto
La aplicación posee una funcionalidad ya desarrollada que utiliza la siguiente url para obtener una lista `https://blockchain.info/es/ticker` y devuelve un objeto JSON el cual utilizaremos en este proyecto.

### Instalación
- ejecutar `npm i`

## Parte 0: Configurar proyecto

- En al archivo `package.json` agregar o modificar las propiedades que cumplan con este formato:

 ```
    ...
    "author": {
        "name": "nombre apellido",
        "email": "email"
    },
    ...
    "config": {
        "title": "titulo del sitio web"
    },
    ...
 ```
*Resultado esperado:*

// **@TODO**: <Foto tab de github mostrando head en 1 respecto de la rama master>

// **@TODO**: Página de introducción a las Bitcoin Wallets
- Crear archivo `btc-config.json` con la siguiente estructura: 
```
{
  "address": ""
}
```
Una vez seguido el paso 0, ejecutar `npm start` y abrir `http://localhost:3000/` en el navegador.

//  **@TODO**: FOTO PRIMER PANTALLAZO

## Índice Curso

- [Parte 1: Crear las columnas de la tabla basado en data proveniente de una petición HTTP](docs/part1/part1.md)

- [Parte 2: Crear las filas de la tabla basado en data proveniente de una petición HTTP](docs/part2/part2.md)

- [Parte 3: Selector de moneda](docs/part3/part3.md)

- [Parte 4: Agregar una clase a la fila de la tabla que contiene la moneda seleccionada en el select](docs/part4/part4.md)

- [Parte 5: Agregar estilos utilizando las ventajas de SASS y flexbox a través del estándar BEM](docs/part5/part5.md)

- [Parte 6: Formateo de valor](docs/part6/part6.md)

// @TODO: Agregar nota y tests que corroboren que los datos en la tabla y selectbox no se duplican, así como el caso borde que exista una moneda seleccionada y se mantenga así al actualizarse la tabla.
- [Parte 7: Actualización cada 1 minuto](docs/part7/part7.md)

- [Parte 8: Manejo offline guardando en caché las últimas peticiones exitosas](docs/part8/part8.md)

// @TODO: Pauta puntajes

## Nivel Intermedio

- Guardar en caché la última petición exitosa
- Aplicar patrones de diseño para reutilizar código como number formater, modularizar, crear componentes, etc
- Aplicar linter y buenas prácticas
- Medir performance
- aplicar TAD a todo el proyecto
