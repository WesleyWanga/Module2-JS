let scores=[32, 78, 45, 90, 51, 39, 67];
let passingscores=[];
let i = 0;

while(i<scores.length){
if(scores[i]>=50){
    passingscores.push(scores[i]);
}
    i++;
}
console.log("Passing Scores:",passingscores);

let messages = passingscores.map(function(score){
    return "Score" + score + ": Pass"
});
console.log("Message:",messages);

let totalScore= passingscores.reduce(function(acc,score){
    return acc+score;
},0);
let average = totalScore/passingscores.length;
console.log("Average:", average);
console.log("Total Score:", totalScore);

// ordering your array from the highest to the lowest
scores.sort(function(a,b){
    return b-a 
});
console.log(scores)