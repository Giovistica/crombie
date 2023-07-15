function obtenerMayusculas(frase){
    let mayusculas= []
    for(i = 0; i< frase.length; i++){
     
        
        if (frase[i]>"@" && frase[i]<"["){
            
           mayusculas.push(frase[i]);
        }
    }
    return mayusculas;
}
console.log(obtenerMayusculas("LaCrOmbiNeTa"));