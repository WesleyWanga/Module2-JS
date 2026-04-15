let student = {
    name: "Wesley", 
    age: 16,
    course: "JavaScript"
}
console.log(student.name)
console.log(student.age)
console.log(student.course)
// for ...in - used to loop through the keys of an object 
// for ( let  key in object){
//     // code
// }
for (let key in student){
    console.log(student[key])
}
let book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018
};
for (let x in book){
    console.log(x,book[x])
}
//object.keys()

let car = {
    brand: 
}
//object.values()
//object.entries()