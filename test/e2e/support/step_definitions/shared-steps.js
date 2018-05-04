
then(`I see the title based on the title and author information from package.json`, title => {
    const { author, version, config } = require(`../../../package.json`);
    cy.title().should(title => expect(title).eq(`${config.title} v${version} | ${author.name}`));
});
