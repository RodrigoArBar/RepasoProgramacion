function coloresArcoIris(n) {
    var colores = "";
    var i = 0;
    do {
        if (n[i] == "rojo" || n[i] == "naranja" || n[i] == "amarillo" || n[i] == "verde" || n[i] == "azul" || n[i] == "añil" || n[i] == "violeta") {
            colores += n[i];
        }
    } while (i < n.length);
    console.log(colores);
}
coloresArcoIris(["rojo", "blanco", "verde", "negro", "amarillo", "celeste", "naranja"]);
