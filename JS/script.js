//Carrusel
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

var todos_productos= Array ()
var lista_golosinas = Array();
var lista_bebidas = Array ();
var lista_snacks = Array ();
var lista_galletitas = Array ();
var lista_general = Array();


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

        function cargar_lista_general() {
            objBebidas =  JSON.parse(localStorage.getItem("bebidas"))
            objSnacks = JSON.parse(localStorage.getItem("snacks"))
            objGolosinas =  JSON.parse(localStorage.getItem("golosinas"))
            objGalletitas =  JSON.parse(localStorage.getItem("galletitas"))

            console.log(objBebidas.length)
            console.log(objSnacks.length)
            console.log(objGolosinas.length)
            console.log(objGalletitas.length)

            list_general_convertir(objBebidas)
            list_general_convertir(objSnacks)
            list_general_convertir(objGolosinas)
            list_general_convertir(objGalletitas)

            console.log("lista general: ", lista_general)

            

        }

    
        document.addEventListener("DOMContentLoaded", cargar_lista_general);

        window.addEventListener("load", function () {
            //console.log("index.html", this.localStorage.getItem("bebidas"))
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
                //console.log(xhttp.responseText)
                let productos = JSON.parse (xhttp.responseText)
                productos.forEach(p => {
                    console.log (p)
                    if (p["categoria"] == "golosinas"){
                        lista_golosinas.push (p)
                        console.log (lista_golosinas)
                    }
                    if (p["categoria"] == "bebidas"){
                        lista_bebidas.push (p)
                        console.log (lista_bebidas)
                    }
                    if (p["categoria"] == "snacks"){
                        lista_snacks.push (p)
                        console.log (lista_snacks)
                    }
                    if (p["categoria"] == "galletitas"){
                        lista_galletitas.push (p)
                        console.log (lista_galletitas)
                    }
                });
                localStorage.setItem("bebidas", JSON.stringify(lista_bebidas))
                localStorage.setItem("snacks", JSON.stringify(lista_snacks))
                localStorage.setItem("golosinas", JSON.stringify(lista_golosinas))
                localStorage.setItem("galletitas", JSON.stringify(lista_galletitas))
            }
            
            

        };
        xhttp.open("GET", "https://roque1234.pythonanywhere.com/traer_productos", true);
        xhttp.send();
        })


        function list_general_convertir(objListaCategoria) {
        
           for (let index = 0; index < objListaCategoria.length; index++) {
            console.log(index)
            const element = objListaCategoria[index];
            lista_general.push(element)
          }
        }




