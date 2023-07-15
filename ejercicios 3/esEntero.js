
function esEntero(numero){

    try {
        if(!Number.isInteger(numero)){
            throw new Error(numero + " no es un entero")
        }}
        catch (e) { console.log(e);
        
        }
}


esEntero(10);
esEntero(-1);
esEntero("hola");
esEntero(3.5);
esEntero(true);