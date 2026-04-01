//Operators are symbols that tell JavaScript what action to perform.
//Arithmetic operators help with calculations.(+,-,*,/,\,**)
let a =10;
let b=5
let c=20
let d=3
//a+b
console.log(a+b);
//a-b
console.log(a-b);
//a*b*c
console.log(a*b*c)
//%:modulus to get the remainder after division
console.log(c%d)
// **:exponentiation
console.log(b**d)//5*5*5=125

//Assignment operators help store and update values.(=)
a=25;
a+=3;//a+3=a
a-=4;
a*=3;
console.log(a);


//Comparison operators help compare values.

console.log(a>b);24>5
console.log(d<a);3<24
console.log(b>=c);5>=20
console.log(a<=c);24<=20

//Equality Operators :==(loose equality) and ==(strict equality)
console.log(6=="6")//true
console.log(6==="6")//false
// loose inequalty(!=)& strict inequality (!==)
console.log(10!=5)//true
console.log(10!==true)//true
console.log("Hello"==="Hello")

//Logical operators help combine conditions.(&&,||,!)
console.log(true&&true)//true
console.log(true&&false)//false
console.log(true||false)//true
console.log(false||false)//false
console.log(!false)//true
console.log(!true)//false
let age=20;
let hasID=true;
console.log(age>=18 && hasID)//true
// expression vs statement 
// expression
10+5;
//statement 
console.log(10+5);