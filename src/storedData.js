import { initializeTable } from './table';
import { initializeBalance } from './balance';

export const onlineBalance = onlineBalanceData => {
    localStorage.setItem("balanceData", JSON.stringify(onlineBalanceData))
    initializeBalance(onlineBalanceData);
}

export const offlineBalance = () => {
    let variable = JSON.parse(localStorage.getItem("balanceData"));
    initializeBalance(variable);
}

export const onlineTable = onlineTableData => {
    localStorage.setItem("tableData", JSON.stringify(onlineTableData));
    initializeTable(onlineTableData);
}

export const offlineTable = () => {
    let variable = JSON.parse(localStorage.getItem("tableData"));  
    initializeTable(variable);
}