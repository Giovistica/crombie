let producto1 = {

    inventario: "5",
    precio: "5",
    marca:"dia",
    nombre: "arroz"
}

let producto2= {

    inventario: "6",
    precio: "6",
    marca:"ades",
    nombre: "jugo"
}

let producto3 = {

    inventario: "54",
    precio: "7",
    marca:"luchetti",
    nombre: "fideo"
}

let productos = [producto1, producto2, producto3];


function productosDeLaMarca(marca){

    return productos.filter(producto => producto.marca == marca);
    
}
console.log("Marca Ades: ",productosDeLaMarca("ades"));

function productosMasCarosQue(precio){

    return productos.filter(producto => producto.precio > precio);
   
}
console.log("Mas caros que 5: ",productosMasCarosQue(5));

function cambiarMarca(marca1,marca2){

  productos.forEach(element => { 
    if(element.marca==marca1) element.marca = marca2;
  })
  return productos
}
console.log("cambiar marca : ", cambiarMarca("ades","luchetti"));

function muchasCosas(){
    let suma = 0;
    let precios= [];

    productos.forEach(element =>{
        suma=element.precio;
        precios.push(element.precio);

    }) 

    console.log("La suma es : ", suma);
    console.log("El promedio es : ", suma/productos.length);
    console.log("El maximo es : ", Math.max(...precios));
    console.log("El minimo es : ", Math.min(...precios));
   
  
}
muchasCosas();