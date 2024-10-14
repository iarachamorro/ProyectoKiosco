//Carrusel
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

var todos_productos= Array ()
var lista_galletitas = Array();
var lista_bebidas = Array ();
var lista_snacks = Array ();


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

    

        window.addEventListener("load", function () {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText)
                let productos = JSON.parse (xhttp.responseText)
                productos.forEach(p => {
                    console.log (p)
                    if (p["categoria"] == "galletitas"){
                        lista_galletitas.push (p)
                        console.log (lista_galletitas)
                    }
                    if (p["categoria"] == "bebidas"){
                        lista_bebidas.push (p)
                        console.log (lista_bebidas)
                    }
                    if (p["categoria"] == "snacks"){
                        lista_snacks.push (p)
                        console.log (lista_snacks)
                    }
                });
                localStorage.setItem("bebidas", JSON.stringify(lista_bebidas))
            }
        };
        xhttp.open("GET", "https://roque1234.pythonanywhere.com/traer_productos", true);
        xhttp.send();
        })








