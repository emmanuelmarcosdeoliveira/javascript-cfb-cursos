let num1 = 10;
let num2 = "10"
let num3 = 08;

console.log(num1 === num2);

// uma forma de verificar aonde nossa aplicação está rodando 
// esse código não roda no Node.js tem que ser usada no navegador!
if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/WebOs/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
){
   console.log("Celular")

   }else {
      console.log("PC")
   }