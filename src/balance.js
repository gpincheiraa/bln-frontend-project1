export const initializeBalance = balanceData => {
    const balanceSpan = document.querySelector('.bitcoin--balance');
    balanceSpan.textContent = balanceData.confirmed_balance;
}
