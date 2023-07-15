function ordenarNumeros(array){
    

for(j=0; j<array.length-1;j++){
    let posicion = j,menor = array[j];
    
    for(i=j + 1 ; i < array.length; i++){

       if(array[i]< menor){
        
        menor=array[i];
        posicion=i;
        
       }
    } 
    
    array[posicion]=array[j];
    array[j]=menor;
    
};

return array; 
}
  
console.log(ordenarNumeros([3, 23, 11, 15, 6, 19, 32, 9]));