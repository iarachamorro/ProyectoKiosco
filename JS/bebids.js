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
        
        li.innerHTML='<img style="width:100px; height=90px;"  src="' + b["imagen"] + '"/>' +
                '<h3>'+ b["nombre"] + '</h3>' +
                '<p> $'  + b["precio"] +'</p>' +
                '<button class="boton_carrito">Agregar al Carrito</button>'

        

        lista.appendChild(li);

    
    })

}
