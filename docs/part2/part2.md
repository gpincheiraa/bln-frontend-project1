[<< Anterior](../part1/part1.md) || [ Siguiente >>](../part3/part3.md)

### Parte 2: Crear las filas de la tabla basado en data proveniente de una petición HTTP

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

![Alt text](img.png?raw=true "Table data")


**Opcional:** Las columnas de la tabla deben ser capaces de reaccionar a un "cambio de contrato". Esto es: si las propiedades de los objetos provistos para cada tipo de moneda cambian en el futuro, (ejemplo: se agrega un nuevo campo o se quita uno) la tabla debe ser capaz de dibujar las columnas basado en las propiedades.

[<< Anterior](../part1/part1.md) || [ Siguiente >>](../part3/part3.md)