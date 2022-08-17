document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmmount = getInputFieldValueById('withdraw-field');
    const preWithdrawAmmount = getElementValueById('withdraw-total');
    const newWithdrawTotal = preWithdrawAmmount + newWithdrawAmmount;

    setTextELementValueById('withdraw-total', newWithdrawTotal);

    const preBalanceTotal = getElementValueById('blance-total');
    const newBalanceTotal = preBalanceTotal - newWithdrawAmmount;

    setTextELementValueById('blance-total', newBalanceTotal);
})