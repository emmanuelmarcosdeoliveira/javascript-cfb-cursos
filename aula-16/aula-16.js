// FOR IN e FOR OFF.
let num = [10, 20, 30, 40, 50];
const objs = document.getElementsByTagName("div");
// FOR IN e FOR OFF
// Esses dois tipos são mais utlizados para  para percorrer coleções. (para verificar valores dentro de um Array)

// Modelo de FOR tradicional;
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
// FOR OFF
// RETORNAS OS ELEMNTOS QUE TEMOS DENTRO DA CONDIÇÃO
for (o of objs) {
  console.log((o.innerHTML = "Cursos"));
}
// FOR IN
// RETORNA OS INDICES DENTRO DESSA COLEÇÃO
for (o in objs) {
  console.log(objs[o].innerHTML);
  console.log(o);
}
