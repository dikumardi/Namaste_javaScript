/**Function Statement :function a(){
    console.log("a is called");
    
}
a(); this below code is called function statement .in hoisting it can be hoisted **/


/**Function Expression: The below code is function express we can use the  function as a value it can be both anonymous function and named function.if hoisted can be done here it give error because we have assing value as a function   **/
var b = function (){
    console.log("b is called");
    
}
b();
/**Function Declaration : function statement and function declaration are same  thing**/

/**Anonymous Function: is nothing but a function without name is called anonymous function 
 function () {
    
}
 .It throw error beacuse if you create a function it should have name so the error would be syntax error Function statements require a function name that why  when you write in function expression it is correct
 **/

/**Named Function Expression : it is similiar to function expression with function name in it is called named function expression**/
var c = function xyz() {
    console.log(xyz);
    
    
}
c();
// xyz(); here we cannot  call  function beacuse it is treated as value not as a function so we can call it by its variable name.

/** Difference between parameters & Argument 
 * ANS : when we call a function at that time me can pass a value or a function those value are called Argument and the place where we receive the value  identifier or params are called paramater**/



/**First class Function : is nothing but  a value where we can assign a  value as a function is called first class function it is also called first class citizen**/
// var d = function name(fn) {
//     console.log(fn);
    
// }
// d(function () { 
    
// });

var d = function name(fn) {
    console.log(fn);
    
}
function xyz() {
    
}
d(xyz); //same thing as above

// we can return function from a function
var d = function name(fn) {
    return function () {
       ;
    }
    
}
console.log(d());

