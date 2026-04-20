// import {add, value} from './math.js';

// console.log(add(13,56));
// console.log(value)

// //use of sumfunction 
// import sumfunction  from './math.js';

// console.log(sumfunction(13,56));

// import {multiply, divide} from './math.js';
// console.log(multiply(5,7));
// console.log(divide(4,1))

// console.log(global)

const myPromise= new Promise((resolve,reject)=>{
    let success = true;
    if (success){
        resolve("Operation successful")
    }
    else{
        reject("Operation failed ")
    }
})
myPromise
.then(result=>{console.log(result)})
.catch(error=>{console.log(error)})