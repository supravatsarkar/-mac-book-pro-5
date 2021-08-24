/* -----------------code start--------------------------- */
const bestPrice = document.getElementById('best-price');
const memoryPrice = document.getElementById('memory-price');
const storagePrice = document.getElementById('storage-price');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
const total = document.getElementById('total');
updateTotalPrice();
// calculation
function calculate(calc, price) {
    calc.innerText = price;
}
// update price
function updateTotalPrice() {
    totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryPrice.innerText) + parseFloat(storagePrice.innerText) + parseFloat(deliveryCharge.innerText);
    total.innerText = totalPrice.innerText;
}

// memory card handle 
document.getElementById('memory-8gb').addEventListener('click', function () {
    calculate(memoryPrice, 0);
    updateTotalPrice();
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    calculate(memoryPrice, 180);
    updateTotalPrice();
})

// storage section handle 
document.getElementById('storage-256gb').addEventListener('click', function () {
    calculate(storagePrice, 0);
    updateTotalPrice();
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    calculate(storagePrice, 100);
    updateTotalPrice();
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    calculate(storagePrice, 180);
    updateTotalPrice();
})

// delivery section handle 
document.getElementById('free-delivery').addEventListener('click', function () {
    calculate(deliveryCharge, 0);
    updateTotalPrice();
})
document.getElementById('prime-delivery').addEventListener('click', function () {
    calculate(deliveryCharge, 20);
    updateTotalPrice();
})

// Promo Add section
document.getElementById('promo-submit').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    if (promoInput.value == 'stevekaku') {
        total.innerText = parseFloat(totalPrice.innerText) * 0.8;
        promoInput.value = '';
        document.getElementById('invalid-msg').style.display = 'none';
        document.getElementById('valid-msg').style.display = 'block';
        document.getElementById('promo-submit').setAttribute('disabled', '')
    }
    else {
        document.getElementById('invalid-msg').style.display = 'block';
    }
})
/* -----------------code end--------------------------- */



