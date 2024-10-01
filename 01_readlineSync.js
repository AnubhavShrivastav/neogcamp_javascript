// ex-1
console.log("hello World")

//ex-2
var readline = require('readline-sync')
 var userName = readline.question('Enter your name:');
 console.log(userName)

 //ex -3
 //console.log("welcome dev")

 //ex-4
//string concatenation 
let greet = "welcome " + userName;
console.log(greet)

//ex-5
//input
let question_1 = readline.question("Am I older than 25? ")
let answer_1 = "no"

//score part - ex-6
let score = 0;

console.log("you entered " + question_1)

//processing
if(question_1 == answer_1){
    //output
    console.log("You are right!")
    score+= 1
    console.log(score)    
}else{
    //output
    console.log("you are wrong!")
    score-= 1
    console.log(score)
}

let question_2  = "Are you from Banglore ";
let answer_2 = "yes"
let city = readline.question(question_2)

console.log("you entered " + city)

if(city === answer_2){
  score+= 1; 
  console.log("score is: "+ score)
}else{
  score-= 1
  console.log("score is: "+ score)
}

let question_3 = "do you have a pet?";
let answer_3 = "no"

let pet = readline.question(question_3);
console.log("you entered " + pet)

if(pet == answer_3 ){
   score+=1
   console.log("your score: ", score)
}else{
  score-=1
  console.log("Your score", score)
}