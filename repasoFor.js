// Funciones
// Funcion devuelve impares hasta numero parametro de entrada
function impares(x) {
    for (var i = 0; i <= x; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
console.log("Funcion Impares");
impares(5);
// funcion revertir array
function invertir(n) {
    var nuevacadena = [];
    for (var i = (n.length - 1); i >= 0; i--) {
        nuevacadena.push(n[i]);
    }
    return nuevacadena;
}
console.log("Funcion Revertir Sistema");
console.log(invertir([1, 2, 3, 4, 5]));
function coloresArcoIris(colores) {
    var texto = "";
    for (var i = 0; i < colores.length; i++) {
        if (colores[i] == "rojo" || colores[i] == "naranja" || colores[i] == "amarillo" || colores[i] == "verde" || colores[i] == "azul" || colores[i] == "añil" || colores[i] == "violeta") {
            texto += colores[i] + " ";
        }
    }
    console.log(texto);
}
console.log("Funcion si color del Arco Iris");
coloresArcoIris(["rojo", "blanco", "verde", "negro", "amarillo", "celeste", "naranja"]);
function siMPrimeraLetra(nombres) {
    // let texto: string[] = [];
    var salida;
    for (var _i = 0, nombres_1 = nombres; _i < nombres_1.length; _i++) {
        var nombre = nombres_1[_i];
        if (nombre[0] == "P") {
            // texto.push(nombre)
            salida = true;
            console.log(salida);
        }
        else {
            salida = true;
            console.log(salida);
        }
    }
    // if(nombres.length == texto.length)
    // {
    // }
}
console.log("Funcion si todos los nombres array empiezan por le letra P");
siMPrimeraLetra(["Pepe", "edro", "Patricia"]);
function numCaracteres(texto) {
    var numero = 0;
    for (var i = 0; i < texto.length; i++) {
        numero += texto[i].length;
    }
    return numero;
}
console.log("Funcion suma del numero caracteres de todos los elementos del array");
console.log(numCaracteres(["rojo", "verde", "perro"]));
function parImpar(x) {
    if (x % 2 == 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
console.log("Funcion si numero es par o imo");
parImpar(5);
console.log("Funcion si numero par o impar del numerto total de caracteres de diferentes arrays (dos ultimas funciones concatenadas)");
parImpar(numCaracteres(["Casa", "Coche", "Ciudad", "Cesta"]));
parImpar(numCaracteres(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]));
parImpar(numCaracteres(["Venezuela", "Veneno", "Voltaje"]));
