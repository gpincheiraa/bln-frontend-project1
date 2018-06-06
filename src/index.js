import 'whatwg-fetch';
import { getCurrenciesValues,  getBalance } from './dataRequest';
import { initializeTable } from './table';
import { initializeBalance } from './balance';
import { globalsDefinitions } from './utils';

const offlinePlugin = require('offline-plugin/runtime');

function callGets () {
    getBalance()
    .then(initializeBalance)
    getCurrenciesValues()
    .then(initializeTable)
    setInterval(callGets, globalsDefinitions.ONE_MINUTE);
}

callGets();

offlinePlugin.install();
