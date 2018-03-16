import 'whatwg-fetch';
import { ApiRequest } from './dataRequest';

function createTable(responseData){
    const tableData = responseData;
    
    console.log(tableData);

    //Parte 1
    //Implementar código para crear la tabla basada en la data acá
    //No olvidar agregar el código HTML necesario en el archivo index.html
}

ApiRequest()
    .then(createTable);
