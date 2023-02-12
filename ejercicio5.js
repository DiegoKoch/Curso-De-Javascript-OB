/* 
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */

let productos = ["Gaseosa", "Pan", "Hamburguesas", "Empanadas", "Agua"];
console.log(productos);

let agregandoAceite = productos.push("Aceite de girasol")
console.log(productos);

let eliminandoAceite = productos.pop();
console.log(productos);

let peliculas = [
    { titulo: "Harry Potter",
    director: "Pepe",
    fecha: 2000
},{
    titulo: "El Señor de los Anillos",
    director: "Maria",
    fecha: 2022
},{
    titulo: "Nemo",
    director: "Mario",
    fecha: 2015
}
]

let peliculasActuales = peliculas.filter(peliculas => peliculas.fecha > 2010, peliculas);

console.log(peliculasActuales);

let largo = peliculas.map( prop => prop.director.length, peliculas);

console.log(largo);


let nuevaListaPeliculas = largo.concat (peliculasActuales);

console.log(nuevaListaPeliculas);

let nuevaListaPeliculas2 = [...largo , ...peliculasActuales];

console.log(peliculasActuales2);

