const url = '/';
const btcTickerResponse = {
  "USD": {
    "15m": 9061.4272472882,
    "last": 9061.4272472882,
    "buy": 9061.4272472882,
    "sell": 9061.4272472882,
    "symbol": "$"
  },
  "AUD": {
    "15m": 11690.5836637,
    "last": 11690.5836637,
    "buy": 11690.5836637,
    "sell": 11690.5836637,
    "symbol": "$"
  },
  "BRL": {
    "15m": 32529668.8295,
    "last": 32529668.8295,
    "buy": 32529668.8295,
    "sell": 32529668.8295,
    "symbol": "R$"
  }
};
const btcBalanceResponse = {
  "status" : "success",
  "data" : {
    "network" : "BTC",
    "address" : "1PJXd9572EDU7i1k2QD9WBujwpuy8pXqyV",
    "confirmed_balance" : "2.25000",
    "unconfirmed_balance" : "2.25000"
  }
};

const btcBalanceResponseAfter = {
  "status" : "success",
  "data" : {
    "network" : "BTC",
    "address" : "1PJXd9572EDU7i1k2QD9WBujwpuy8pXqyV",
    "confirmed_balance" : "60.25000",
    "unconfirmed_balance" : "60.25000"
  }
};
const currencyNamesList = Object.keys(btcTickerResponse);
const currencyNameSample = currencyNamesList[1];
const currencyTypeFormatter = name => `${name[0].toUpperCase()}${name.slice(1)}`;
const currencyPropsList = Object.keys(btcTickerResponse[currencyNameSample]);
const expectedColumnNames = [
  'Currency',
  ...currencyPropsList.map(currencyTypeFormatter)
];
let actualViewport = 'macbook-15';
let numberFormatter;

beforeEach(() => {
  cy.getBitcoinInfo()
    .should(bitcoinInfo => {
      cy.viewport(actualViewport);
      cy.server();
      cy.route('https://blockchain.info/es/ticker', btcTickerResponse);
      cy.route(`https://chain.so/api/v2/get_address_balance/BTC/${bitcoinInfo.address}`, btcBalanceResponse);
    });
  cy.getNumberFormatter()
    .should(formatter => numberFormatter = formatter);
});

given('I open Home page', () => {
  cy.visit(url);
});

given('I open Home page on {string}', viewport => {
  actualViewport = viewport;
  cy.viewport(viewport);
  cy.visit(url);
});

when(`select the {string} in the currency selector`, currencySelected => {
  cy.get('.home__select--currency').select(currencySelected);
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
      const nonNumericColumns = {
        CURRENCY: 0,
        SYMBOL: expectedColumnNames.length - 1
      };
      Array.from(columnElements)
        .forEach((tdElement, index) => {
          let targetValue;
          if(index === nonNumericColumns['CURRENCY']) {
            targetValue = currencyName;
            expect(tdElement.textContent).to.eq(targetValue);
          } else if(index === nonNumericColumns['SYMBOL']) {
            targetValue = btcTickerResponse[currencyName][currencyPropsList[index - 1]];
            expect(tdElement.textContent).to.eq(targetValue);
          } else {
            targetValue = btcTickerResponse[currencyName][currencyPropsList[index - 1]];
            expect(tdElement.textContent).to.eq(numberFormatter(targetValue));
          }
        });
    });
  });
});

then(`I see the currency selector with the currencies given in the data requested`, () => {
  const selectBoxSelector = '.home__select--currency';
  cy.get(selectBoxSelector).should($select => {
    const selectBoxElement = $select[0];
    const optionElements = Array.from(selectBoxElement.querySelectorAll('option'));
    
    expect(optionElements[0].textContent).to.eq('TODOS');
    
    optionElements.slice(1).forEach(optionEl => {
      expect(currencyNamesList).to.include(optionEl.textContent);
      expect(currencyNamesList).to.include(optionEl.getAttribute('value'));
    });
  });
});

then(`I see the right row {string} with the class in the table`, currencySelected => {
  cy.get('.row__currency--selected td:nth-child(1)')
    .should($row => expect($row[0].textContent).to.eq(currencySelected));
});

then(`I see that the class is not applied to neither row`, () => {
  const rowSelectedClass = 'row__currency--selected';
  cy.get('table tbody')
    .should($tBody => {
      Array.from($tBody[0].querySelectorAll('tr'))
        .forEach(row => expect(row.classList.contains(rowSelectedClass)).to.be.false)
    });
});

then(`I see the data response currency values in the table within {string} format`, currency => {
  const rowsSelector = '.home__table tbody tr';
  cy.get(rowsSelector).should($trList => {
    const rowsList = $trList.toArray();
    currencyNamesList.forEach((currencyName, index) => {
      const columnElements = rowsList[index].querySelectorAll('td');
      const numberFormatRegexMap = {
        'CLP': /^\d{1,3}((\.\d{3})+(\,\d{1,2})?)?$/
      };
      // On this test we will check only values that represent a number value
      currencyPropsList
        .filter(key => key !== 'symbol')
        .forEach((key, index) => {
          expect(columnElements[index + 1].textContent).to.match(numberFormatRegexMap[currency]);
        });
    });
  });
});

then(`I see BTC balance with a different value after 60 seconds`, () => {
  const balanceSelector = '.bitcoin--balance';
  cy.clock();
  cy.getBitcoinInfo()
    .should(bitcoinInfo => {
      cy.route(`https://chain.so/api/v2/get_address_balance/BTC/${bitcoinInfo.address}`, btcBalanceResponseAfter);
  });

  cy.clock().then((clock) => {
  clock.tick(60000)
  });

  cy.get(balanceSelector).should('have.text', '60.25000');

});