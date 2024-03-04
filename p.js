const loginBtn = document.getElementById('login').addEventListener('click',
function(){
    const loingForm = document.getElementById('login-area');
    loingForm.style.display = 'none';
    const TransactionArea = document.getElementById('transactionArea');
    TransactionArea.style.display = 'block';
})

//  this is for deposit button system

const bepositBtn = document.getElementById('addDeposit').addEventListener('click',
function(){
    const depositAmount = document.getElementById('dpAmount').value;
    const addDeposit = parseFloat(depositAmount);
    const currentAmount = document.getElementById('currentDeposit').innerText;
    const addAmount = parseFloat(currentAmount);
    const totalDeposit = addDeposit + addAmount;

    document.getElementById('currentDeposit').innerText = totalDeposit;
    document.getElementById('dpAmount').value = '';
})