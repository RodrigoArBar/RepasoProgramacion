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