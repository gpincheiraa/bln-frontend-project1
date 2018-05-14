const currenciesUrl = 'https://blockchain.info/es/ticker';
const balanceUrl = `https://chain.so/api/v2/get_address_balance/BTC/${BITCOIN_CONFIG.address}`;
const numberFormater = number => {
  const numberSplitted = number.toString().split('.');
  const replaceChunksRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  
  return numberSplitted[0]
    .replace(replaceChunksRegex, '$&.') + (numberSplitted[1] ? `,${numberSplitted[1]}` : '');
};

export const ApiRequest = () => {
  const getCurrenciesValues = fetch(currenciesUrl)
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(data => Object.keys(data)
      .reduce((formatedData, currency) => 
        ({
          ...formatedData,
          [currency]: {
            ...data[currency],
            '15m': numberFormater(data[currency]['15m']),
            'last': numberFormater(data[currency]['last']),
            'buy': numberFormater(data[currency]['buy']),
            'sell': numberFormater(data[currency]['sell'])
          }
        }),
        {})
    );
  const getBalance = fetch(balanceUrl)
    .then(response => response.text())
    .then(response => JSON.parse(response).data);

  return Promise.all([
    getCurrenciesValues,
    getBalance
  ])
    .then(values => ({
      tableData: values[0],
      balanceData: values[1]
    }));
};
