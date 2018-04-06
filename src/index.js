import 'whatwg-fetch';
import { ApiRequest } from './dataRequest';

function createTable(responseData){
    const tableData = JSON.parse(responseData);

    //console.log(tableData);

    //comienzo prueba

    const tableRow = document.querySelector('table thead tr');
    const tableColumn = '<td>Currency</td><td>15m</td><td>Last</td><td>Buy</td><td>Sell</td><td>Symbol</td>';

    tableRow.innerHTML = tableColumn;

    const tableBody = document.querySelector('table tbody');
    let tabledataHtml = '';

    const currencyName1 = 'USD';
    const currencyName2 = 'AUD';


    tabledataHtml += '<tr><td>USD</td>';
    tabledataHtml += '<td>' + tableData[currencyName1]['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.USD.buy + '</td>';
    tabledataHtml += '<td>' + tableData.USD.last + '</td>';
    tabledataHtml += '<td>' + tableData.USD.sell + '</td>';
    tabledataHtml += '<td>' + tableData.USD.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>AUD</td>';
    tabledataHtml += '<td>' + tableData[currencyName2]['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.AUD.buy + '</td>';
    tabledataHtml += '<td>' + tableData.AUD.last + '</td>';
    tabledataHtml += '<td>' + tableData.AUD.sell + '</td>';
    tabledataHtml += '<td>' + tableData.AUD.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>BRL</td>';
    tabledataHtml += '<td>' + tableData.BRL['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.BRL.buy + '</td>';
    tabledataHtml += '<td>' + tableData.BRL.last + '</td>';
    tabledataHtml += '<td>' + tableData.BRL.sell + '</td>';
    tabledataHtml += '<td>' + tableData.BRL.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>CAD</td>';
    tabledataHtml += '<td>' + tableData.CAD['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.CAD.buy + '</td>';
    tabledataHtml += '<td>' + tableData.CAD.last + '</td>';
    tabledataHtml += '<td>' + tableData.CAD.sell + '</td>';
    tabledataHtml += '<td>' + tableData.CAD.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>CHF</td>';
    tabledataHtml += '<td>' + tableData.CHF['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.CHF.buy + '</td>';
    tabledataHtml += '<td>' + tableData.CHF.last + '</td>';
    tabledataHtml += '<td>' + tableData.CHF.sell + '</td>';
    tabledataHtml += '<td>' + tableData.CHF.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>CLP</td>';
    tabledataHtml += '<td>' + tableData.CLP['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.CLP.buy + '</td>';
    tabledataHtml += '<td>' + tableData.CLP.last + '</td>';
    tabledataHtml += '<td>' + tableData.CLP.sell + '</td>';
    tabledataHtml += '<td>' + tableData.CLP.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>CNY</td>';
    tabledataHtml += '<td>' + tableData.CNY['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.CNY.buy + '</td>';
    tabledataHtml += '<td>' + tableData.CNY.last + '</td>';
    tabledataHtml += '<td>' + tableData.CNY.sell + '</td>';
    tabledataHtml += '<td>' + tableData.CNY.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>DKK</td>';
    tabledataHtml += '<td>' + tableData.DKK['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.DKK.buy + '</td>';
    tabledataHtml += '<td>' + tableData.DKK.last + '</td>';
    tabledataHtml += '<td>' + tableData.DKK.sell + '</td>';
    tabledataHtml += '<td>' + tableData.DKK.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>EUR</td>';
    tabledataHtml += '<td>' + tableData.EUR['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.EUR.buy + '</td>';
    tabledataHtml += '<td>' + tableData.EUR.last + '</td>';
    tabledataHtml += '<td>' + tableData.EUR.sell + '</td>';
    tabledataHtml += '<td>' + tableData.EUR.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>GBP</td>';
    tabledataHtml += '<td>' + tableData.GBP['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.GBP.buy + '</td>';
    tabledataHtml += '<td>' + tableData.GBP.last + '</td>';
    tabledataHtml += '<td>' + tableData.GBP.sell + '</td>';
    tabledataHtml += '<td>' + tableData.GBP.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>HKD</td>';
    tabledataHtml += '<td>' + tableData.HKD['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.HKD.buy + '</td>';
    tabledataHtml += '<td>' + tableData.HKD.last + '</td>';
    tabledataHtml += '<td>' + tableData.HKD.sell + '</td>';
    tabledataHtml += '<td>' + tableData.HKD.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>INR</td>';
    tabledataHtml += '<td>' + tableData.INR['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.INR.buy + '</td>';
    tabledataHtml += '<td>' + tableData.INR.last + '</td>';
    tabledataHtml += '<td>' + tableData.INR.sell + '</td>';
    tabledataHtml += '<td>' + tableData.INR.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>ISK</td>';
    tabledataHtml += '<td>' + tableData.ISK['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.ISK.buy + '</td>';
    tabledataHtml += '<td>' + tableData.ISK.last + '</td>';
    tabledataHtml += '<td>' + tableData.ISK.sell + '</td>';
    tabledataHtml += '<td>' + tableData.ISK.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>JPY</td>';
    tabledataHtml += '<td>' + tableData.JPY['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.JPY.buy + '</td>';
    tabledataHtml += '<td>' + tableData.JPY.last + '</td>';
    tabledataHtml += '<td>' + tableData.JPY.sell + '</td>';
    tabledataHtml += '<td>' + tableData.JPY.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>KRW</td>';
    tabledataHtml += '<td>' + tableData.KRW['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.KRW.buy + '</td>';
    tabledataHtml += '<td>' + tableData.KRW.last + '</td>';
    tabledataHtml += '<td>' + tableData.KRW.sell + '</td>';
    tabledataHtml += '<td>' + tableData.KRW.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>NZD</td>';
    tabledataHtml += '<td>' + tableData.NZD['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.NZD.buy + '</td>';
    tabledataHtml += '<td>' + tableData.NZD.last + '</td>';
    tabledataHtml += '<td>' + tableData.NZD.sell + '</td>';
    tabledataHtml += '<td>' + tableData.NZD.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>PLN</td>';
    tabledataHtml += '<td>' + tableData.PLN['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.PLN.buy + '</td>';
    tabledataHtml += '<td>' + tableData.PLN.last + '</td>';
    tabledataHtml += '<td>' + tableData.PLN.sell + '</td>';
    tabledataHtml += '<td>' + tableData.PLN.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>RUB</td>';
    tabledataHtml += '<td>' + tableData.RUB['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.RUB.buy + '</td>';
    tabledataHtml += '<td>' + tableData.RUB.last + '</td>';
    tabledataHtml += '<td>' + tableData.RUB.sell + '</td>';
    tabledataHtml += '<td>' + tableData.RUB.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>SEK</td>';
    tabledataHtml += '<td>' + tableData.SEK['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.SEK.buy + '</td>';
    tabledataHtml += '<td>' + tableData.SEK.last + '</td>';
    tabledataHtml += '<td>' + tableData.SEK.sell + '</td>';
    tabledataHtml += '<td>' + tableData.SEK.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>SGD</td>';
    tabledataHtml += '<td>' + tableData.SGD['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.SGD.buy + '</td>';
    tabledataHtml += '<td>' + tableData.SGD.last + '</td>';
    tabledataHtml += '<td>' + tableData.SGD.sell + '</td>';
    tabledataHtml += '<td>' + tableData.SGD.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>THB</td>';
    tabledataHtml += '<td>' + tableData.THB['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.THB.buy + '</td>';
    tabledataHtml += '<td>' + tableData.THB.last + '</td>';
    tabledataHtml += '<td>' + tableData.THB.sell + '</td>';
    tabledataHtml += '<td>' + tableData.THB.symbol + '</td></tr>';

    tabledataHtml += '<tr><td>TWD</td>';
    tabledataHtml += '<td>' + tableData.TWD['15m'] + '</td>';
    tabledataHtml += '<td>' + tableData.TWD.buy + '</td>';
    tabledataHtml += '<td>' + tableData.TWD.last + '</td>';
    tabledataHtml += '<td>' + tableData.TWD.sell + '</td>';
    tabledataHtml += '<td>' + tableData.TWD.symbol + '</td></tr>';

    tableBody.innerHTML = tabledataHtml;


//    console.log(tableData)


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
