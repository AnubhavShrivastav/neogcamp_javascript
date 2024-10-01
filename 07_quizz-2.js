 let readline = require('readline-sync')

 console.log("welcome to Anubhav Quiz")
 let userName = readline.question("Enter Your Name: ");
 let score = 0



 let questions = [
     {
         question : `which is anubhav favourite marvel character ?  
                     a: Thor
                     b. Hulk
                     c. IronMan
                     d.captain America
                     `,
            
         answer : "c"
     },

     {
         question : `which is anubhav favourite cartoon ?  
                     a: Shin Chan
                     b. doremon
                     c. ninja hattori
                     d. power rangers
                     `,
            
         answer : "a"
     },

     {
         question : `which is anubhav favourite color ?  
                     a: green
                     b. blue
                     c. yellow
                     d. red 
                     `,
            
         answer : "d"
     }
 ]

 function play(question,answer){

   let ask = readline.question(question)

     if(ask == answer){
       score+=2;
       console.log(`you answered : ${ask} `)
         console.log(" you are right")
     }else{
         score-=1;
         console.log(`you answered : ${ask} `)
         console.log("you are wrong")
     }
     console.log("------------")
 }

 for(let i =0; i< questions.length; i++){
     let asking = questions[i];
     play(asking.question, asking.answer)
 }
 let currentScore = score
 console.log(`${userName} your final score is: ${currentScore}`)


 let highestScore = [
     {
         userName : "dhruv",
         score : 5,
     },

     {
         userName : "param",
         score : 6,
     },

     {
         userName : "anuraag",
         score : 2,
     }
 ]


for(let i=0; i< highestScore.length; i++){
  if(currentScore < highestScore[i].score){
    console.log(`you lose from ${highestScore[i].userName}`)
  }else{
     console.log(`you beat ${highestScore[i].userName} in the quiz`)
    }
}

