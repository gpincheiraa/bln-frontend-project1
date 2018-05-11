const apiUrl = 'https://blockchain.info/es/ticker';
//  const mockResponse = require('../stubs/api_response.json');
export const ApiRequest = () => {
    //  return Promise.resolve(mockResponse);
    return fetch(apiUrl)
      .then(response => response.text())
      .then(response => JSON.parse(response));
      //  .then(response => );
};
