// 1. Add event handler in button

document.getElementById('btn-withdraw').addEventListener('click', function () {

    // 2. Get Withdraw amount from input field and convert to number

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step-7 : clear withdraw field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide valid amount')
        return;
    }

    //  Step-3 : Get Previous Withdraw amount
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const PreviousWithdrawTotalString = WithdrawTotalElement.innerText;
    const PreviousWithdrawTotal = parseFloat(PreviousWithdrawTotalString);

    // Step-4 : Calculate Total withdrawal
    const currentWithdrawTotal = PreviousWithdrawTotal + newWithdrawAmount;



    // step-5: Get previous balance

    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Invalid Amount");
        return;
    }

    // Step-4.5: Calculate and set withdraw Amount
    WithdrawTotalElement.innerText = currentWithdrawTotal;

    // Step-6 : Calculate new total balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})