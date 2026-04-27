let change = 1;

try {
    changePdt1Pic();
}
catch {
    console.log('product one pic changed');
}


function plusOnePdt1() {
    if (change === 4) {
        change = 1;
    }
    else {
        change++
    }
    console.log(change);
    changePdt1Pic();
}

function minusOnePdt1() {
    if (change === 1) {
        change = 4;
    }
    else {
        change--
    }
    console.log(change);
    changePdt1Pic();
}

function changePdt1Pic() {
    let pic1 = document.querySelector('.js-pic-div');
    if (change === 1) {
        pic1.innerHTML = '<img src="Pics/Pdt01.PNG" class="pdt-pic" style="width: 100%;">';
    }
    else if (change === 2) {
        pic1.innerHTML = '<img src="Pics/Pdt01.2.PNG" class="pdt-pic" style="width: 100%;">';
    }
    else if (change === 3) {
        pic1.innerHTML = '<img src="Pics/Pdt01.3.PNG" class="pdt-pic" style="width: 100%;">';
    }
    else if (change === 4) {
        pic1.innerHTML = '<img src="Pics/Pdt01.4.PNG" class="pdt-pic" style="width: 100%;">';
    }
}

let change2 = 1;

console.log(change2);

try {
    changePdt2Pic();
}
catch {
    console.log('product two pic changed')
}


function pdt02MinusOne() {

    if (change2 === 1) {
        change2 = 4;
    }
    else {
        change2--;
    } 

    console.log(change2);
    changePdt2Pic();
}

function pdt02PlusOne() {

    if (change2 === 4) {
        change2 = 1;
    }
    else {
        change2++;
    }
    
    console.log(change2);
    changePdt2Pic();
}

function changePdt2Pic() {
    let pic2 = document.querySelector('.js-pdt02-pic-div');
    if (change2 === 1) {
        pic2.innerHTML = '<img src="Pics/Pdt02.PNG" class="pdt-pic" style="width: 100%">';
    }
    else if (change2 === 2) {
        pic2.innerHTML = '<img src="Pics/Pdt02.2.PNG" class="pdt-pic" style="width: 100%">';
    }
    else if (change2 === 3) {
        pic2.innerHTML = '<img src="Pics/Pdt02.3.PNG" class="pdt-pic" style="width: 100%">';
    }
    else if (change2 === 4) {
        pic2.innerHTML = '<img src="Pics/Pdt02.4.PNG" class="pdt-pic" style="width: 100%">';
    }
}

let change3 = 1;

try {
    changePdt3Pic();
}
catch {
    console.log('product three pic changed')
}

function pdt03MinusOne() {
    if (change3 === 1) {
        change3 = 4;
    }
    else {
        change3--;
    }
    console.log(change3);
    changePdt3Pic();
}

function pdt03PlusOne() {
    if (change3 === 4) {
        change3 = 1;
    }
    else {
        change3++;
    }
    console.log(change3);
    changePdt3Pic();
}

function changePdt3Pic() {
    pic3 = document.querySelector('.js-pdt03-pic-div');
    if (change3 === 1) {
        pic3.innerHTML = '<img src="Pics/Pdt03.PNG" class="pdt-pic" style="width: 100%">';
    }
    else if (change3 === 2) {
        pic3.innerHTML = '<img src="Pics/Pdt03.2.PNG" class="pdt-pic" style="width: 100%">';
    }
    else if (change3 === 3) {
        pic3.innerHTML = '<img src="Pics/Pdt03.3.PNG" class="pdt-pic" style="width: 100%">';
    }
    else if (change3 === 4) {
        pic3.innerHTML = '<img src="Pics/Pdt03.4.PNG" class="pdt-pic" style="width: 100%">';
    }
}


let sizeXS = document.querySelector('.js-size-XS');
let sizeS = document.querySelector('.js-size-S');
let sizeM = document.querySelector('.js-size-M');
let sizeL = document.querySelector('.js-size-L');
let sizeXL = document.querySelector('.js-size-XL');
let sizeSelected = '';

function selectSizeXS() {
    sizeXS.classList.add('size-button-selected');
    sizeS.classList.remove('size-button-selected');
    sizeM.classList.remove('size-button-selected');
    sizeL.classList.remove('size-button-selected');
    sizeXL.classList.remove('size-button-selected');
    sizeSelected = 'XS';
}

function selectSizeS() {
    sizeXS.classList.remove('size-button-selected');
    sizeS.classList.add('size-button-selected');
    sizeM.classList.remove('size-button-selected');
    sizeL.classList.remove('size-button-selected');
    sizeXL.classList.remove('size-button-selected');
    sizeSelected = 'S';
}

function selectSizeM() {
    sizeXS.classList.remove('size-button-selected');
    sizeS.classList.remove('size-button-selected');
    sizeM.classList.add('size-button-selected');
    sizeL.classList.remove('size-button-selected');
    sizeXL.classList.remove('size-button-selected');
    sizeSelected = 'M';
}

function selectSizeL() {
    sizeXS.classList.remove('size-button-selected');
    sizeS.classList.remove('size-button-selected');
    sizeM.classList.remove('size-button-selected');
    sizeL.classList.add('size-button-selected');
    sizeXL.classList.remove('size-button-selected');
    sizeSelected = 'L';
}

function selectSizeXL() {
    sizeXS.classList.remove('size-button-selected');
    sizeS.classList.remove('size-button-selected');
    sizeM.classList.remove('size-button-selected');
    sizeL.classList.remove('size-button-selected');
    sizeXL.classList.add('size-button-selected');
    sizeSelected = 'XL';
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);

