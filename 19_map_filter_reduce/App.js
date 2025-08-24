             /**Function Chaining */
const users = [   
     { firstName: "akshay", lastName: "saini", age:26},
     { firstName: "diku", lastName: "mardi", age:23},
     { firstName: "abc", lastName: "aba", age:60},
     { firstName: "xyz", lastName: "zxz", age:26},

]

//lisit of full names
// {"akshay saini", "diku mardi","abc aba","xyz zxz"}

// const output = users.map((x) => x.firstName +" "+ x.lastName)
// console.log(output);

// find out how many user have a particular age(same age)
// const output = users.reduce(function (acc, curr) {
//  if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//  }   
//  else{
//     acc[curr.age] = 1 
//  }
//  return acc ;
// },{})
// console.log(output);


//we need  find out first name of all the people  whose age is less than 30
// const output =users.filter((x) => x.age < 30)
// .map((x) => x.firstName)
// console.log(output);

//we can achieve this with the help of reduce function
 const output =users.reduce( function (acc , curr) {
    if (curr.age <30) {
        acc.push(curr.firstName)
    }
            return acc ;

 },[])
 console.log(output);
 