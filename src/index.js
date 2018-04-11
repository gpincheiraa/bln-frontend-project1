import 'whatwg-fetch';
import { ApiRequest } from './dataRequest';

function createTable(responseData){
    const tableData = JSON.parse(responseData);

    console.log(tableData);

    //comienzo prueba

    const tableRow = document.querySelector('table thead tr');
    const tableColumn = '<td>Currency</td><td>15m</td><td>Last</td><td>Buy</td><td>Sell</td><td>Symbol</td>';

    tableRow.innerHTML = tableColumn;

    const tableBody = document.querySelector('table tbody');
    let tabledataHtml = '';

    const currencyNames =  Object.keys(tableData);

    //console.log(currencyNames);

      //['USD', 'AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'DKK', 'EUR', 'GBP', 'HKD', 'INR', 'ISK', 'JPY', 'KRW', 'NZD', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TWD']

    for(let i = 0; i < currencyNames.length; i++ ){

      const currencyName = currencyNames[i]

      tabledataHtml += '<tr><td>' + currencyName + '</td>';
      tabledataHtml += '<td>' + tableData[currencyName]['15m'] + '</td>';
      tabledataHtml += '<td>' + tableData[currencyName].buy + '</td>';
      tabledataHtml += '<td>' + tableData[currencyName].last + '</td>';
      tabledataHtml += '<td>' + tableData[currencyName].sell + '</td>';
      tabledataHtml += '<td>' + tableData[currencyName].symbol + '</td></tr>';

    }

    tableBody.innerHTML = tabledataHtml;


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
