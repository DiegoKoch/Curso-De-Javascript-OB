/* 
Crea un nuevo fichero JS que contenga las siguientes líneas

- Una clase llamada "Estudiante" que tenga:

- Una variable llamada nombre

- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

- 1 Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

- Crea una nueva instancia de "Estudiante"

- 2 Haz la llamada al método obtenDatos
*/

class  Estudiante {
    constructor(nombre, asignaturas){
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

}

let nuevoEstudiante = new Estudiante ("Diego", ["Javascript", "Html", "Css"]);

console.log(nuevoEstudiante);




obtenDatos = {
    nombre: nuevoEstudiante["nombre"],
    asignaturas: nuevoEstudiante["asignaturas"]
}
console.log(obtenDatos);

nuevoEstudiante.edad = 25;
console.log(nuevoEstudiante);