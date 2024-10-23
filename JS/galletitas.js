window.addEventListener("load", function(){
    cargargalletitas()
})
function cargargalletitas() {
    
    // Selecciona el contenedor de la lista
    const lista = document.getElementById('miLista');
    console.log("lista", lista)
    let lista_galletitas = JSON.parse(localStorage.getItem("galletitas"))
    console.log(lista_galletitas)

      lista_galletitas.forEach(b => {
        // Crea un nuevo elemento <li>
        const li = document.createElement('div');
        
        li.innerHTML='<img style="width:70px; height=70px"  src="' + b["imagen"] + '"/>' +
                '<h3>'+ b["nombre"] + '</h3>' +
                '<p>' + b["precio"] +'</p>' +
                '<button class="add-to-cart">Agregar al Carrito</button>'

        

        lista.appendChild(li);

    
    })

}