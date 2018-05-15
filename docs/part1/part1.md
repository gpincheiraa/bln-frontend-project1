[<< Anterior](../../README.md) || [ Siguiente >>](../part2/part2.md)

### Parte 1: Crear las columnas de la tabla basado en data proveniente de una petición HTTP

En el archivo `./src/index.js` hay una función llamada `createTable()`. Implementar el código que sea capaz de dibujar las columnas de una tabla basada en la data provista en la variable `tableData`.

- En el archivo `index.html` escribir el código HTML necesario. La tabla debe estar estructurada siguiendo la estructura recomendada en [este link](https://www.w3schools.com/tags/tag_thead.asp) utilizando los elementos `<thead>` y `<th>`. Se debe agregar una clase al tag `<table></table>` llamada `home__table`. El agregar esta clase es sumamente importante ya que los test automatizados se basarán en esto para corroborar que la tabla cumple con los requisitos de esta tarea.

- Los nombres de las columnas de la tabla deben estar basados en la estructura del objeto que representa el valor del Bitcoin para una divisa. Adicionalmente debe agregarse una columna extra al inicio de nombre "Currency"

- Los nombres de las columnas deben comenzar con la primera letra en mayúscula

*Resultado esperado:*

![Alt text](img.png?raw=true "Column names")

[<< Anterior](../../README.md) || [ Siguiente >>](../part2/part2.md)