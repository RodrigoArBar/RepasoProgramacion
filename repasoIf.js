function signoZodiaco(fechaNacimiento) {
    console.log("RECUERDA!! \nRango meses = [0-11] \nRango dias = [0-30]");
    if ((fechaNacimiento.getMonth() == 11 && 21 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 30) || (fechaNacimiento.getMonth() == 0 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 18)) {
        console.log("Tu signo del zodiaco es: Capricornio");
    }
    else if ((fechaNacimiento.getMonth() == 0 && 19 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 30) || (fechaNacimiento.getMonth() == 1 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 17)) {
        console.log("Tu signo del zodiaco es: Acuario");
    }
    else if ((fechaNacimiento.getMonth() == 1 && 18 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 28) || (fechaNacimiento.getMonth() == 2 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 19)) {
        console.log("Tu signo del zodiaco es: Piscis");
    }
    else if ((fechaNacimiento.getMonth() == 2 && 20 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 30) || (fechaNacimiento.getMonth() == 3 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 18)) {
        console.log("Tu signo del zodiaco es: Aries");
    }
    else if ((fechaNacimiento.getMonth() == 3 && 19 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 30) || (fechaNacimiento.getMonth() == 4 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 19)) {
        console.log("Tu signo del zodiaco es: Tauro");
    }
    else if ((fechaNacimiento.getMonth() == 4 && 20 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 30) || (fechaNacimiento.getMonth() == 5 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 19)) {
        console.log("Tu signo del zodiaco es: Géminis");
    }
    else if ((fechaNacimiento.getMonth() == 5 && 20 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 30) || (fechaNacimiento.getMonth() == 6 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 21)) {
        console.log("Tu signo del zodiaco es: Cancer");
    }
    else if ((fechaNacimiento.getMonth() == 6 && 22 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 30) || (fechaNacimiento.getMonth() == 7 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 21)) {
        console.log("Tu signo del zodiaco es: Leo");
    }
    else if ((fechaNacimiento.getMonth() == 7 && 22 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 30) || (fechaNacimiento.getMonth() == 8 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 21)) {
        console.log("Tu signo del zodiaco es: Virgo");
    }
    else if ((fechaNacimiento.getMonth() == 8 && 22 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 30) || (fechaNacimiento.getMonth() == 9 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 21)) {
        console.log("Tu signo del zodiaco es: Libra");
    }
    else if ((fechaNacimiento.getMonth() == 9 && 22 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 30) || (fechaNacimiento.getMonth() == 10 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 20)) {
        console.log("Tu signo del zodiaco es: Escorpio");
    }
    else if ((fechaNacimiento.getMonth() == 10 && 21 <= fechaNacimiento.getDay() && fechaNacimiento.getDate() <= 30) || (fechaNacimiento.getMonth() == 11 && fechaNacimiento.getDay() >= 0 && fechaNacimiento.getDay() <= 20)) {
        console.log("Tu signo del zodiaco es: Sagitario");
    }
}
let fecha = new Date(2020, 0, 18);
console.log(fecha);
console.log("Funcion signo del zodiaco");
signoZodiaco(fecha);
// Funcion devuelve continente al parametro de entrada pais
function guessContinent(pais) {
    const Europa = ["España", "Portugal", "Francia", "Alemania", "Italia"];
    const AmericaDelSur = ["Argentina", "Brasil", "Chile", "Uruguay", "Colombia"];
    const Asia = ["China", "Japon", "Corea del Sur ", "India", "Iran",];
    const Oceania = ["Australia", "Nueva Zelanda", "Tonga", "Samoa", "Fiyi"];
    const AmericaDelNorte = ["Estados Unidos", "Canada", "Haiti", "Panama", "Republica Dominicada"];
    const Africa = ["Sudafrica", "Nigeria", "Egipto", "Marruecos", "Ruanda"];
    if (Europa.includes(pais)) {
        console.log("El pais esta en el continente Europa");
    }
    else if (Asia.includes(pais)) {
        console.log("El pais esta en el continente Asia");
    }
    else if (Oceania.includes(pais)) {
        console.log("El pais esta en el continente Oceania");
    }
    if (AmericaDelSur.includes(pais) == true) {
        console.log("El pais esta en el continente America del Sur");
    }
    else if (AmericaDelNorte.includes(pais)) {
        console.log("El pais esta en el continente America del Norte");
    }
    else if (Africa.includes(pais)) {
        console.log("El pais esta en el continente Africa");
    }
    else if (Europa.includes(pais) == false && Europa.includes(pais) == false && Asia.includes(pais) == false && Africa.includes(pais) == false && AmericaDelNorte.includes(pais) == false && AmericaDelSur.includes(pais) == false && Oceania.includes(pais) == false) {
        console.log("El pais no esta incluido en la funcion");
    }
}
console.log("\nFuncion devuelve continente de parametro de entrada pais");
guessContinent("Australia");
// Problema al ser array de arrays no devuelve continente**
