/* Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor */

let misDatos = {
    nombre: "Diego",
    apellido: "Koch",
    edad: 25,
    altura: "1,89",
    eresDesarrollador: true
}

let buscandoMiEdad = misDatos.edad;

console.log(misDatos)
console.log(buscandoMiEdad);

let lista = [
    misDatos,
{
    nombre: "Leonardo",
    apellido: "Ruiz",
    edad: 27,
    altura: "1,90",
    eresDesarrollador: false
},
{
    nombre: "Belen",
    apellido: "Barcena",
    edad: 31,
    altura: "1,75",
    eresDesarrollador: false
}];

console.log(lista);

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaNueva = lista;

listaNueva.sort((a, b) => b.edad - a.edad);

console.log(listaNueva);

