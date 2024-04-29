

function handleClickButton(product, increase) {
    const phoneInput = document.getElementById(product + '-Input');
    const phoneCount = parseInt(phoneInput.value);

    if (increase == true) {
        phoneNewPrice = phoneCount + 1;
    }
    if (increase == false && phoneCount > 1) {
        phoneNewPrice = phoneCount - 1;
    }


    phoneInput.value = phoneNewPrice;
    const phoneTotal = phoneNewPrice * 1219;
    document.getElementById(product + '-Total').innerText = phoneTotal;
    calculatTotal()
}

function handleClickButtonCase(caseProduct, increase) {
    const caseInput = document.getElementById(caseProduct + '-Input');
    const caseCount = parseInt(caseInput.value);

    if (increase == true) {
        caseNewPrice = caseCount + 1; 
    }
    if (increase == false && caseCount > 0) {
        caseNewPrice = caseCount - 1;
    }
    caseInput.value = caseNewPrice;
    const caseTotal = caseNewPrice * 59;
    document.getElementById(caseProduct + '-Total').innerText = caseTotal;

    calculatTotal()
}


function calculatTotal(){
    const phoneTotal = document.getElementById('phone-Total');
    const phoneCount = parseInt(phoneTotal.value);

    const caseTotal = document.getElementById('case-Total');
    const caseCount = parseInt(caseTotal.value);

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('TotalPrice').innerText ='$' + totalPrice;
    return totalPrice;
}



