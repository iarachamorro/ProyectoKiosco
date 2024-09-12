// carrusel
window.addEventListener("load",function(){
    console.log("El script se cargó correctamente");
     var imagenes = [];
     imagenes[0] = "./imagenes/alfamilka.webp";
     imagenes[1] = "./imagenes/alfaoreo.webp";
     imagenes[2] = "./imagenes/alfaoreomilka.webp";
     imagenes[3] = "./imagenes/alfapepitos.webp";
     imagenes[4] = "./imagenes/aquariusmanz.webp";
     imagenes[5] = "./imagenes/barrakitkat.png";
     var indiceImagenes = 0;
     var tiempo = 1000;

     function cambiarImagenes(){
         document.getElementsByName("slider")[0].src = imagenes[indiceImagenes];

         if (indiceImagenes < 5){
             indiceImagenes++;
         } else {
             indiceImagenes = 0;

         }
     }
     this.setInterval(cambiarImagenes, tiempo)
});

