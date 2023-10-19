document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
  
    productsContainer.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('product__quantity-control')) {
            const quantityElement = target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
            let quantity = parseInt(quantityElement.textContent);

            if (target.classList.contains('product__quantity-control_inc')) {
                quantity++;
            } else {
                quantity = Math.max(1, quantity - 1);
            }
            quantityElement.textContent = quantity;
        }
    });

    productsContainer.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('product__add')) {
            const productElement = target.closest('.product');
            const id = productElement.dataset.id;
            const imageUrl = productElement.querySelector('.product__image').src;
            const count = parseInt(productElement.querySelector('.product__quantity-value').textContent);
            const cartProductElement = findCartProductElement(id);

            if (cartProductElement) {
                const cartProductCountElement = cartProductElement.querySelector('.cart__product-count');
                cartProductCountElement.textContent = parseInt(cartProductCountElement.textContent) + count;
            } else {
                addCartProductElement(id, imageUrl, count);
            }
        }
    });
});

function findCartProductElement(id) {
    const cartProductsContainer = document.querySelector('.cart__products');
    return Array.from(cartProductsContainer.querySelectorAll('.cart__product')).find((item) => item.dataset.id === id);
}

function addCartProductElement(id, imageUrl, count) {
    const cartProductsContainer = document.querySelector('.cart__products');
  
    cartProductsContainer.innerHTML += `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${imageUrl}">
            <div class="cart__product-count">${count}</div>
        </div>
    `;
}