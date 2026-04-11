let fruits=['mango', 'banana', 'orange', 'apple']
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// looping: repeating a block of code again and again until a condition is no longer true
// length: the number of items in the array
console.log(fruits.length)
// for loop: most common loop used in JS
// for (intialization , condition, update){
//     //code to run
// }

// intialization:create a variable to start counting
// for (let i=0;i<fruits.length;i++){ //i=i+1
//     console.log(fruits[i]);
// }

//for...of loop

// for (let item of array){
//     //code
// }

// for (let fruit of fruits){
//     console.log(fruit)
// }

// let numbers=[10, 20, 30];
// for (let num of numbers){
//     console.log(num)
// }
// forEach: built-in methods (can also access index)

// array.forEach(function(item){
//     //code
// })

//Anonymous function used 
fruits.forEach(function(fruit, index){
    console.log(index,fruit)
})

//Arrow function version
// fruits.forEach((fruit)=>{
//     console.log(fruit)
// })

let numbers=[10, 20, 30, 67, 80, 2, 4, 11];
let total=0

// for (let i=0;i<numbers.length;i++){
//     total=total+numbers[i]
// }
// console.log(total)

for (let i=0;i<numbers.length;i++){
    // console.log(numbers[i]*2)
    numbers[i]=numbers[i]*2
}
console.log(numbers)