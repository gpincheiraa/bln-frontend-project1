[<< Anterior](../part4/part4.md) || [ Siguiente >>](../release-process.md)

## Parte 5: Agregar estilos utilizando las ventajas de SASS y flexbox a través del estándar BEM

***5.a Crear paneles del dashboard***

Crear un `<div>` con la clase `home__dashboard`, luego en su interior crear otro `div` con la clase `dashboard__panel` que servirá para envolver la tabla y el selector de moneda.

A modo de maquetación incluiremos la propiedad `border` para desmarcar el área de los elementos y reconocer las distintas secciones de la página. 

Ambos div deben cumplir la siguientes reglas de estilo para la propiedad `border`:

-   `home__dashboard`: tamaño `1.5px`, color `salmon` y estilo de borde `dashed`.
-   `dashboard__panel`: tamaño `1.5px`, color `salmon` y estilo de borde `dotted`. 

Seguir como referencia [este link](https://www.w3schools.com/css/css_border.asp)

*Resultado esperado:*


***5.b Ordernar los paneles con flexbox***


***5.c Reordenar paneles colapsados***

Utilizar las propiedad order cuando flexbox colapsa los elementos.

En el archivo `./src/index.scss` utilizar la propiedad `order` en la clase. Referencia [acá](https://www.w3schools.com/cssref/css3_pr_order.asp).

Para mejor referencia del porque del nombre de las clases utilizados en todos los ejercicios de esta tarea revisar [este link que explica la metodología BEM](http://getbem.com/introduction/).

Para mejor referencia del porqué de las unidades utilizadas en esta tarea revisar [este link con un artículo que habla de ello](https://gist.github.com/basham/2175a16ab7c60ce8e001).

[<< Anterior](../part4/part4.md) || [ Siguiente >>](../release-process.md)