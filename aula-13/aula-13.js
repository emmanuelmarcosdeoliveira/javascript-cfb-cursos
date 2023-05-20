// Vamos entender todas as possibilidades do perador Spread. (Esse operador foi emplementado no ES6)

// Ele quebra um array (Spread == > Espalhar)

let n1 = [10, 20, 30];
let n2 = [11, 22, 33, 44, 55];
let n3 = [...n1, ...n2]; // spread estou espalhando os elementos de n1

//console.log("n1: " + n1)
//console.log("n2: " + n2)
console.log("n3: " + n3);
console.log("tipo de  n3: " + typeof n3);

// além de operações com arrays também podemos fazer cópias de objetos

const jogador1 = { nome: "Emmanuel", energia: 100, vidas: 3, magia: 150 };
const jogador2 = { nome: "Bruno", energia: 100, vidas: 5, velocidade: 80 };
const jogador3 = { ...jogador1, ...jogador2 };
console.log(jogador3);

// outra vantagem do Spread em funcções

const soma = (v1, v2, v3) => {
  return v1 + v2 + v3;
};
let valores = [1, 5, 4];
soma(1, 5, 4);
console.log(soma(...valores));


// Vantangens de Spread no HTML 
const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")];
objs2.forEach(element =>{
   element.innerHTML="Curso"
})

console.log(objs1);
console.log(objs2);

