function addToCart(productName, price, imageUrl) {
    // Retrieve existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cartItems.push({ productName: productName, price: price, quantity: 1, imageUrl: imageUrl });

    // Store the updated cart items back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Redirect to cart page
    window.location.href = 'cart.html';
}

// Retrieve cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Function to dynamically generate cart item HTML
function generateCartItemHTML(productName, price, quantity, imageUrl, index) {
    const subtotal = price * quantity;
    return `
        <tr>
            <td class="cross-symbol">
                <div class="circle" onclick="deleteRow(${index})">&times;</div>
            </td>
            <td class="image-cell">
                <img src="${imageUrl}" alt="${productName}">
            </td>
            <td>${productName}</td>
            <td>&#x20B9;${price.toFixed(2)}</td>
            <td>
                <div class="quantity">
                    <button class="minus" onclick="decrementQuantity(${index})">-</button>
                    <input type="text" class="number" value="${quantity}" min="1" readonly>
                    <button class="plus" onclick="incrementQuantity(${index})">+</button>
                </div>
            </td>
            <td class="subtotal">&#x20B9;${subtotal.toFixed(2)}</td>
        </tr>
    `;
}

// Function to render cart items
function renderCartItems() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    cartItems.forEach((item, index) => {
        cartContainer.innerHTML += generateCartItemHTML(item.productName, item.price, item.quantity, item.imageUrl, index);
    });
    updateTotal();
}

// Render cart items when page loads
renderCartItems();

// Function to delete a cart item
function deleteRow(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCartItems();
}

// Function to update total price
function updateTotal() {
    var total = 0;
    var subtotals = document.querySelectorAll('.subtotal');
    subtotals.forEach(function(subtotal) {
        total += parseFloat(subtotal.textContent.slice(1)); // Remove the dollar sign
    });
    document.getElementById('total').textContent = '₹'+ total.toFixed(2);
}

// Function to decrement quantity
function decrementQuantity(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCartItems();
    }
}

// Function to increment quantity
function incrementQuantity(index) {
    cartItems[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCartItems();
}
