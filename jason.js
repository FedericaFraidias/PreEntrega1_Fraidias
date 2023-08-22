// PRE ENTREGA

// variables globales
let usuario;
let correo;
let resultado;

//FUNCIONES
function diametro (a) {
    let diametro = a / 3;
    return diametro;
}

    //ancho total que requiere la tela
function anchoTotal (a, b) {
    let anchoTotal = a * 2 + b;
    return anchoTotal;
}

function radio (a) {
    let radio = a / 2;
    return radio;
}

    //cálculadora de patronaje
function calculo () {
    alert("Las medidas requeridas son en cm.");
    let cintura = parseInt(prompt("Ingrese el ancho de su cintura:"));
    let largo = parseInt(prompt("Ingrese el largo desde su cintura a sus pies:"));
    alert("El ancho total de la tela debe ser de " + anchoTotal(largo, diametro(cintura)) + " cm. Doblala por la mitad, en la unión, marca un radio de " + radio(diametro(cintura)) + " cm para la cintura.");
    let resultado = ("El ancho total de la tela debe ser de: " + anchoTotal(largo, diametro(cintura)) + " cm.");
    console.log(resultado);
}

class Usuarios {
    constructor (nombre, correo, pedido) {
    this.nombre = usuario;
    this.correo = correo;
    this.pedido = resultado;
    }   
}  

// array
const pendientes = [];

//comando
alert("Calculemos el patronaje para una falda de 180°");
let seleccion = prompt("Ingrese el comando: \n-Ingresar\n- Salir\n- Calcular");
while (seleccion) {
    switch (seleccion) {
        case "Salir":
            alert ("Gracias, hasta pronto.");
            break;
        
        case "Ingresar":
            let usuario = prompt("Ingrese su nombre de usuario:");
            let correo = prompt("Ingrese su correo electrónico de contacto:");
            alert("Hola " + usuario + ", ¿Querés calcular el patronaje de falda?");
            calculo ();
            break;
        
        case "Calcular":
            calculo();
            break;
        
        default:
            //bucle
            alert ("Ups! Comando incorrecto.Las mayúsculas importan.");
            seleccion = prompt("Ingrese el comando: \n-Ingresar\n- Salir\n- Calcular");
            continue; // !!!! lo agregué porque el break cortaba el bucle
    } 
    break; // !!!! lo agregué porque quedaba en bucle infinito
} 

console.log(Usuarios);