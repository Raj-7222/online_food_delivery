let cart = [];

function addToCart(itemName, itemPrice) {
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');

    // Add the item to the cart array
    cart.push({ name: itemName, price: itemPrice });

    // Update the cart display
    let cartHTML = '';
    let total = 0;
    cart.forEach(item => {
        cartHTML += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        total += item.price;
    });

    cartItems.innerHTML = cartHTML;
    totalAmount.innerHTML = `Total: $${total.toFixed(2)}`;
}
