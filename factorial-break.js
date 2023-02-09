
//  ->
// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let i = 1;
let num = 10;

while(i < 10){
    if(i <= 11){
        num = num * i
        i++
        
        if (num > 403200){
            break;
        }
        console.log(num);
    }
}