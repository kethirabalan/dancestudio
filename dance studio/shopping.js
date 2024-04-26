// Add event listeners to the plus and minus buttons
document.querySelectorAll('.quantity .minus').forEach(button => {
    button.addEventListener('click', () => {
        // Decrease the value in the input field by 1 if it's greater than 1
        const inputField = button.nextElementSibling;
        if (parseInt(inputField.value) > 1) {
            inputField.value = parseInt(inputField.value) - 1;
            updateSubtotal(); // Call updateSubtotal after changing the quantity
        }
    });
});

document.querySelectorAll('.quantity .plus').forEach(button => {
    button.addEventListener('click', () => {
        // Increase the value in the input field by 1
        const inputField = button.previousElementSibling;
        inputField.value = parseInt(inputField.value) + 1;
        updateSubtotal(); // Call updateSubtotal after changing the quantity
    });
});

// Calculate and update subtotal based on quantity and price
function updateSubtotal() {
    const priceElement = document.querySelector('.shopping-cart td:nth-child(4)');
    const quantityElement = document.querySelector('.shopping-cart .number');
    const subtotalElement = document.querySelector('.shopping-cart .subtotal');

    const price = parseFloat(priceElement.textContent.replace('$', ''));
    const quantity = parseInt(quantityElement.value);
    const subtotal = price * quantity;

    subtotalElement.textContent = '$' + subtotal.toFixed(2);
}

// Initial call to update subtotal when the page loads
updateSubtotal();
