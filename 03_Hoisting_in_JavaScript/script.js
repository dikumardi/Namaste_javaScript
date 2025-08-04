 /*
  Hoisting in js  by which you can access this variable and functions even before you initialize it  or put some value in it  without any errors


  jab code  run hota hai tab ko one line code at a time chalta hai iska matlab hai execution context jo ki 2 phase me hota hai memory and code memory execution context m variable and function ko store kiya jata hai aur isme variable ndefined hota hai  aur functon m uska pura code rahata  hai ye sif normal function m hota hai agar arrow function hota to ye variable ki tarah behave karta aur ek function hai jo ki usko variable name dene se wo  variable ki trah act karta  hai eg 
  var username = getName();
console.log(x);
console.log(getName);


 */


 var x = 7;
function getName() {
    console.log("Hello World  ");
    
}

getName();
console.log(x);
console.log(getName);

