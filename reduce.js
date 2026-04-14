let numbers= [10, 6, 43, 21, 78];
let sum=numbers.reduce(function(acc,current){
    return acc+current;
},1);
console.log(sum)

let items=['a', 'b', 'c', 'd']

let count =items.reduce(function(acc){
    return acc+1;
},0)
console.log(count)