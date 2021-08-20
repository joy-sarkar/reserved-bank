    // handel deposite button event
    document.getElementById('deposite-button').addEventListener('click',function(){
    // get the amount reposited
    const depositeInput = document.getElementById('deposite-inpute');
    const newDepositeAmoundText = depositeInput.value;
    const newDepositeAmonud = parseFloat(newDepositeAmoundText);
    // update deposite total
    const depositeTotal = document.getElementById('diposite-total');
    const previesDepositeTEXT = depositeTotal.innerText;
    const previesDepositeAmound =parseFloat(previesDepositeTEXT);
    const newDepositeTotal = previesDepositeAmound + newDepositeAmonud;
    depositeTotal.innerText = newDepositeTotal;
    
    // update accound balance
    const totalBalance = document.getElementById('balance-total');
    const balanceTotalText = totalBalance.innerText;
    const previesBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previesBalanceTotal + newDepositeAmonud;
    totalBalance.innerText = newBalanceTotal;
    // clear the deposite input filed
    depositeInput.value = '';
    });
    // handel withdraw button event
    document.getElementById('withdraw-button').addEventListener('click',function(){

        const withdrawInputTotal = document.getElementById('withdraw-input');
        const withdrawTotalText = withdrawInputTotal.value;
        const withTotalAmount = parseFloat(withdrawTotalText);
        // console.log(withTotalAmount);
        // set withdraw total
        const withdrawTotal = document.getElementById('withdraw-total');
        const previeswithdrawText = withdrawTotal.innerText;
        const previeswithdrawAmount = parseFloat(previeswithdrawText);
        const newWithTotal = previeswithdrawAmount + withTotalAmount;
        withdrawTotal.innerText = newWithTotal;
        // updata total balance
        const balanceTotal = document.getElementById('balance-total');
        const previcesTotalBalanceText = balanceTotal.innerText;
        const previesBalance = parseFloat(previcesTotalBalanceText);
        const newTotalBalance = previesBalance - withTotalAmount;
        balanceTotal.innerText = newTotalBalance;

        // clear withdraw input
        withdrawInputTotal.value = '';
    });
   