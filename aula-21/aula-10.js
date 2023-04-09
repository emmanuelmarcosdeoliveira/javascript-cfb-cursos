// É uma forma de reduzir ou simplificar uma operação ou condição.

let num=11
// vamos verificar se essa operação é par ou impar.
 let res=num%2

 if(res === 0 ){
   console.log("PAR")
 }else{
   console.log("IMPAR")
 }

 // VAMOS SIMPLIFICAR 
 // (?) é  operador ternário  

 let x = 11
 res=(! (x%2) ? "Par" : "Impar") 
 console.log(res)

 // 0 = false 
 // 1 = true 

 // Para entender melhor 
 // 1° vem um teste lógico ? se verdadeiro ira mostrar "Par" : se falso irá mostrar "Impar"


 let y = 15
 let xy = 10

 res = (y > xy ? "Verdadeiro" : "Falso")
 console.log(res)


   