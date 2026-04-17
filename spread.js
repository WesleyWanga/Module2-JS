// const colors=["red", "blue", "orange", "green"]
// console.log(colors)// an array of colors
// console.log(...colors);// a single value

// // combining arrays with spread
// const activeUsers=["Alice", "Brian"];
// const newUsers = ["Grace", "John"];

// const allUsers = [...activeUsers, ...newUsers]
// console.log(allUsers)
// // copying array using spread
// const originalFruits = ["apple", "banana", "orange"]
// const copyFruits = [...originalFruits]
// console.log(originalFruits)
// console.log(copyFruits)

// // spraed with objects 
// const user  = {
//     name: "Wesley",
//     age: 26,
//     email: "wesley@gmail.com"
// }
// const updatedUser = {
//     ...user,
//     email: "wesleyww@gmail.com",
//     city: "Nairobi"
// };
// console.log(user);
// console.log(updatedUser)

// function collectNames (...names){
//     console.log("Inside function:", names)
// }
// const students = ["Alice", "Brain", "John"]; //an array of students
// collectNames(...students) //collectNames("Alice", "Brian", "John")

// function addNumbers(a,b){
//     return a+b;
// }
// console.log(addNumbers(4, 5, 3))


// Existing product lists
const featuredProducts = ["Laptop", "Headphones", "Smartwatch"];
const newArrivals = ["4K Monitor", "Gaming Mouse"];
const onSaleProducts = ["Tablet", "Wireless Keyboard"];

const weeklyCatalog=[promotionalItem, ...featuredProducts, ...newArrivals, ...]
cdonsole.log(weeklyCatalog)