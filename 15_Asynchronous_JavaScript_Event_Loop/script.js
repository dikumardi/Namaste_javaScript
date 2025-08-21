/** console.log("Start");
   setTimeout(function cb() {
     console.log("CallBack");
   }, 5000);
 console.log("End");

  * */
 
/**  console.log("Start");
 document.getElementById("btn")
 .addEventListener("click" , function cb() {
    console.log("callback");
    
 });
 console.log("End");
 **/
 /**Event loop - continously monitor the call stack as well  as callback queue .
  * It check if the call stack is empty or not if yes then it check if callback  queue  has function in it or not if yes it quickly push all the function  one after another  into the call stack and pop out of the callback  queue
  */


 /**Let's see how  Fetch  work it work a little different from setTimeout and DOM Api**/

  console.log("Start");
   setTimeout(function cbT() {
     console.log("CB setTimeout");
   }, 5000);

   fetch("https://api.netflix.com")
   .then(function cbF() {
    console.log("CB Netflix");
 
   })
 console.log("End");