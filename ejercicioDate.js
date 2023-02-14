/* 
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

let fechaHoy = new Date();

console.log(fechaHoy);

let fechaNumero = new Date(1997, 10, 26);

console.log(fechaNumero);

let calculoNacimiento = new Date();

console.log(calculoNacimiento > fechaNumero);

let fechaNacimiento = new Date("novembre, 26, 1997");

console.log(fechaNacimiento);

let mes = fechaNacimiento.getMonth();

console.log(mes);

let anio = fechaNumero.getFullYear();

console.log(anio)

