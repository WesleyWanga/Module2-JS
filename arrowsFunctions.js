//=>
//     let getName= function(){
//     return "Wanga";
// }
// let getName=()=>{return "Wesley"}
// getName();

let introduce=(name,country)=>{
    console.log("My name is "+ name);
    console.log("I come from "+country);
}
introduce("Wesley","SouthAfrica")

// let getName=()=>console.log("Wanga");
let getName=()=>"Wesley"
console.log(getName())