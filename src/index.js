
import 'whatwg-fetch';
import { ApiRequest } from './dataRequest';

function formatColumnName(name) {
    return `${name[0].toUpperCase()}${name.slice(1)}`;
}
function createColumns(columnNames) {
    const row = document.createDocumentFragment();
    let thead;
    ['Currency', ...columnNames].forEach(name => {
        thead = document.createElement('th');
        thead.textContent = name;
        row.appendChild(thead);
    }); 
    return row;
}
function createTable(tableData){    
    console.log(tableData);

    //Parte 1 Tarea
    //Implementar código para crear la tabla basada en la data acá
    //No olvidar agregar el código HTML necesario en el archivo index.html
    const table = document.querySelector('.home__table');
    const theadRow = table.querySelector('thead tr');
    const parsedData = JSON.parse(tableData);
    const currencyNames = Object.keys(parsedData);
    const sampleKey = currencyNames[0];
    const columnNames = Object.keys(parsedData[sampleKey]).map(formatColumnName);

    theadRow.appendChild(createColumns(columnNames));

    //Parte 2 Tarea
    //Implementar código para crear las filas de la tabla basada en la data acá
    const tableBody = table.querySelector('tbody');
    currencyNames.forEach((currencyName) => {
        const rowData = parsedData[currencyName];
        const rowColumns = document.createElement('tr');
        
        let columnDataValue = document.createElement('td');
        columnDataValue.textContent = currencyName;
        rowColumns.appendChild(columnDataValue);
        
        Object.keys(rowData).forEach(currencyType => {
            columnDataValue = document.createElement('td');
            columnDataValue.textContent = rowData[currencyType];
            rowColumns.appendChild(columnDataValue);
        });
        tableBody.appendChild(rowColumns);
    });
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
