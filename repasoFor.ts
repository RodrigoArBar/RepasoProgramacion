// Funciones


// Funcion devuelve impares hasta numero parametro de entrada

function impares(x:number)
{
    for(let i = 0; i <= x; i++)
    {
        if(i % 2 != 0)
        {
            console.log(i);
            
        }
    }
}

console.log("Funcion Impares");

impares(5);

// funcion revertir array

function invertir(n: number[])
{
    let nuevacadena:number[] = [];

    for(let i = (n.length-1); i>=0 ; i--)
    {
        nuevacadena.push(n[i])
    }

    return nuevacadena;

}

console.log("Funcion Revertir Sistema");

console.log(invertir([1, 2, 3, 4, 5]));



function coloresArcoIris(colores:string[])
{
    let texto: string = "";

    for(let i =0; i < colores.length; i++)
    {
        if(colores[i] == "rojo" || colores[i] == "naranja" || colores[i] == "amarillo" || colores[i] == "verde" ||colores[i] == "azul" || colores[i] == "añil" || colores[i] == "violeta")
        {

            texto += colores[i]+" ";
        }

    }

    console.log(texto);
    
}

console.log("Funcion si color del Arco Iris");

coloresArcoIris(["rojo", "blanco", "verde", "negro", "amarillo", "celeste", "naranja"]);


function numCaracteres(texto:string[])
{
    let numero:number = 0
    for(let i = 0; i <texto.length; i++)
    {
        numero += texto[i].length;
    }

    return numero
}

console.log("Funcion suma del numero caracteres de todos los elementos del array");


console.log(numCaracteres(["rojo", "verde", "perro"]));


function parImpar(x:number)
{
    if(x %2 == 0)
    {
        console.log("El numero es par");
        
    }else{
        console.log("El numero es impar");
        
    }
}

console.log("Funcion si numero es par o imo");

parImpar(5);


console.log("Funcion si numero par o impar del numerto total de caracteres de diferentes arrays (dos ultimas funciones concatenadas)");

parImpar(numCaracteres(["Casa", "Coche", "Ciudad", "Cesta"]));

parImpar(numCaracteres(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]));

parImpar(numCaracteres(["Venezuela", "Veneno", "Voltaje"]));