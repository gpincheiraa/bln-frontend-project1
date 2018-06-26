const url = '/';
const oneMinute = 60000;

let numberFormatter;
let bitcoinAddress;
let fixturesData;
let currencyNamesList;
let currencyNameSample;
let currencyTypeFormatter;
let currencyPropsList;
let expectedColumnNames;
let actualViewport = 'macbook-15';

before(() => {
  cy.getFixturesData()
    .then(({
      btcTickerResponse,
      btcTickerResponseAfter,
      btcBalanceResponse,
      btcBalanceResponseAfter,
      btcBalanceResponseAfterMin
    }) => {
      currencyNamesList = Object.keys(btcTickerResponse);
      currencyNameSample = currencyNamesList[1];
      currencyTypeFormatter = name => `${name[0].toUpperCase()}${name.slice(1)}`;
      currencyPropsList = Object.keys(btcTickerResponse[currencyNameSample]);
      expectedColumnNames = [
        'Currency',
        ...currencyPropsList.map(currencyTypeFormatter)
      ];
      fixturesData = {
        btcTickerResponse,
        btcTickerResponseAfter,
        btcBalanceResponse,
        btcBalanceResponseAfter,
        btcBalanceResponseAfterMin
      };
    });
  cy.getNumberFormatter()
    .then(formatter => numberFormatter = formatter);
});

beforeEach(() => {
  cy.getBitcoinInfo()
    .then(bitcoinInfo => {
      const { btcTickerResponse, btcBalanceResponse } = fixturesData;
      cy.viewport(actualViewport);
      cy.server();
      cy.route('https://blockchain.info/es/ticker', btcTickerResponse);
      cy.route(`https://chain.so/api/v2/get_address_balance/BTC/${bitcoinInfo.address}`, btcBalanceResponse);
      bitcoinAddress = bitcoinInfo.address;
    });
});

given('I open Home page', () => {
  cy.clock();
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
            targetValue = fixturesData.btcTickerResponse[currencyName][currencyPropsList[index - 1]];
            expect(tdElement.textContent).to.eq(targetValue);
          } else {
            targetValue = fixturesData.btcTickerResponse[currencyName][currencyPropsList[index - 1]];
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

then(`I see BTC balance with a different value after a minute`, () => {
  const balanceSelector = '.bitcoin--balance';

  cy.tick(oneMinute);
  cy.get(balanceSelector).should('have.text', `${fixturesData.btcBalanceResponse.data.confirmed_balance}`);

  cy.route(`https://chain.so/api/v2/get_address_balance/BTC/${bitcoinAddress}`, fixturesData.btcBalanceResponseAfter);

  cy.tick(oneMinute);
  cy.get(balanceSelector).should('have.text', `${fixturesData.btcBalanceResponseAfter.data.confirmed_balance}`);

  cy.route(`https://chain.so/api/v2/get_address_balance/BTC/${bitcoinAddress}`, fixturesData.btcBalanceResponseAfterMin);

  cy.tick(oneMinute);
  cy.get(balanceSelector).should('have.text', `${fixturesData.btcBalanceResponseAfterMin.data.confirmed_balance}`);
});

then(`I see currency values with differents values after a minute`, () => {
  const rowsSelector = '.home__table tbody tr';

  const checkTickerResponse = btcTickerResponses => {
    let btcTicker = btcTickerResponses;
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
              targetValue = btcTicker[currencyName][currencyPropsList[index - 1]];
              expect(tdElement.textContent).to.eq(targetValue);
            } else {
              targetValue = btcTicker[currencyName][currencyPropsList[index - 1]];
              expect(tdElement.textContent).to.eq(numberFormatter(targetValue));
            }
          });
      });
    });
  }

  cy.tick(oneMinute);
  checkTickerResponse(fixturesData.btcTickerResponse);

  cy.route('https://blockchain.info/es/ticker', fixturesData.btcTickerResponseAfter);

  cy.tick(oneMinute);
  checkTickerResponse(fixturesData.btcTickerResponseAfter);

});

then(`I see the right row {string} with the class in the table after one minute`, currencySelected => {
  const rowsSelector = '.home__table tbody tr';

  cy.route('https://blockchain.info/es/ticker', fixturesData.btcTickerResponseAfter);
  cy.tick(oneMinute);

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
            targetValue = fixturesData.btcTickerResponseAfter[currencyName][currencyPropsList[index - 1]];
            expect(tdElement.textContent).to.eq(targetValue);
          } else {
            targetValue = fixturesData.btcTickerResponseAfter[currencyName][currencyPropsList[index - 1]];
            expect(tdElement.textContent).to.eq(numberFormatter(targetValue));
          }
        });
    });
  });
  cy.get('.row__currency--selected td:nth-child(1)')
    .should($row => expect($row[0].textContent).to.eq(currencySelected));
});
