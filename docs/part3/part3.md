[<< Anterior](../part2/part2.md) || [ Siguiente >>](../part4/part4.md)

## Parte 3: Selector de moneda

En el archivo `./src/index.js` hay una función llamada `createTable()`. Implementar el código que sea capaz de crear una lista de tags `<option>` y `<select>` utilizando la estructura recomendada en [este link](https://www.w3schools.com/tags/tag_select.asp).
Cada option debe contener el texto con el código de la moneda. Adicionalmente, tal y como está descrito en el link de referencia, cada `<option>` debe tener el atributo `value` también con el código de la moneda.
Agregar al select una nueva opción que contenga el texto `TODOS` y que no tenga el atributo `value`. Esta opción debe ser la primera de la lista.
Se debe agregar una clase al tag `<select>` llamada `home__select--currency`. El agregar esta clase es sumamente importante ya que los test automatizados se basarán en esto para corroborar que el selector de moneda cumple con los requisitos de esta tarea.

*Resultado esperado:*

*Selector de moneda cerrado*
![Alt text](img1.png?raw=true "select closed")

*Selector de moneda abierto*
![Alt text](img2.png?raw=true "select opened")

[<< Anterior](../part2/part2.md) || [ Siguiente >>](../part4/part4.md)