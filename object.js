// let student = {
//     name: "Wesley", 
//     age: 16,
//     course: "JavaScript"
// }
// console.log(student.name)
// console.log(student.age)
// console.log(student.course)
// // for ...in - used to loop through the keys of an object 
// // for ( let  key in object){
// //     // code
// // }
// for (let key in student){
//     console.log(key,student[key])
// }
// console.log(Object.keys(student))

// Object.keys(student). forEach(function(key){
//     console.log(`${key} :${student[key]}`)
// })
// let book = {
//     title: "Atomic Habits",
//     author: "James Clear",
//     year: 2018
// };
// for (let x in book){
//     console.log(x,book[x])
// }
// //object.keys()

// // let car = {
// //     brand: 
// // }
// //object.values()
// const customer={
//     name: "Wesley",
//     age: 30,
//     email: "john@gmail.com",
//     isActive: true
// };
// console.log(Object.values(customer))

// //object.entries()
// // console.log(Object.entries(customer))
// Object.entries(customer).forEach(function([key,value]){
//     console.log(`${key} : ${value}`);
// });

// //Destructive operation
// const inventory={
//     apples:20,
//     oranges:10
// }

// for ( let key in inventory){
//     inventory[key]-=5;
// }
// // console.log(inventory)

// // non-destructive operation 
// const updatedInventory=Object.keys(inventory).reduce(function(acc,key){
//     acc[key]=inventory[key]-2;
//     return acc
// },{});
// console.log(updatedInventory)
// console.log(inventory)

const userInfo={
    firstName: "Jane",
    lastName: "Doe",
    employer: "Moringa School",
    jobTitle: "Technical Mentor",
    projects:[{title:"Chat App", description:"A messaging platform"},
        {title:"Task Manager", description:"An app for managing task"}
    ],
    students: [{firstName: "Ziza", lastName: "Kariuki"},{},
    ]
}
for (let key in userInfo){
    if (!Array.isArray(userInfo[key])){
        console.log(userInfo[key])
    }
}