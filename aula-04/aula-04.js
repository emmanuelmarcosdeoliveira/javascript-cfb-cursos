'user strict'

function teste(){
   let nome = "Bruno"
   if(true){
      console.log("dentro do IF do teste teste:" + nome)
   }
   console.log("dentro do teste:" + nome)
}


teste()
console.log("fora de teste:" + nome)
// Estamos usando o modo Estrito!
// Quanto mais variáveis eu criar mais memória meu programa vai consumir!
// o Var tenha algumas falhas e isso pode ser um rpoblema dentro do nosso código!
// Ele pode ser acessada mesmo ela não não pertecendo ao escopo global.
// O let só acessada dentro do seu escopo para cima.
function curso(){
   const curso = "JavaScript"
   console.log(curso)
}
curso()

// Ao declarar uma variavel const ela não poderá ser mudada dentro do nosso programa.
