function addToCart(productName, price, imageUrl) {
    // Retrieve existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cartItems.push({ productName: productName, price: price, quantity: 1, imageUrl: imageUrl });

    // Store the updated cart items back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    alert('Product added to cart successfully!');
    // Redirect to cart page
    window.open('cart.html', '_blank');
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

function buynow(productName, price, imageUrl) {
    // Retrieve existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cartItems.push({ productName: productName, price: price, quantity: 1, imageUrl: imageUrl });

    // Store the updated cart items back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Redirect to payment page
    window.location.href = 'payment.html';
}

document.addEventListener("DOMContentLoaded", function() {
    var buyNowBtn = document.getElementById("buy-now-btn");
    if (buyNowBtn) {
        buyNowBtn.addEventListener("click", function() {
            window.location.href = "payment.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var clearAllBtn = document.getElementById("clear-all-btn");
    if (clearAllBtn) {
        clearAllBtn.addEventListener("click", function() {
            // Clear all products from the form
            var cartItems = document.getElementById("cart-items");
            cartItems.innerHTML = "";

            // Update total to 0.00
            var total = document.getElementById("total");
            total.textContent = "0.00";

            // Show message "Your cart is empty"
            var message = document.createElement("tr");
            message.innerHTML = "<td colspan='6'>Your cart is empty</td>";
            cartItems.appendChild(message);
        });
    }
});

// Function to handle form submission and payment processing
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Perform payment processing here
    // Example: integrate with PayPal or Stripe API

    // For demonstration purposes, let's just log a message
    console.log('Processing payment...');

    // After payment processing, you can redirect to a confirmation page or show a success message
    // For example:
    // window.location.href = 'confirmation.html';
});

// Function to integrate with PayPal
function payWithPayPal() {
    // Integration with PayPal API
    console.log('Redirecting to PayPal...');
    // Example: window.location.href = 'https://www.paypal.com';
}

// Function to integrate with Stripe
function payWithStripe() {
    // Integration with Stripe API
    console.log('Redirecting to Stripe...');
    // Example: window.location.href = 'https://www.stripe.com';
}