function addPdt01ToCart() {
    let stopFunction = '';
    if (sizeSelected === '') {
        document.querySelector('.js-warning').innerHTML = 'No size selected.';
        setTimeout(function() {
            document.querySelector('.js-warning').innerHTML = '';
        }, 1500);
        return stopFunction;
    }
    cart.push({name: 'Product 01', price: '7900', size: sizeSelected, productImage: 'Pics/Pdt01.PNG'});
    document.querySelector('.js-warning').innerHTML = 'Added';
    document.querySelector('.js-warning').classList.add('warning-added');
    setTimeout(function() {
        document.querySelector('.js-warning').innerHTML = '';
    }, 1500);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    renderCartQuantity();

}

function addPdt02ToCart() {
    let stopFunction = '';
    if (sizeSelected === '') {
        document.querySelector('.js-warning').innerHTML = 'No size selected.';
        setTimeout(function() {
            document.querySelector('.js-warning').innerHTML = '';
        }, 1500);
        return stopFunction;
    }
    cart.push({name: 'Product 02', price: '5900', size: sizeSelected, productImage: 'Pics/Pdt02.PNG'});
    document.querySelector('.js-warning').innerHTML = 'Added';
    document.querySelector('.js-warning').classList.add('warning-added');
    setTimeout(function() {
        document.querySelector('.js-warning').innerHTML = '';
    }, 1500);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    renderCartQuantity();

}

function addPdt03ToCart() {
    let stopFunction = '';
    if (sizeSelected === '') {
        document.querySelector('.js-warning').innerHTML = 'No size selected.';
        setTimeout(function() {
            document.querySelector('.js-warning').innerHTML = '';
        }, 1500);
        return stopFunction;
    }
    cart.push({name: 'Product 03', price: '9900', size: sizeSelected, productImage: 'Pics/Pdt03.PNG'});
    document.querySelector('.js-warning').innerHTML = 'Added';
    document.querySelector('.js-warning').classList.add('warning-added');
    setTimeout(function() {
        document.querySelector('.js-warning').innerHTML = '';
    }, 1500);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    renderCartQuantity();

}



function renderTocart() {

    if (cart.length === 0) {
        document.querySelector('.js-cart').innerHTML = `<div class="empty-cart-pic-div"><img src="Pics/empty-cart.png" class="empty-cart"></div>
                                                        <p class="empty-cart-p">Your cart is empty</p>
                                                        <a href="products.html">
                                                            <button class="back-to-the-shop-button">Back to the shop</button>
                                                        </a>`;
    }

    else {
        let cartHtml = '';

        for (let i = 0; i < cart.length; i++) {
            let cartdiv = cart[i];            
            let html = `<div class="cart-pdt">
                            <div class="cart-pdt-pic-div">
                                <img src="${cartdiv.productImage}" alt="${cartdiv.name}" class="cart-pdt-pic">
                            </div>
                            <div class="cart-pdt-info">
                                <p class="info">${cartdiv.name}</p>
                                <p class="info">Price: ${cartdiv.price} DA</p>
                                <p class="info">Size: ${cartdiv.size}</p>
                                <p class="info">Quantity: 01</p>
                                <button class="js-update-button update-button";>Update</button>
                            </div>
                            <div class="cart-pdt-delivery-info">
                                <p class="info">Wednesday, April 15</p>
                                <p class="info">FREE Shipping</p>
                                <button class="delete-button" onclick="cart.splice(${i}, 1); renderTocart(); localStorage.setItem('cart', JSON.stringify(cart)); renderCartQuantity(); updatOrderSummary();">Delete</button>
                            </div>
                        </div>`;
            cartHtml += html;
        }
        document.querySelector('.js-cart').innerHTML = cartHtml;

    }
   

}

   

try {
    renderTocart();
}
catch {
    console.log('Cart updated')
}

function resetCart() {
    cart = [];
    localStorage.removeItem('cart');
    renderTocart();
    renderCartQuantity();
    updatOrderSummary();
}

renderCartQuantity();

function renderCartQuantity() {
    document.querySelector('.js-cart-quantity').innerHTML = cart.length;
    console.log('Cart quantity rendered');

}

try {
    updatOrderSummary();
}
catch {
    console.log('order summary updated');
}


function updatOrderSummary() {
    let items = cart.length;
    console.log(items);
    let itemsPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        let cartPriceDiv = cart[i];
        let iprice = cartPriceDiv.price;
        iprice = Number(iprice);
        itemsPrice += iprice;
    }
    console.log(itemsPrice);
    let shippingAndHandling = 0;
    let totalBeforeTax = itemsPrice + shippingAndHandling;
    console.log(totalBeforeTax);
    let tax = totalBeforeTax / 10;
    console.log(tax);
    let orderTotal = totalBeforeTax + tax;
    console.log(orderTotal);
    document.querySelector('.js-items').innerHTML = `Items (${items}):`;
    document.querySelector('.js-price').innerHTML = `${itemsPrice} DA`;
    document.querySelector('.js-shipping-and-handling').innerHTML = `${shippingAndHandling} DA`;
    document.querySelector('.js-price-before-tax').innerHTML = `${totalBeforeTax} DA`;
    document.querySelector('.js-tax').innerHTML = `${tax} DA`;
    document.querySelector('.js-order-total').innerHTML = `${orderTotal} DA`;
}

let messageLength = document.querySelector('.js-message');

function messageLengthCounter() {  
    document.querySelector('.js-lentgh-counter').innerHTML = `${messageLength.value.length}/300`;
}





