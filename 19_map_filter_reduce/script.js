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

//  const array = [5, 1, 3, 2, 6];

//filter odd values
//  function isOdd(x) {
//    return x % 2 ;
// }
//filter Even values
// function isEven(x) {
//     return x  % 2 === 0  ;
  
// }
//filter greater than 4 
/**const ans =array.filter(function greaterThan4(x) {
  return  x > 4  ;
  
}); */

// arrow function example
/**const ans =array.filter((x)=> {
  return  x > 4  ;
  
});
console.log(ans);
 */
// console.log(ans);

// const output = array.filter(isOdd)
// const  = arr.filter(isOdd)
// console.log(output);


/**Reduce : basically used at a place where you take all the elements of an array and come up with a single value of them */
// example suppose if you have to take this array and you have to iterate over each and every element and find out sum of all these elements in this array...
const arr = [5, 1, 3, 2, 6];
// sum or max

//find sum of these array
/**
 * function findSum(arr) {
    let sum  = 0;
    for (let i = 0; i < arr.length; i++) {
       sum = sum + arr[i];
        
    }
    return sum ;
}
console.log(findSum(arr));
 */

/**
const output =arr.reduce(function (acc, curr) {
    acc = acc + curr ;
    return acc
},0); 
console.log(output);

**/
//find max
function findMax(arr) {
    let max  = 0;
    for (let i = 0; i < arr.length; i++) {
     if (arr[i] > max) {
        max =  arr[i];
     }
        
    }
    return max ;
}
console.log(findMax(arr));

const output =arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr ;
    }
    return max;
},0); 
console.log(output);