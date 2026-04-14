let numbers=[10,20,30, 40, 55, 15];

// check odd numbers and return them

// let odds= numbers.filter(function(num){
//     return num %2 !==0;
// })

// // check odd numbers and return them
// let evens= numbers.filter(function(num){
//     return num %2 ==0;
// })
// console.log(evens)
// console.log(odds)

// By using if
numbers.filter(function(num){
    if (num % 2 === 0){
        evens.push(num);
        else{
            odds.push(num);
        }
    }
});