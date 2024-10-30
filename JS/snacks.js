window.addEventListener("load", function(){
    cargarsnacks()
})
function cargarsnacks() {
    
    // Selecciona el contenedor de la lista
    const lista = document.getElementById('miLista');
    console.log("lista", lista)
    let lista_snacks = JSON.parse(localStorage.getItem("snacks"))
    console.log(lista_snacks)

    lista_snacks.forEach(b => {
        // Crea un nuevo elemento <li>
        const li = document.createElement('div');
        
        li.innerHTML= '<div class="carta">'+
        '<img style="width:100px; height=90px;"  src="' + b["imagen"] + '"/>' +
        '<h3>'+ b["nombre"] + '</h3>' +
        '<p> $'  + b["precio"] +'</p>' +
        '<button class="boton_carrito">Agregar al Carrito</button>'
        '</div>'


lista.appendChild(li);


})  

}