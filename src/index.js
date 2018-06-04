import 'whatwg-fetch';
import { getCurrenciesValues,  getBalance } from './dataRequest';
import { initializeTable } from './table';
import { initializeBalance } from './balance';

const offlinePlugin = require('offline-plugin/runtime');

getCurrenciesValues()
    .then(initializeTable);

getBalance()
    .then(initializeBalance);

offlinePlugin.install();
