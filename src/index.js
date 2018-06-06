import 'whatwg-fetch';
import { ApiRequest } from './dataRequest';
import { globalsDefinitions } from './utils'

function formatColumnName(name) {
    return `${name[0].toUpperCase()}${name.slice(1)}`;
}
function createHeaders(columnNames) {
    const table = document.querySelector('.home__table');
    const tableHead = table.querySelector('thead');
    const row = tableHead.insertRow(0); 
    let thead;
    ['Currency', ...columnNames].forEach(name => {
        thead = document.createElement('th');
        thead.textContent = name;
        row.appendChild(thead);
    }); 
    return row;
}
function createOption(label, value) {
    const option = document.createElement('option');
    option.textContent = label;
    if(value) {
        option.value = value;
    }
    return option;
}
function handleSelectChange(event) {
    const select = event.target;
    const selectedIndex = select.selectedIndex;
    const optionValue = select.options[selectedIndex].getAttribute('value');

    const tableRows = document.querySelectorAll('.home__table tbody tr');
    const selectedClass = 'row__currency--selected'
    
    Array.from(tableRows).forEach(row => {
        const currencyColumn = row.querySelector('td:nth-child(1)')
        if(currencyColumn.textContent === optionValue) { 
            row.classList.add(selectedClass);
        } else if(row.classList.contains(selectedClass)) {
            row.classList.remove(selectedClass);
        }
    });
}
function initializeTable(tableData) {
    const table = document.querySelector('.home__table');
    const select = document.querySelector('.home__select--currency');
    const tableBody = table.querySelector('tbody');
    const tableHead = table.querySelector('thead');
    const currencyNames = Object.keys(tableData);
    const sampleKey = currencyNames[0];
    const columnNames = Object.keys(tableData[sampleKey]).map(formatColumnName);

    // Create empty tbody and thead
    let newTBody = document.createElement('tbody');
    let newTHead = document.createElement('thead');

    // Populate table headers and select
    newTHead.appendChild(createHeaders(columnNames));
    select.appendChild(createOption('TODOS'));

    // Replace old thead with new thead
    table.replaceChild(newTHead, tableHead);

    // Populate table
    currencyNames.forEach(currencyName => {
        const rowData = tableData[currencyName];
        const rowColumns = document.createElement('tr');

        let columnDataValue = document.createElement('td');
        columnDataValue.textContent = currencyName;
        rowColumns.appendChild(columnDataValue);
        
        Object.keys(rowData).forEach(currencyType => {
            columnDataValue = document.createElement('td');
            columnDataValue.textContent = rowData[currencyType];
            rowColumns.appendChild(columnDataValue);
        });
        newTBody.appendChild(rowColumns);
        select.appendChild(createOption(currencyName, currencyName));
    });

    select.addEventListener('change', handleSelectChange);

    // Replace old tbody with new tbody
    table.replaceChild(newTBody, tableBody);
}
function initializeBalance(balanceData) {
    const balanceSpan = document.querySelector('.bitcoin--balance');
    balanceSpan.textContent = balanceData.confirmed_balance;
}
function setApiRequest() {
    apiRequestCurrencies();
    apiRequestBalance();
    setInterval(apiRequestCurrencies, globalsDefinitions.oneMinute);
    setInterval(apiRequestBalance, globalsDefinitions.oneMinute);
}
function apiRequestCurrencies() {
    ApiRequest()
        .getCurrenciesValues
        .then(initializeTable);
}
function apiRequestBalance() {
    ApiRequest()
        .getBalance
        .then(initializeBalance);
}

setApiRequest();
