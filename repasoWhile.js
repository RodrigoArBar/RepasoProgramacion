function siPar(numeros) {
    var i = 0;
    while (i < numeros.length) {
        if (numeros[i] % 2 == 0) {
            console.log("Existe un numero par en el conjunto.");
            break;
        }
        i++;
    }
}
console.log("Funcion si numero par en el array");
var cadena = [1, 5, 7, 2];
siPar(cadena);
// function siMPrimeraLetra(nombres:string[])
function siMPrimeraLetra(nombres) {
    var i = 0;
    var salida;
    while (i < nombres.length) {
        if (nombres[i][0] == "M") {
            salida = true;
        }
        else {
            salida = false;
            break;
        }
        i++;
    }
    console.log(salida);
}
// {
//     // let texto: string[] = [];
//     let salida:boolean;
//     for(let nombre of nombres)
//     {
//         if(nombre[0] == "P")
//         {
//             // texto.push(nombre)
//             salida = true;
//             console.log(salida);
//         }else
//         {
//             salida = true;
//             console.log(salida);
//         }
//     }
//     // if(nombres.length == texto.length)
//     // {
//     // }
// }
console.log("\nFuncion si todos los nombres array empiezan por le letra M");
siMPrimeraLetra(["Maria", "Marcos", "Manuel"]);
