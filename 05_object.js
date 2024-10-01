
let superMan= {
    name : "superMan",
    strength : 1000,
    constume : "blue",
    power : "fight",
    intellgent : 500,
}

let batMan = {
    name : "batMan",
    strength : 500,
    constume : "black",
    power : "martial Arts",
    intellgent : 1000,
}

// console.log(superMan.power)
// console.log(superMan.constume)

console.log (batMan.strength < superMan.strength)

const superHero = [superMan,batMan];

for(let i=0; i<superHero.length;i++){
 let prop = superHero[i];
 console.log(prop.name);
 console.log(prop.constume);
 console.log("------------") 
}