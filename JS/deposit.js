// Add Event Handler to Deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Step-2 : Get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    // Step-3 : Get current total deposit amount
    // For non-input(Element other than input, textarea) use innerText

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

    //  Step -7 : Clear Deposit Field
    depositField.value = '';


})