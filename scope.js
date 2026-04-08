// Scope: the area in your codes where a variable can be accessed.
// Global scope: variables that are going to be accessed or available everywhere in the program that I have created hence I can access it. (variables declared outside all functions and blocks are here)
// let school="Moringa";

// function showSchool(){
//     school="ALX"
//     console.log(school);
// }
// showSchool()
// console.log(school)
// // function scope: a variable declared inside a function and can only be used inside that function.

// function greet(){
//     var message ="Hello Student"; //let or const
//     message="Welcome"
//     console.log(message);
// }
// greet();
// console.log(message)

// //block scope: when we have an if statement where we are able to create a variable. (Any code inside curly braces: if statement, loops)

// if (true){
//     var color = "blue";  //let or const
//     console.log(color)
// }
// console.log(color)

// nested scope: when one scope inside another scope

// let school = "Code Academy";// Global variable
// function outerFunction(){
//     let teacher= "Nancy"; // variable inside a function scope
//     function innerFunction(){
//         let student= "Alice";
//         console.log(school);
//         console.log(teacher);
//         console.log(student);
//     }
//     innerFunction()
//     // console.log(student); // outerFunction cannot access the innerFunction variables
// }
// outerFunction();

// innerFunction is not able to access the teacher variable. (innerFunction can be able to access the variables in the outerFunction.)
// let school = "Code Academy";// Global variable
// function outerFunction(){
//     let teacher= "Nancy"; // variable inside a function scope
//     console.log(teacher);
// }
// outerFunction();
// function innerFunction(){
//         let student= "Alice";
//         console.log(school);
//         console.log(teacher); //works while in commentted
//         console.log(student);
//     }
//     innerFunction();

// involving if
// let school = "Code Academy";// Global variable
// function outerFunction(){
//     let teacher= "Nancy"; // variable inside a function scope
    
//     function innerFunction(){
//         let student= "Alice";
//         console.log(school);
//         console.log(teacher);
//         console.log(student);
        
//         // console.log(message);
//     }
//     innerFunction()
//     if (true){
//             let message="Welcome to class"
//             let student= "John"
//             console.log(student);
//         }
//         }
// outerFunction();

let appName="Student Portal";//global scope
function login(){
    let user= "Nancy"; //function scope
    if (true){
        let message ="Welcome"; //block scope
        console.log(appName);
        console.log(user)
        console.log(message)
    } // works (all three); inside the block
    console.log(user) //work; inside the function but outside the block scope
    // console.log(message) //fails; outside the block scope
}
login()
console.log(appName) //works; inside global scope
// console.log(user); //fails; outside the function scope