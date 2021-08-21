
// Memory
const Memory8GB = document.getElementById('8gb-memory');
const Memory16GB = document.getElementById('16gb-memory');
const ExtraMemoryCost = document.getElementById('memory-cost');
// storage 
const SSD256GB = document.getElementById('256gb-ssd');
const SSD512GB = document.getElementById('512gb-ssd');
const SSD1TB = document.getElementById('1tb-ssd');
const ExtraStorageCost = document.getElementById('storage-cost');
// delivery
const freeDelivery = document.getElementById('prime-delivery-cost');
const paidDelivery = document.getElementById('urgent-delivery-cost');
const ExtraDeliveryCost = document.getElementById('delivery-charge');
// total price
const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');

function updateTotal() {
    const memoryCOst = parseInt(ExtraMemoryCost.innerText);
    const storageCost = parseInt(ExtraStorageCost.innerText);
    const deliveryCost = parseInt(ExtraDeliveryCost.innerText);
    const total = parseInt(bestPrice.innerText);
    const grandTotal = memoryCOst + storageCost + deliveryCost + total;
    totalPrice.innerText = grandTotal;
    pomoTotal.innerText = totalPrice.innerText;
}

// Memory cost
Memory8GB.addEventListener('click', function () {
    ExtraMemoryCost.innerText = "0";
    updateTotal();
})
Memory16GB.addEventListener('click', function () {
    ExtraMemoryCost.innerText = "180";
    updateTotal();
})

// storage cost
SSD256GB.addEventListener('click', function () {
    ExtraStorageCost.innerText = "0";
    updateTotal();
})
SSD512GB.addEventListener('click', function () {
    ExtraStorageCost.innerText = "100";
    updateTotal();
})
SSD1TB.addEventListener('click', function () {
    ExtraStorageCost.innerText = "180";
    updateTotal();
})

// delivery cost
freeDelivery.addEventListener('click', function () {
    ExtraDeliveryCost.innerText = "0";
    updateTotal();
})
paidDelivery.addEventListener('click', function () {
    ExtraDeliveryCost.innerText = "20";
    updateTotal();
});


// pomo  code  

const pomoInputField = document.getElementById('pomo-code');
const pomoButton = document.getElementById('pomo-btn');
const pomoTotal = document.getElementById('total-amount');

function addPromoCode() {
    debugger;
    const pomo = pomoInputField.value;
    if (pomo == 'stevekaku') {
        const promoTotalPrice = totalPrice.innerText;
        const tax = parseFloat(promoTotalPrice) / 100 * 20;
        pomoTotal.innerText = promoTotalPrice - tax;
    }
    else {
        alert('Please Enter Valid Pomo Code ')
    }
    pomoInputField.value = "";
}

// pomo button

pomoButton.addEventListener('click', function () {
    addPromoCode();
});