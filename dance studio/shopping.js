// Function to dynamically add a product to the cart
function addToCart(product) {
    // Get product details
    var productName = product.dataset.name;
    var productPrice = parseFloat(product.dataset.price);

    // Create row for the cart
    var row = document.createElement('tr');

    // Create cells for the row
    var snCell = document.createElement('td');
    snCell.textContent = document.querySelectorAll('#cart-items tr').length;
    row.appendChild(snCell);

    var imageCell = document.createElement('td');
    imageCell.innerHTML = '<img src="' + product.dataset.image + '">';
    row.appendChild(imageCell);

    var productCell = document.createElement('td');
    productCell.textContent = productName;
    row.appendChild(productCell);

    var priceCell = document.createElement('td');
    priceCell.textContent = productPrice.toFixed(2);
    row.appendChild(priceCell);

    var quantityCell = document.createElement('td');
    quantityCell.innerHTML = '<div class="quantity">' +
        '<button class="minus">-</button>' +
        '<input type="text" class="number" value="1" min="1">' +
        '<button class="plus">+</button>' +
        '</div>';
    row.appendChild(quantityCell);

    var subtotalCell = document.createElement('td');
    subtotalCell.classList.add('subtotal');
    subtotalCell.textContent = productPrice.toFixed(2);
    row.appendChild(subtotalCell);

    var actionCell = document.createElement('td');
    actionCell.innerHTML = '<div class="circle" onclick="deleteRow(this)">&times;</div>';
    row.appendChild(actionCell);

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

