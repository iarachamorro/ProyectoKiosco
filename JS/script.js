//Carrusel
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Carrito

        // Código JavaScript para manejar el carrito
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
let total = 0;

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const product = this.parentElement;
                const productName = product.querySelector('h3').textContent;
                const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
                
                // Crear un nuevo elemento para el carrito
                const li = document.createElement('li');
                li.textContent = `${productName} - $${productPrice.toFixed(2)}`;
                cartItems.appendChild(li);
                
                // Actualizar el total
                total += productPrice;
                totalElement.textContent = `Total: $${total.toFixed(2)}`;
            });
        });