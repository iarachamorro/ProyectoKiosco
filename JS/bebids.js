var carrito = Array ();
window.addEventListener("load", function(){
    cargarBebidas()
})
function cargarBebidas() {
    
    // Selecciona el contenedor de la lista
    const lista = document.getElementById('miLista');
    console.log("lista", lista)
    let lista_bebidas = JSON.parse(localStorage.getItem("bebidas"))
    console.log(lista_bebidas)

    lista_bebidas.forEach(b => {
        // Crea un nuevo elemento <li>
        const li = document.createElement('div');
        
        li.innerHTML= '<div class="carta">'+
                '<img style="width:100px; height=90px;"  src="' + b["imagen"] + '"/>' +
                '<h3>'+ b["nombre"] + '</h3>' +
                '<p> $'  + b["precio"] +'</p>' +
                '<button class="boton_carrito" onclick="agregar_carrito(\'' + b["nombre"] + '\', ' + b["precio"] + ')">Agregar al Carrito</button>'
                '</div>'
        

        lista.appendChild(li);

    
    })

}


function agregar_carrito(nombre, precio){
    //console.log(nombre, precio)
  
    let datos = {
      "nombre": nombre,
      "precio": precio
    }
  
    carrito.push(datos);
    console.log(carrito);
  }
  
  function finalizar_carrito_b(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }