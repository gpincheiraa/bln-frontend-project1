const currencySelectedClassName = 'row__currency--selected'
let pageState = {
    currencySelected: null
};

function formatColumnName(name) {
    return `${name[0].toUpperCase()}${name.slice(1)}`;
}
function createHeaders(columnNames) {
    const tableHead = document.querySelector('.home__table thead');
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
        option.selected = pageState.currencySelected === value;
    }
    return option;
}
function handleSelectChange(event) {
    const select = event.target;
    const selectedIndex = select.selectedIndex;
    const optionValue = select.options[selectedIndex].getAttribute('value');
    const tableRows = document.querySelectorAll('.home__table tbody tr');
    
    Array.from(tableRows).forEach(row => {
        const currencyColumn = row.querySelector('td:nth-child(1)')
        if(currencyColumn.textContent === optionValue) { 
            row.classList.add(currencySelectedClassName);
        } else if(row.classList.contains(currencySelectedClassName)) {
            row.classList.remove(currencySelectedClassName);
        }
    });
    pageState = {
        ...pageState,
        currencySelected : optionValue
    };
}
function getFilterCurrencies() {
    const select = document.querySelector('.home__select--currency');
    select.innerHTML = '';
    select.appendChild(createOption('TODOS'));
    select.addEventListener('change', handleSelectChange);

    return select;
}
export const initializeTable = (tableData) => {
    const table = document.querySelector('.home__table');
    const tableBody = table.querySelector('tbody');
    const tableHead = table.querySelector('thead');
    const currencyNames = Object.keys(tableData);
    const sampleKey = currencyNames[0];
    const columnNames = Object.keys(tableData[sampleKey]).map(formatColumnName);
    const select = getFilterCurrencies();

    // Create empty tbody and thead
    let newTBody = document.createElement('tbody');
    let newTHead = document.createElement('thead');

    // Populate table headers and select
    newTHead.appendChild(createHeaders(columnNames));
    
    // Replace old thead with new thead
    table.replaceChild(newTHead, tableHead);

    // Populate table
    currencyNames.forEach(currencyName => {
        const rowData = tableData[currencyName];
        const rowCurrencyData = document.createElement('tr');

        let columnDataValue = document.createElement('td');
        columnDataValue.textContent = currencyName;
        rowCurrencyData.appendChild(columnDataValue);
        
        Object.keys(rowData).forEach(currencyType => {
            columnDataValue = document.createElement('td');
            columnDataValue.textContent = rowData[currencyType];
            rowCurrencyData.appendChild(columnDataValue);
            if(currencyName === pageState.currencySelected) {
                rowCurrencyData.classList.add(currencySelectedClassName);
            }
        });
        newTBody.appendChild(rowCurrencyData);
        select.appendChild(createOption(currencyName, currencyName));
    });

    // Replace old tbody with new tbody
    table.replaceChild(newTBody, tableBody);

}
