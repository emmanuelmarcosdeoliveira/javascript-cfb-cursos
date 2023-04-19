// ESSE LOOP WHILLE É USADO QUANDO NÃO TEMOS CERTEZA DA QUANTIDADES DE VEZES QUE QUEREMS USA-LO.
// ELE IRA DEPENDER DE UMA CONDOCIONAL
//TEMOS QUE TER ATENÇÃO AS CONDIÇÕES PARA QUE ELE NÃO SE TORNE UM LOOP INFINITO.
// Ele executa funções enquato

// let n = 0;
// while (n < 10) {
//   console.log(n);
//   n++;
// }

let x = 10;
let fat = 1;
while (x >= 1) {
  fat *= x;
  x--;
}
console.log(fat);
