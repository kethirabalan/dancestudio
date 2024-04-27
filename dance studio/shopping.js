function addToCart(product) {
    // Get product details
    var productName = product.dataset.name;
    var productPrice = parseFloat(product.dataset.price);

    // Create row for the cart
    var row = document.createElement('tr');

    // Define the structure of the row
    row.innerHTML = `
        <td>${document.querySelectorAll('#cart-items tr').length}</td>
        <td><img src="${product.dataset.image}" alt="${productName}"></td>
        <td>${productName}</td>
        <td>$${productPrice.toFixed(2)}</td>
        <td>
            <div class="quantity">
                <button class="minus">-</button>
                <input type="text" class="number" value="1" min="1">
                <button class="plus">+</button>
            </div>
        </td>
        <td class="subtotal">$${productPrice.toFixed(2)}</td>
        <td><div class="circle" onclick="deleteRow(this)">&times;</div></td>
    `;

    // Append row to the cart
    document.getElementById('cart-items').appendChild(row);

    // Update total
    updateTotal();
}


// Function to update total price
function updateTotal() {
    var total = 0;
    var subtotals = document.querySelectorAll('.subtotal');
    subtotals.forEach(function(subtotal) {
        total += parseFloat(subtotal.textContent);
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

// Function to delete a row from the cart
function deleteRow(row) {
    row.parentElement.parentElement.remove();
    updateTotal();
}

// Add event listeners for adding and deleting items
document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('add-to-cart');
    addButton.addEventListener('click', function() {
        var product = this.parentElement.parentElement;
        addToCart(product);
    });

    var deleteButtons = document.querySelectorAll('.circle');
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            deleteRow(this);
        });
    });
});

addToCartButton = document.querySelectorAll(".add-to-cart-button");

document.querySelectorAll('.add-to-cart-button').forEach(function(addToCartButton) {
    addToCartButton.addEventListener('click', function() {
        addToCartButton.classList.add('added');
        setTimeout(function(){
            addToCartButton.classList.remove('added');
        }, 2000);
    });
});

    function addToCart(productName, price) {
        // Redirect to cart page
        window.location.href = 'cart.html';
    }

    function buynow(productName, price) {
        // Redirect to cart page
        window.location.href = 'cart.html';
    }

    function addToCart(productName, price) {
        // Retrieve existing cart items from localStorage or sessionStorage
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new item to the cart
        cartItems.push({ productName: productName, price: price });

        // Store the updated cart items back to localStorage or sessionStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Redirect to cart page
        window.location.href = 'cart.html';
    }

    function buynow(productName, price) {
        // Retrieve existing cart items from localStorage or sessionStorage
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new item to the cart
        cartItems.push({ productName: productName, price: price });

        // Store the updated cart items back to localStorage or sessionStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Redirect to cart page
        window.location.href = 'cart.html';
    }


    // Retrieve cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to dynamically generate cart item HTML
    function generateCartItemHTML(productName, price, quantity, index) {
        const subtotal = price * quantity;
        return `
            <tr>
                <td class="cross-symbol">
                    <div class="circle" onclick="deleteRow(${index})">&times;</div>
                </td>
                <td class="image-cell">
                    <img src="shoe1.png" alt="${productName}">
                </td>
                <td>${productName}</td>
                <td>$${price}</td>
                <td>
                    <div class="quantity">
                        <button class="minus">-</button>
                        <input type="text" class="number" value="${quantity}" min="1">
                        <button class="plus">+</button>
                    </div>
                </td>
                <td class="subtotal">$${subtotal}</td>
            </tr>
        `;
    }

    // Function to render cart items
    function renderCartItems() {
        const cartContainer = document.getElementById('cart-items');
        cartContainer.innerHTML = '';
        cartItems.forEach((item, index) => {
            cartContainer.innerHTML += generateCartItemHTML(item.productName, item.price, item.quantity, index);
        });
    }

    // Render cart items when page loads
    renderCartItems();

    // Function to delete a cart item
    function deleteRow(index) {
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCartItems(); }