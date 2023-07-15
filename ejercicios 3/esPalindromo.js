function esPalindromo(cadena){

    cadena =cadena.toLowerCase()
    .replace(/\s/g,"")
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, '')
    
    let reverse = cadena.split("").reverse().join("");

return    cadena == reverse;
}

console.log(esPalindromo("¿Acaso hubo búhos acá?"));

