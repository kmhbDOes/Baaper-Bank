// Add Event Handler to Deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Step-2 : Get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step-3 : Get current total deposit amount
    // For non-input(Element other than input, textarea) use innerText

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //  Step-4 : Add toal deposit amount 

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: Get total current Balance

    const totalBalanceElement = document.getElementById('total-balance');
    // Set deposit total
    const previousBalanceTotalString = totalBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6: Calculate total balance

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // Set balance total
    totalBalanceElement.innerText = currentBalanceTotal;
    //  Step -7 : Clear Deposit Field
    depositField.value = '';


})