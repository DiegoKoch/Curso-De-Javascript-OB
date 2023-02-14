/* 
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/

function sinParametros(){
    console.log(2>1);
}

sinParametros();


function asinc(){
    setTimeout(5);
}

let miPromesa = new Promise ((resolve, reject) => {
    
    if (true){
        resolve();
    }    else {
        reject();
        
    }
});

    miPromesa.then(() => console.log("Hola soy una promesa"));
    miPromesa.catch(() => console.log("ERROR"));
    miPromesa.finally(() => console.log("Yo siempre me ejecuto"));




function* generadoraPar(){
    par = 0;
    while(true){
        par +=2;
        yield par
        if(par >= 20){
            return par;
        }
    }
}

let gen = generadoraPar();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())