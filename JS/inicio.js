function inicio() {
    let datos = {
        "email": document.getElementById("email").value,
        "clave": document.getElementById("clave").value
    }
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
       console.log(xhttp.responseText)
    }
};

xhttp.open("POST", "http://roque1234.pythonanywhere.com/login", true);
xhttp.setRequestHeader("Content-Type", "application/json")
xhttp.send(JSON.stringify(datos));
}

function crear_cuenta(){
    let datos = {
        "usuario": document.getElementById("nombre").value,
        "mail": document.getElementById("correo").value,
        "clave": document.getElementById("contraseña").value

    }
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
       console.log(xhttp.responseText)
    }
};

xhttp.open("POST", "http://roque1234.pythonanywhere.com/login", true);
xhttp.setRequestHeader("Content-Type", "application/json")
xhttp.send(JSON.stringify(datos));
}