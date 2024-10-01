//function

// function add (num1,num2){
//   let sum = num1 + num2;
//   return sum; 
// }

// console.log( "The sum of num1 and num2 is: "  + add(2,4))


// function prods(num1,num2){
// let mul = num1 * num2
// let add = mul + num1 + num2
//  return add
// }

// console.log(prods(3,6))


let readline = require('readline-sync')
let score = 0

function play(question,answer){
let userAnswer = readline.question(question);
console.log("you entered",userAnswer)
 
if(userAnswer == answer){
  console.log("you are right")
  score+=1
  console.log("score is: ",score)
}else{
    console.log("you are wrong")
    score-=1
    console.log("your score: ", score)
}
}

play("how old are you ? ",19)
play("do you have a bank account? ","yes")
play("how many vehicle do you owned? ",0)
play("do you love pets? ","no")

