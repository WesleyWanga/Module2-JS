function add (a,b){
    return a+b;
}
let value =10;
export {add, value}; // named export

//use of sumfunction
export default add;

let value =10;
function multiply (a,b){
    return a*b
}

function divide (a,b){
    return a/b
}
export {multiply, divide};