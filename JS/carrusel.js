// window.addEventListener("load",function(){
//     console.log("El script se cargó correctamente");
//     var imagenes = [];
//     imagenes[0] = "./imagenes/alfamilka.webp";
//     imagenes[1] = "./imagenes/alfaoreo.webp";
//     imagenes[2] = "./imagenes/alfaoreomilka.webp";
//     imagenes[3] = "./imagenes/alfapepitos.webp";
//     imagenes[4] = "./imagenes/aquariusmanz.webp";
//     imagenes[5] = "./imagenes/barrakitkat.png";
//     var indiceImagenes = 0;
//     var tiempo = 1000;

//     function cambiarImagenes(){
//         document.getElementsByName("slider")[0].src = imagenes[indiceImagenes];

//         if (indiceImagenes < 5){
//             indiceImagenes++;
//         } else {
//             indiceImagenes = 0;

//         }
//     }
//     this.setInterval(cambiarImagenes, tiempo)
// });


window.addEventListener('load',iniciar,false);

    var contador=0;

    function iniciar(){
        setInterval('cambiarImg()',2500);
    }

        var obj=document.getElementById('slider');
    var obj2=obj.getElementsByTagName('img');

    function cambiarManual(sentido)
    {
        if (sentido=="DER") {
            obj2[contador].style.opacity=0;
            if (contador<obj2.length-1) 
            {
                contador++;
                obj2[contador].style.opacity=1;
                console.log('Contador vale ' + contador + ' Longitud ' + obj2.length);
            }
            else
            {
                contador=0;
                obj2[contador].style.opacity=1;
                console.log('Contador vale ' + contador + ' Longitud ' + obj2.length);
            }
        }
        else if (sentido=="IZQ") 
        {
            obj2[contador].style.opacity=0;
            if (contador!=0) 
            {
                contador--;
                obj2[contador].style.opacity=1;
            }
            else
            {
                contador=obj2.length-1;
                obj2[contador].style.opacity=1;
            }
        }
    }

    function cambiarImg(){	        

        if(contador==obj2.length){
            for(var i=0; i<obj2.length; i++){
                obj2[i].style.opacity='0';
                contador--;
            }
            obj2[contador].style.opacity='1';
        }
        else
        {
            obj2[contador].style.opacity='1';
            contador++;
        }
    }