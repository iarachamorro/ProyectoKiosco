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

function finalizar_carrito_g(){
  localStorage.setItem("carrito", JSON.stringify(carrito))
}
