function updateCountAndPrice(priceId, priceId){
    document.getElementById(priceId).addEventListener('click', function(){
        const CaseInput = document.getElementById('caseInput');
        const caseCount = parseInt(CaseInput.value);
        const caseNewprice  = caseCount + 1;
        CaseInput.value = caseNewprice;
        const caseTotal = caseNewprice * 1219;
        document.getElementById(priceId).innerText = '$' + caseTotal;
    
    })
}


updateCountAndPrice(phonePlus, phoneTotal);
updateCountAndPrice(casePlus, caseTotal);






//This is for product count minus and price count minus
document.getElementById('casePlus').addEventListener('click', function () {
    const CaseInput = document.getElementById('caseInput');
    const caseCount = parseInt(CaseInput.value);
    const caseNewprice = caseCount + 1;
    CaseInput.value = caseNewprice;
    const caseTotal = caseNewprice * 59;
    document.getElementById('caseTotal').innerText = '$' + caseTotal;
})



document.getElementById('caseMinus').addEventListener('click', function () {
    const CaseInput = document.getElementById('caseInput');
    const caseCount = parseInt(CaseInput.value);
    const caseNewprice = caseCount - 1;
    CaseInput.value = caseNewprice;
    const caseTotal = caseNewprice * 59;
    document.getElementById('caseTotal').innerText = '$' + caseTotal;

})
