function mayorNota(arrayDeAlumnos){

    // array = [{nombre:"pepito", nota:9},{nombre:"fulanito", nota:8}]

    let mayor = 0;
    let menor = 10;
   

    for(i=0; i< arrayDeAlumnos.length; i++) {

        if(arrayDeAlumnos[i].nota>mayor) {
            mayor= arrayDeAlumnos[i].nota}
         
        if(arrayDeAlumnos[i].nota<menor) {
            menor= arrayDeAlumnos[i].nota} 
          
    }
    
  
    console.log("Los mayores son");
    arrayDeAlumnos.filter(alumno => alumno.nota === mayor).forEach(alumno=> {console.log(alumno)});
    console.log("Los menores son");
    arrayDeAlumnos.filter(alumno => alumno.nota === menor).forEach(alumno=> {console.log(alumno)
        
    });;
  
}


let alumnos = [{nombre:"pepito", nota:9},{nombre:"fulanito", nota:8},{nombre:"maría", nota:9},{nombre:"pedro", nota:2},{nombre:"jose", nota:2}];

mayorNota(alumnos);