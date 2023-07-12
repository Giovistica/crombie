unction(arrayDeAlumnos){

    // array = [{nombre:pepito, nota:9},{nombre:fulanito, nota:8}]

    let mayor = 0;
    let menor = 10;
    let mayoresNotas = [];
    let menoresNotas = [];

    for(i=0; i< arrayDeAlumnos.length; i++) {

        if(arrayDeAlumnos[i].nota>mayor) {
            mayor= arrayDeAlumnos[i].notas}
        if(arrayDeAlumnos[i].nota<menor) {
            menor= arrayDeAlumnos[i].notas}    
    }
    
    for(i=0; i<arrayDeAlumnos.length; i++){
    
        if(arrayDeAlumnos[i].nota==mayor){
            mayoresNotas.push(arrayDeAlumnos.nombre)
        }
    
        if(arrayDeAlumnos[i].nota==mayor){
            menoresNotas.push(arrayDeAlumnos.nombre)
        }
        
    }
    console.log("Los mayores son : " + mayoresNotas);
    console.log("Los menores son : " + menoresNotas);
}