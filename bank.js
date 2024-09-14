
// this is for login button addEventListener
const loginbtn = document.getElementById('login');
loginbtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none';
    const trArea = document.getElementById('transactionArea');
    trArea.style.display = 'block'
})
//THIS FUNCTION FOR DEPOSIT AND CURRENT currentBalance FUNCTION
function updateSpanText(id, dpNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = dpNumber + currentNumber;
    document.getElementById(id).innerText = total;
}

//  deposit button ddDeposit');
const addDeposit = document.getElementById('addDeposit');
addDeposit.addEventListener('click',
    function () {
        const dpAmount = document.getElementById('dpAmount').value;
        const dpNumber = parseFloat(dpAmount);
        updateSpanText('currentDeposit', dpNumber)
        updateSpanText('currentBalance', dpNumber)
        document.getElementById('dpAmount').value = ' ';
    })



// withdraw
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', 
function(){
    const withdrawNumber = getInputNumber('amountWithdraw')
    updateSpanText('currentWit', withdrawNumber)
    updateSpanText('currentBalance',  -1 *  withdrawNumber)
    document.getElementById('amountWithdraw').value = '';
})
function getInputNumber (id){
    const Amount = document.getElementById(id).value;
    const Number = parseFloat(Amount);
    return Number;
}

