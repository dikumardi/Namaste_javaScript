// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
        
        
//     }
//     y();
    
// }
// x();

/*jab function k  */

/**we can assign function to a variable 
 * and we can pass function in an  argument
 * we cab retur function eg below
 */

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);      
//     }
//   return  y;
    
// }
// var z = x();
// console.log(z);
// z();
/**yaha pe y ko return kar rahe hai to ye  pura function x() me return ho jayega isko save karne k liye hum ise z m save kar rahe hai karne k bad hum iska function ko call kar rahe hai call karne k bad ye console log me jo a hai iska value print ho jata hai qki ye closures hai jo ki function k andar hai aur lexical environment hai or hum isko ase v lik sakte hai 
function x() {
    var a = 7;
   return function y() {
        console.log(a);      
    }
    
}
var z = x();
console.log(z);
z(); 



*/

function x() {
    var a = 7;
    function y() {
        console.log(a);      
    }
        a = 100;
  return  y;
    
}
var z = x();
console.log(z);
z(); 

/**upara wala code sab same hai likin ye a=100 updation ho raha hai iska matalab phele a ka value local environment m 7 tha bad m iska value update ho k 100 hogya hai aur ye same work karta hai above se*/