const loginbtn = document.getElementById('login');
loginbtn.addEventListener('click',function(){
   const loginArea = document.getElementById('login-area')
   loginArea.style.display = 'none';
   const trArea = document.getElementById('transactionArea');
   trArea.style.display = 'block'
})

 