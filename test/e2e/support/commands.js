// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const packageJson  = require('../../../package.json');
const bitcoinConfig = require('../../../btc-config.json');
const { numberFormatter } = require('../../../src/utils');
const btcTickerResponse = require('../fixtures/exchange/blockchain_luxembourg_base.json');
const btcTickerResponseAfter = require('../fixtures/exchange/blockchain_luxembourg_after1m.json');
const btcBalanceResponse = require('../fixtures/balance/balance_base.json');
const btcBalanceResponseAfter = require('../fixtures/balance/balance_after1m.json');
const btcBalanceResponseAfterMin = require('../fixtures/balance/balance_after2m.json');

Cypress.Commands.add("getProjectInfo", () => packageJson);
Cypress.Commands.add("getBitcoinInfo", () => bitcoinConfig);
Cypress.Commands.add("getNumberFormatter", () => numberFormatter);
Cypress.Commands.add("getFixturesData", () => ({
    btcTickerResponse,
    btcTickerResponseAfter,
    btcBalanceResponse,
    btcBalanceResponseAfter,
    btcBalanceResponseAfterMin
}));
