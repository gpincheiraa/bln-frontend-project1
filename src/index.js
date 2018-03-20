import 'whatwg-fetch';
import { ApiRequest } from './dataRequest';

function createTable(responseData){
    const tableData = responseData;
    
    console.log(tableData);

    //Parte 1 Tarea
    //Implementar código para crear la tabla basada en la data acá
    //No olvidar agregar el código HTML necesario en el archivo index.html
}

/*
Ayuda 1:
En este trozo de código estamos ejecutando la petición al servidor, obteniendo la respuesta 
con los datos necesarios. Una vez ocurrido esto, le decimos 
a la función "apiRequest" que "luego que" (then) 
ocurra lo que tenga que suceder con la petición al servidor ejecute la función "createTable"
*/
ApiRequest()
    .then(createTable);
