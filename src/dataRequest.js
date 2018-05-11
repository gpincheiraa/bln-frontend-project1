const apiUrl = 'https://blockchain.info/es/ticker';
//  const mockResponse = require('../stubs/api_response.json');
const numberFormater = number => {
  const numberSplitted = number.toString().split('.');
  const replaceChunksRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  
  return numberSplitted[0]
    .replace(replaceChunksRegex, '$&.') + (numberSplitted[1] ? `,${numberSplitted[1]}` : '');
};

export const ApiRequest = () => {
    //  return Promise.resolve(mockResponse);
    return fetch(apiUrl)
      .then(response => response.text())
      .then(data => JSON.parse(data))
      .then(data => {
        const formatedData = {};
        Object.keys(data).forEach(currency => {
          formatedData[currency] = {
            ...data[currency],
            '15m': numberFormater(data[currency]['15m']),
            'last': numberFormater(data[currency]['last']),
            'buy': numberFormater(data[currency]['buy']),
            'sell': numberFormater(data[currency]['sell']),
          }
        });
        return formatedData;
      });
    
};
