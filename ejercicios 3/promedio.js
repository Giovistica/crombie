function promedio(array, inicio, fin){

    let suma = 0;

for(i = inicio; i < fin + 1; i++){

  suma += array[i];

}

return suma/(fin + 1 - inicio);

}

console.log(promedio([1,2,3,4,5],0,4));
console.log(promedio([9,9,9,9,1],0,3));
console.log(promedio([1,5,5,5,5],1,4));
console.log(promedio([1,1,7,1,1],2,2));
console.log(promedio([1,1,7,3,1,1],2,3));



