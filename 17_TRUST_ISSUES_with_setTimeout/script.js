/**Normal exmaple of setTimeout how it work **/
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
    
},5000);

console.log("End");

//Here we are blocking the main thread
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate <  startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("expire");
