// function x() {
//     var a = 7 ;
//     setTimeout(function () {
//         console.log(a);       
//     }, 1000)
//     console.log("hello world");
    
// }
// x();

/**jab v code ko run karte hai to run ho jata hai likin s set time out  lagate hai to  function ka timer chate rahata hai jab tak time uska khatma nahi hota hai tab tak set time out ka bahara ka code chalte rahata hai aur settimeout ka code run ho kkhatm ho jane par settimeout ka code run ho jata hai */
/**
function x() {
    for(let i =1 ; i<=5; i++){
    setTimeout(function () {
        console.log(i);       
    }, i * 1000)
}
    console.log("hello world");

}
x();

	We want to print 1 to 5, each after 1, 2, 3, 4, 5 seconds respectively
so here above code does it so here  we are using it inside the function x after that we have given for loop and given codition and give settimeout function so here it works beacaus it let is block scope and every time i point diffferent reference i value to it after after loop  but in case of var it run for loop first upto end of the condition then run the settime out and then i point the same reference value every time to avoid this we have made another function name with close  and inside that function we have set the settimeout now  
we have pass the argument of the loop and catch it on the paramater so each time for loop will run pass different value of i to the close function and print the exact value what we want* */


function x() {
    for(var i =1 ; i<=5; i++){
   function close(y) {
     setTimeout(function () {
        console.log(y);       
    }, y * 1000)
   }close(i)
}
    console.log("hello world");

}
x();

/** bina  **/

