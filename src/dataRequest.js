const apiUrl = 'https://blockchain.info/es/ticker';

export const ApiRequest = () => {
    return fetch(apiUrl).then(response => response.text());
};
