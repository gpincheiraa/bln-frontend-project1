import 'whatwg-fetch';
import { ApiRequest } from './dataRequest';

function createTable(responseData){
    const tableData = JSON.parse(responseData);

    //console.log(tableData);

    //comienzo prueba

    let info = document.getElementById("tabla");
    let tmp = "<tr><th>15m</th><th>last</th><th>buy</th><th>sell</th><th>symbol</th></tr>" ;

    for (let i in tableData) {
      tmp += "<tr><th colspan='5' align='left'>" + i + "</th></tr><tr>";
      for (let j in tableData[i]) {
          tmp += "<td align='right'>" + tableData [i][j] + "</td>";
      }
      tmp += "</tr>";
    }

    info.innerHTML = tmp;

    }


    //fin prueba


    //Parte 1 Tarea
    //Implementar código para crear la tabla basada en la data acá
    //No olvidar agregar el código HTML necesario en el archivo index.html


/*
Ayuda 1:
En este trozo de código estamos ejecutando la petición al servidor, obteniendo la respuesta
con los datos necesarios. Una vez ocurrido esto, le decimos
a la función "apiRequest" que "luego que" (then)
ocurra lo que tenga que suceder con la petición al servidor ejecute la función "createTable"
*/
ApiRequest()
    .then(createTable);
