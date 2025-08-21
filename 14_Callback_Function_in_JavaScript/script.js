
// setTimeout(function () {
//     console.log("timer");
    
// },5000);

// function x(y) {
//     console.log("call x");
//     y();
// }
// x(function y() {
//     console.log("Call y");
    
// });
//y over here is callback function


/** callback function - function are **/
/***setTimeout(function () {
       console.log("Timer");
 
},5000)
function x(y) {
    console.log("x");
    y();
}

x(function y() {
        console.log("y");

})
        
callback function is nothing but a when you pass a function inside a function is that the  first function when you pass is called callback function .callback give you acces to whole aSynchronous thing inside a  Synchronous single-threaded language .it is because when you run a code when their is function and inside it a lot of code is there so it take time to executed so here comes Blocking the main thread for solve this we use callback so use asynchronous things so no call stack will be blocked it works without blocking the main thread*/



/**Event Listeners **/

function attachEventListener() {
   let count = 0;
document.getElementById("clickMe")
.addEventListener("click", function xyz() {
    console.log("Button Clicked",++count);
    
}) 
}
attachEventListener();



