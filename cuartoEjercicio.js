

/* Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba
2
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
 */


let altura = 1.89;
let peso = 89.6
let alturaNumeroEntero = console.log(parseInt(altura));
let alturaNumeroFlotante = console.log(parseFloat(altura));
let pesoNumeroFlotante = console.log(parseFloat(peso));
let alturaRedondeadaHaciaArriba = console.log(altura.toFixed());
let pesoRedondeadoHaciaAbajo = console.log(Math.floor(peso));
let maxValorJs = Number.MAX_VALUE
let pruebaMaxValorJs = console.log(maxValorJs + 1);

