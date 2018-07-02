[<< Anterior](../../README.md) || [ Siguiente >>](../part2/part2.md)

### Parte 1: Crear las columnas de una tabla HTML

En este primer ejercicio definiremos una estructura HTML y luego accederemos a ella a través de javascript para agregar nuevo HTML.

1 - Lo primero `index.html` escribir el código HTML necesario. La tabla debe estar estructurada siguiendo la estructura recomendada en [este link](https://www.w3schools.com/tags/tag_thead.asp) utilizando los elementos `<thead>` y `<th>`. 
Se debe agregar una clase al tag `<table></table>` llamada `home__table`. El agregar esta clase es sumamente importante ya que los test automatizados se basarán en esto para corroborar que la tabla cumple con los requisitos de esta tarea.

2 - Luego ir al archivo `./src/index.js` hay una función llamada `createTable()`. Utilizar `querySelector` para buscar la fila (`<tr>`) e `innerHTML` para crear las columnas de la tabla con uso de `templates strings` (o utilizar suma de strings).

3 - Los nombres de las columnas deben ser *Currency*, *15m*, *Last*, *Buy*, *Sell* y *Symbol*. Notar que todas comienzan con la primera letra en mayúscula.

*Resultado esperado:*

![Alt text](img.png?raw=true "Column names")

[<< Anterior](../../README.md) || [ Siguiente >>](../part2/part2.md)