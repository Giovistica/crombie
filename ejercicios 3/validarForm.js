function validarForm(email, password, description){

    if
        (email.includes("@") && email.includes(".com") &&
        /[A-Z]/.test(password) && 7<password.length<17 &&
        !description.includes("-") && description.length < 401)
    
     {console.log(" Registro exitoso");}

    else {throw new Error("Datos incorrectos");}
}


try {validarForm("pepita@pistolera","12345678A","Me gusta robar bancos");}
catch (e) {console.log(e);}
try {validarForm("pepita@pistolera.com","12345678A","Me gusta robar bancos");}
catch (e) {console.log(e);}