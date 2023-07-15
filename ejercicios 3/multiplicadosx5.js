/*Esto no funciona :(
    
    function multiplicadox5(array){

    array.forEach(function(element) {
        element*=5;
        console.log(element);
        
    });

    return array;
}*/

function multiplicadox5(array){

   for(i = 0; i < array.length; i++){
      array[i]*=5

   }

    return array;
}

console.log(multiplicadox5([1,2,3,4,5]));