const url = '/';
const btcTickerResponse = {
  "USD": {
    "15m": 9061.42,
    "last": 9061.42,
    "buy": 9061.42,
    "sell": 9061.42,
    "symbol": "$"
  },
  "AUD": {
    "15m": 11690.58,
    "last": 11690.58,
    "buy": 11690.58,
    "sell": 11690.58,
    "symbol": "$"
  },
  "BRL": {
    "15m": 29668.82,
    "last": 29668.82,
    "buy": 29668.82,
    "sell": 29668.82,
    "symbol": "R$"
  }
};
const currencyNamesList = Object.keys(btcTickerResponse);
const currencyNameSample = currencyNamesList[0];
const currencyTypeFormatter = name => `${name[0].toUpperCase()}${name.slice(1)}`;
const currencyTypesList = Object.keys(btcTickerResponse[currencyNameSample]);
const expectedColumnNames = [
  'Currency',
  ...currencyTypesList.map(currencyTypeFormatter)
];

given('I open Home page', () => {
  cy.server();
  cy.route('https://blockchain.info/es/ticker', btcTickerResponse);
  cy.visit(url);
});

then(`I see Currency, 15m, Last, Sell and Buy column names on the table`, () => {
  const columnNamesSelector = '.home__table thead tr th';
  cy.get(columnNamesSelector).should($th => {
    expectedColumnNames.forEach((currencyTypeName, index) => {
      expect($th.eq(index).text()).to.eq(currencyTypeName)
    });
  });
});

then(`I see the data response rendered as row on the table`, () => {
  const rowsSelector = '.home__table tbody tr';
  cy.get(rowsSelector).should($trList => {
    const rowsList = $trList.toArray();
    currencyNamesList.forEach((currencyName, index) => {
      const columnElements = rowsList[index].querySelectorAll('td');

      expect(columnElements[0].textContent).to.eq(currencyName);

      currencyTypesList.forEach((key, index) => {
          const targetValue = btcTickerResponse[currencyName][key];
          expect(columnElements[index + 1].textContent).to.eq(`${targetValue}`);
      });
    });
  });
});

then(`I see the currency selector with the currencies given in the data requested`, () => {
  const selectBoxSelector = '.home__select--currency';
  cy.get(selectBoxSelector).should($select => {
    const selectBoxElement = $select[0];
    const optionElements = Array.from(selectBoxElement.querySelectorAll('option'));
    
    optionElements.forEach(optionEl => expect(currencyNamesList).to.include(optionEl.textContent));
  });
});