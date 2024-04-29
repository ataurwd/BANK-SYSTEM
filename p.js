function updateSpanText(id, dpAmount) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = dpAmount + currentNumber;
}
const dpbtn = document.getElementById('dpbtn');
dpbtn.addEventListener('click', function () {
    const dpAmount = document.getElementById('dpAmount');
    const dpNumber = parseFloat(dpAmount);

    updateSpanText('id heare', dpNumber);
    updateSpanText('id here', dpNumber)
})