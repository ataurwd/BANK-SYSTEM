
// this is for login button addEventListener
const loginbtn = document.getElementById('login');
loginbtn.addEventListener('click',function(){
   const loginArea = document.getElementById('login-area')
   loginArea.style.display = 'none';
   const trArea = document.getElementById('transactionArea');
   trArea.style.display = 'block'
})

//  deposit button addEventListener
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', 
function(){
    const dpAmount = document.getElementById('dpAmount').value;
    const dpNumber = parseFloat(dpAmount);

    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositAmount = parseFloat(currentDeposit);
    const totalDeposit = dpNumber + currentDepositAmount;

    document.getElementById('currentDeposit').innerText = totalDeposit;
    document.getElementById('dpAmount').value = '';
})