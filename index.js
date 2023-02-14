/* 
Crea un nuevo proyecto de Node

- Instala la dependencia Winston

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch
*/

const miFuncion = val => {
    if(typeof val === "number" ){
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo numerico"); 
}

console.log(miFuncion(10))

try {
    let doble = miFuncion("PEPE");
    console.log("Esta ejecutandose de manera correcta");
} catch(e){
    console.log("Error");
}

