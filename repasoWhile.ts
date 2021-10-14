function siPar(numeros: number[])
{
    
    let i: number = 0;

    while(i < numeros.length)
    {

        if(numeros[i]%2 == 0)
        {
            console.log("Existe un numero par en el conjunto.");
            break;
        }
        
        i++;
        
    }
}

console.log("Funcion si numero par en el array");

let cadena: number[] = [1, 5, 7, 2];
siPar(cadena);


// function siMPrimeraLetra(nombres:string[])


function siMPrimeraLetra(nombres: string[])
{
    let i : number = 0;

    let salida:boolean;

    while(i < nombres.length)
    {
        if(nombres[i][0] == "M")
        {
            salida = true;
        }else
        {
            salida = false;
            break;
        }

        i++;
    }

    console.log(salida);
}


console.log("\nFuncion si todos los nombres array empiezan por le letra M");

siMPrimeraLetra(["Maria", "Marcos", "Manuel"])