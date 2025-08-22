/**Functional programming is not possible without higher order function* */
/*Higher order function :A function which take another function as a argument or return for it is know as higher order function  */

/** 

function x() {
    console.log("hello");   
}
function y(x) {
    x();
    
}

**/

/**
 
const radius  = [3, 1 ,2 , 4];

const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(Math.PI * radius[i] * radius[i]);  
    }
    return output ;
};
console.log(calculateArea(radius));


const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(2 * Math.PI * radius[i] );  
    }
    return output ;
};
console.log(calculateCircumference(radius));



const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(2 * radius[i] );  
    }
    return output ;
};
console.log(calculateDiameter(radius));

The first problem here is repeatiting a lot almost 90% of code are same 
                        DRY
**/

const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (arr, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// const calculateArea = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//       output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output ;
// };
// console.log(calculateArea(radius));
