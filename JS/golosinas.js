var carrito = Array ();


window.addEventListener("load", function () {
  cargargolosinas();
});
function cargargolosinas() {
  // Selecciona el contenedor de la lista
  const lista = document.getElementById("miLista");
  console.log("lista", lista);
  let lista_golosinas = JSON.parse(localStorage.getItem("golosinas"));
  console.log(lista_golosinas);

  lista_golosinas.forEach((b) => {
    // Crea un nuevo elemento <li>
    const li = document.createElement("div");

    li.innerHTML= '<div class="carta">'+
    '<img style="width:100px; height=90px;"  src="' + b["imagen"] + '"/>' +
    '<h3>'+ b["nombre"] + '</h3>' +
    '<p> $'  + b["precio"] +'</p>' +
    '<button class="boton_carrito">Agregar al Carrito</button>'
    '</div>'


lista.appendChild(li);


})
}

//function Agregar_productos_carrito(id, nombre, precio) {
  //console.log(`Producto agregado: ID - ${id}, Nombre - ${nombre}`);
  //console.log(precio)
  // Aquí puedes agregar la lógica para añadir el producto al carrito
 //let producto ={
    //"nombre": nombre,
    //"id_producto": id,
    //"precio": precio
 //}

 //carrito.push(producto)

 //console.log(carrito)



//}
