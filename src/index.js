import 'whatwg-fetch';
import { getCurrenciesValues,  getBalance } from './dataRequest';
import { onlineBalance, offlineBalance, onlineTable, offlineTable} from './storedData';
import { globalsDefinitions } from './utils';

const offlinePlugin = require('offline-plugin/runtime');

function callGets() {
    getBalance()
    .then(onlineBalance)
    .catch(offlineBalance);
    getCurrenciesValues()
    .then(onlineTable)
    .catch(offlineTable);
}

callGets();
setInterval(callGets, globalsDefinitions.ONE_MINUTE);

offlinePlugin.install();
