let readline = require('readline-sync')

let userName = readline.question("what is your name? ")
let score = 0;
let Name = "anubhav"; 

let give = readline.question(`hey! ${userName} Do you Know Anubhav ?`)
let nextStep = "yes"

function play (question,answer){

if(give == nextStep){
   
let asking = readline.question(question)

if (asking === answer){
    score+=1;
    console.log("right")
    console.log("Your score: ",score)

}else{
    score-=1;
    console.log("wrong")
    console.log("Your score: ",score)

}
}
console.log("-------------")
}

let arr = [
 {
      question : `${Name} favourite superHero is: `,
      answer : "thor"
    },

    {
        question : `which city does ${Name} live: `,
        answer  : "mahuva"
    },

    {
        question : `does ${Name} love pet: `,
        answer : "no"
    }
]


for (let i=0; i< arr.length; i++){
    let ask = arr[i]
    play(ask.question, ask.answer)
}
 
 console.log(`${userName} Your final score is: `,score)

