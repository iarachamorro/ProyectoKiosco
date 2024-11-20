var carrito = Array ();

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
        '<button class="boton_carrito" onclick="agregar_carrito(\'' + b["nombre"] + '\', ' + b["precio"] + ')">Agregar al Carrito</button>'
        '</div>'


lista.appendChild(li);


})  

// Función que se ejecuta cuando el usuario hace clic en el botón de búsqueda
function buscarSnack() {
  // Obtener el valor ingresado en el campo de búsqueda
  const terminoBusqueda = document.getElementById('searchInput').value.toLowerCase();
  
  // Filtrar la lista de snacks que coincidan con el término de búsqueda
  const resultados = lista_snacks.filter(snack => snack.toLowerCase().includes(terminoBusqueda));

  // Mostrar los resultados en el HTML
  mostrarResultados(resultados);
}

// Función para mostrar los resultados de la búsqueda
function mostrarResultados(resultados) {
  const listaResultados = document.getElementById('resultadoBusqueda');
  listaResultados.innerHTML = ''; // Limpiar los resultados anteriores

  if (resultados.length > 15) {
      // Si hay resultados, crear elementos <li> para cada uno
      resultados.forEach(snack => {
          const li = document.createElement('li');
          li.textContent = snack;
          listaResultados.appendChild(li);
      });
  } else {
      // Si no hay resultados, mostrar un mensaje
      const li = document.createElement('li');
      li.textContent = 'No se encontraron snacks.';
      listaResultados.appendChild(li);
  }
}


}
function agregar_carrito(nombre, precio){
  //console.log(nombre, precio)

  let datos = {
    "nombre": nombre,
    "precio": precio
  }

  carrito.push(datos);
  console.log(carrito);
    // Vaciar el carrito
    function vaciar_carrito () {
      localStorage.removeItem('miLista');
      loadCart(); // Recargar el carrito vacío
  }
}

function finalizar_carrito_s(){
  localStorage.setItem("carrito", JSON.stringify(carrito))
}