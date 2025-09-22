
//Math.random() gives a random number between 0 and 1
//Math.floor() rounds down til nærmeste heltal

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

//console.log(getRandomInt(5, 10)); 

//Anonym funktion
const anonFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};


//Ikke lambda funktion de er deklaret forsskelligt (godt til web frameworks)
const arrowFunction1 = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};
//console.log(arrowFunction());



//Action = Callback funktion, den bliver sendt videre som et argument til en anden funktion
//Lav sådan en til eksamen og forklar (nemt eksempel) (og tjek definition for en sikkerheds skyld)
function genericActionPerformer(name, action) {
return action(name);
};

//Normal funktion som action
function cookingAction(name) {
    return `${name} enjoys cooking!`;
}
console.log(genericActionPerformer("Jens", cookingAction));

//Arrow funktion som action
//`${name} loves to run!` er en template string, der indsætter værdien af name i teksten.
//tager imod et parameter name og returnerer en string der siger at personen elsker at løbe.
const arrowFuncRun = (name) => {
    return `${name} loves to run!`;
}
    

console.log(genericActionPerformer("Marco", arrowFuncRun));

//Lucas er mit første argument og (name) => `${name} likes asking questions` er mit andet argument som er en anonym arrow funktion
console.log(genericActionPerformer("Lucas", (name) => `${name} likes asking questions`));