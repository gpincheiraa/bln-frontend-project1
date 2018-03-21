const url = '/';

given('I open Home page', () => {
  cy.visit(url)
});

then(`I see Currency, 15m, Last, Sell and Buy column names on the table`, () => {
  const columnNamesSelector = '.home-table__region thead tr th';
  cy.get(columnNamesSelector).should(($th) => {
      expect($th.eq(0).text()).to.eq('Currency');
      expect($th.eq(1).text()).to.eq('15m');
      expect($th.eq(2).text()).to.eq('Last');
      expect($th.eq(3).text()).to.eq('Buy');
      expect($th.eq(4).text()).to.eq('Sell');
  });
});
