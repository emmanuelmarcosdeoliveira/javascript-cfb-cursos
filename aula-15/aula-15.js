// Lop FOR as repetições do loop são chamadas de interações.

// lop definidos  - qunado sabemos a quantodade de interações que ele tem que fazer

// lop indefinidos - quando não sabemos a quantidade de interações que ele tem que fazer.

// Nessa Aula iremos aprender o loop definidos chamados de -->  for (para)
/*Exemplo:  (inicialização ou contador; condição ; controle ) {
-------------------------------------------------------------
-------------------------------------------------------------
}
*/

console.log("inicio do Programa");

for (let i = 0; i < 100; i++) {
  //Condição do for (enquanto ela for verdadeira ele executa o for se for falsa ele sai do bloco.)
 // console.log(`${i} - CFB Cursos`);
  if (i % 2 == 0) {
    console.log(i + " e par");
  } else {
    console.log(i + " é impar");
  }
}

console.log("Fim do Programa");
