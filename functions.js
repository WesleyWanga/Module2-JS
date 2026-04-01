//what is a function in JS - a block of code that is going to be performing a specific task.(a reusable block of code that performs a specific task)
// console.log("Welcome to class")
// console.log("Welcome to class")
// console.log("Welcome to class")
// console.log("Welcome to class")
//Syntax

// function functionName(){
//     block of code
// }
//DEFINING A FUNCTION
// function greet(){
//     console.log("Hello");
// }
// //CALLING A FUNCTION
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// function introduce(){
//     console.log("Hello");
//     console.log("My name is Wesley")
//     console.log("I am learninga Javascript")
// }
// introduce();

// adding parameters in a function

function greet(name){ 
    console.log("Hello " + name);
}
greet("Wesley"); 
greet("Hannah");
greet("Felix");

function introduce(name,age){
    console.log("My name is "+name);
    console.log("I am $(age) years old");
}
introduce("Wesley",18)
introduce("Faith",20)

// function sum(a,b,c,d,e){
//     console.log(a+b+c+d+e);
// }
// sum(2,7,34,90,56)
// function showName(){
//     console.log("Wesley");
//     return "Wesley"
// }
// let student=showName();
// console.log(student);
function sumOfTwoNumbers(x,y){
    let sum;
    sum=x+y;
    return sum;
}
console.log(sumOfTwoNumbers(100,89));
// let sum =sumOfTwoNumbers(100,89)//189
// sum+=90;//sum=sum+90
// console.log(sum);
function welcomeStudent (){
    function sayHello(){
        console.log("Hello Student");
    };
    sayHello();
    console.log( "We are learning Javascript Functions")
}
welcomeStudent();

//nested functions with parameters

function outer (){
    function greet(name){
        return(`Hello my name is ${name}`);
    }
    return greet("John");
}
console.log(outer())