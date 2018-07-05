import { numberFormatter } from './utils';

const exchangeUrl = {
	BLOCKCHAIN_LUXEMBOURG: 'https://blockchain.info/es/ticker'
};
const balanceUrl = `https://chain.so/api/v2/get_address_balance/BTC/${BITCOIN_CONFIG.address}`;

export const getCurrenciesValues = () => fetch(exchangeUrl.BLOCKCHAIN_LUXEMBOURG)
	.then(response => response.text())
	.then(data => JSON.parse(data))
	.then(data => Object.keys(data)
		.reduce((formatedData, currency) => ({
			...formatedData,
			[currency]: {
				...data[currency],
				'15m': numberFormatter(data[currency]['15m']),
				'last': numberFormatter(data[currency]['last']),
				'buy': numberFormatter(data[currency]['buy']),
				'sell': numberFormatter(data[currency]['sell'])
			}
		}), {}) 
	);

export const getBalance = () => fetch(balanceUrl)
	.then(response => response.text())
	.then(response => JSON.parse(response).data);
