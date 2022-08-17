document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmmount = getInputFieldValueById('deposit-field');
    const preDepositAmmount = getElementValueById('deposit-total');
    console.log(newDepositAmmount);

    const newDepositTotal = newDepositAmmount + preDepositAmmount;

    setTextELementValueById('deposit-total', newDepositTotal);

    const preBalanceTotal = getElementValueById('blance-total');
    const newBalanceTotal = preBalanceTotal + newDepositAmmount;

    setTextELementValueById('blance-total', newBalanceTotal);
})