
 
let a =10;
var b = 90 ;
const c = 4 ;
function name(params) {
    var x =98;
    let y = 5 ;

    
}
console.log(a); // not attach to window
console.log(b); //  attach to window
console.log(c);// not attach to window
console.log(x);// not attach to window
console.log(y); //not attach to window

/*An empty JS file is still a valid program because JavaScript automatically creates a Global Execution Context (GEC).

In browsers, the global object is called the window object.

In the global scope, this === window.

Only var declarations and functions are added to the window object.

let and const are global, but not added to the window object.

Variables declared inside a function (var, let, or const) are local and cannot be accessed outside the function.

In Node.js, the global object is called global, not window.

 */



