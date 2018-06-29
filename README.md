# Monitor de valor del Bitcoin

[![Build Status](https://travis-ci.org/gpincheiraa/bln-frontend-project1.svg?branch=master)](https://travis-ci.org/gpincheiraa/bln-frontend-project1) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/cb0cb18f821f44d4b3cb85e4c51442e8)](https://app.codacy.com/app/gpincheiraa/bln-frontend-project1?utm_source=github.com&utm_medium=referral&utm_content=gpincheiraa/bln-frontend-project1&utm_campaign=badger) [![Greenkeeper badge](https://badges.greenkeeper.io/gpincheiraa/bln-frontend-project1.svg)](https://greenkeeper.io/)

### Objetivo:
Contruir una pequeña aplicación que es capaz de consultar el precio del Bitcoin en distintas monedas y desplegar una tabla con la lista de monedas. También contempla un filtro. En esta primera versión debemos contruir un prototipo similar a la siguiente imagen:

// **@TODO**: Diagrama prototipo

Como se puede observar en el diagrama también necesitamos incluir el balance de nuestra billetera Bitcoin. Para esto el proyecto ya cuenta con un mecanismo que realiza este trabajo en el cual solo con configurar nuestra dirección Bitcoin podemos lograr este objetivo. Más adelante se explica como realizar esta configuración.

### Requerimientos:
- NodeJS >= 8.11.2 instalado a través de NVM. Instrucciones [click acá](docs/nvm-install.md)
- Git
- Crear una copia de este en proyecto (click en fork).
// **@TODO**: Instrucciones [click acá]
- Crear una cuenta [TRAVIS](https://travis-ci.org) y linkear el repositorio al proyecto github. 
// **@TODO**: Instrucciones [click acá]

### Instalación
- `npm install`

### Antes de empezar

Construiremos una aplicación de manera incremental agregando la funcionalidad básica que nos permita cotizar el valor del bitcoin en la moneda que nosotros seleccionemos y en la bolsa seleccionada. No partiremos desde cero: archivos de estilo, la estructura HTML y la implementación para mostrar un balance en bitcoins ya están listas. Sólo hay que intervenir el código demarcado en los archivos indicados en cada una de las intrucciones.

Antes de resolver los primeros 5 ejercicios, incluiremos información del alumno en el archivo `package.json` y 
agregaremos la metadata necesaria para que el proyecto sea capaz de ejecutarse.

Antes de realizar la publicación de la aplicación (después de resolver la 5ta parte del proyecto) configuraremos una dirección válida que corresponderá a una dirección con el pozo total de Bitcoins disponible como parte del [programa de recompensas Boolean]() (@TODO link a sección en página web)

## Parte 0: Configurar proyecto

1.  En al archivo `package.json` agregar o modificar las propiedades que cumplan con este formato:

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

2. Crear archivo `btc-config.json` con la siguiente estructura: 
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

// @TODO: Agregar instrucciones, código y tests
- [Parte 5: Calcular valor respecto a la moneda y bolsa seleccionadas]()

- [Parte 6: Agregar estilos utilizando las ventajas de SASS y flexbox a través del estándar BEM](docs/part6/part6.md)


-----
- [Publicar en producción](docs/release-process.md)
---

- [Parte 7: Formateo de valor](docs/part6/part6.md)

// @TODO: Agregar nota y tests que corroboren que los datos en la tabla y selectbox no se duplican
- [Parte 8: Actualización cada 1 minuto](docs/part7/part7.md)

- [Parte 9: Manejo offline guardando en caché las últimas peticiones exitosas](docs/part8/part8.md)

// @TODO: Link a pauta puntajes
