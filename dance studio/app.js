// Initial call to update subtotal when the page loads
updateSubtotal();

        // Function to add product to cart
        function addToCart(productName, price) {
            // Get cart items container
            var cartItemsContainer = document.getElementById("cart-items");

            // Create new row for the product
            var newRow = document.createElement("tr");

            // Construct the HTML for the new row
            newRow.innerHTML = `
                <td class="cross-symbol">
                    <div class="circle" onclick="deleteRow(this)">&times;</div>
                </td>
                <td class="image-cell">
                    <img src="ballatshoeimg.png">
                </td>
                <td>${productName}</td>
                <td>$${price}</td>
                <td>
                    <div class="quantity">
                        <button class="minus">-</button>
                        <input type="text" class="number" value="1" min="1">
                        <button class="plus">+</button>
                    </div>
                </td>
                <td class="subtotal">$${price}</td>
            `;

            // Append the new row to the cart items container
            cartItemsContainer.appendChild(newRow);
        }

        // Function to delete row from cart
        function deleteRow(element) {
            element.closest("tr").remove();
        }
