//  Switch Case ele avalia uma expressão, e de acordo com o resultado dessa expressão ele compara com os (cases que estão programados) caso seu resultado esteja igual a alguns do seu case ele executa um comando, caso contrário ele cai para o bloco default.

let colocacao  = 04
switch(colocacao){
   case 1:
      console.log("Primeiro Lugar")
      break

   case 2:
      console.log("Segundo Lugar")
      break
   case 3:
      console.log("Teceiro Lugar")
      break
   case 4: case 5: case 6:
         console.log("Premio de participação")
         break
default:
   console.log("Não Subiu ao podio")
   break
}