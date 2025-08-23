// mmap is used to transform a array
/**Transformation mean double of a array */
// Double  = [10,2,6,4,12] */
// Triple = [15, 3 , 9 , 6 , 18]
//Binary - ["101", "1", "11", "10" , "110"]

// const arr = [5, 1 ,3 ,2 ,6];


/**function double(x) {
    return x * 2 ;
}

function triple(x) {
    return x * 3 ;
}

function binary(x) {
    return x.toString(2)
} */
// const output = arr.map(double);
// const output = arr.map(triple);

// The above code can be rewritten as :
// const output = arr.map(function binary(x) {
//     return x.toString(2)
// } );

// console.log(output);

// OR -> Arrow function

// const binaryArr = arr.map((x) => x.toString(2));
// console.log(binaryArr);

 /** Filter function--- Basically used to filter the value inside an array .suuppose we are used to filter the odd one out or filter greater than 3 or filter even number in array or divisible by 2  */

const array = [5, 1, 3, 2, 6];

//filter odd values
 function isOdd(x) {
   return x % 2 ;
}
function isEven(x) {
    return x  / 2 ;
  
}
const output = array.filter(isOdd)
// const  = arr.filter(isOdd)
console.log(output);

