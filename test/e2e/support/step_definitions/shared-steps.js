
then('I see the title based on the title and author information from package.json', title => {
    cy.getProjectInfo()
        .then(({ author, version, config }) => {
            cy.title()
                .should(title => expect(title).eq(`${config.title} v${version} | ${author.name}`));
        })
});
