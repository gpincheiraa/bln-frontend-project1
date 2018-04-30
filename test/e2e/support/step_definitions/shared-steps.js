// __dirname it's from feature file
const { pageTitleRegex } = require('../support/utils');

then(`I see the title based on the title and author information from package.json`, title => {
    cy.title().should(title => expect(title).match(pageTitleRegex));
});
