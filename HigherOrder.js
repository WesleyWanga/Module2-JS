// Callback and Higher Order Functions

function printValue(value){
    console.log(value)
}
//call the function 
printValue(3);
printValue(true);
printValue("Hello")

// function greet (name){
//     console.log("Hello" + name);
// }
// function shout(name){
//     console.log(name.toUpperCase())
// }
// function executeSomething(x){ // I can use "callback" or "x"
//     x(" Wesley") // greet(Wesley)
// }
// executeSomething (shout)
// executeSomething(greet)


// function(){
//     console.log("Hello Wesley");
// }
// // function shout(name){
// //     console.log(name.toUpperCase())
// // }
// function executeSomething(callback){
//     callback()
// }
// executeSomething(greet);

function operate(a,b,operation){
    return operation(a,b);
}
function add (x,y){
    return x+y;
}

console.log(operate(5,3,add));