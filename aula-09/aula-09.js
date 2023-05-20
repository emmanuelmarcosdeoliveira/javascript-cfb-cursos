let n1 = 30;
let n2 = 14;
//let res = n1 & n2; // operador e (binario)
//let res = n1 ! n2; // operador ou (binário) 
//let res = n1 ^ n2  // Operador  sor (binário)
//console.log(res);


// >> bitwise que desloca para esquerda 
// << bitwise que desloca para a direita 
let res1 = n1 << 1 // significa que estou deslocando um bit para a esquerda o valor de bit pode ser alterado ex (let res1 = n1 << 2 )
// Quando fazemos a operação do Bitwisew a esquerda estou dobrando o meu valor 
console.log(res1)
let res2 = n1 >> 1 // significa que estou deslocando um bit para a direita valor de bit pode ser alterado ex (let res1 = n1 >> 2 )
// Quando fazemos a operação do Bitwisew a direita estou reduzindo  o meu valor a sua metade ex (30) res = (15)  
console.log(res2)