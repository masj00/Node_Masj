"use strict"; //gør så man SKAL deklarere variabler med const eller let

//totalGlobalValue = "Man skal deklarere variabler med const eller let";

//var globalScope ="Global Value"; //var er globalt scoped, og skal undgås

//brug const når muligt ellers let
const whatIsThis = "A String";

//Man kan ændre værdien af en const hvis det er et objekt eller array
//man bruger const for at undgå reassignment ellers let

/*
{ //blok scope pga der mangler key value pair
console.log("whatIsThis");
}
*/


{ //blok scope
    var someVariable = true
    {
        var someVariable = false
    }
    console.log(someVariable); //vil printe false fordi var er globalt scoped
}


{ //blok scope
    let someVariable = true
    {
        let someVariable = false
    }
    console.log(someVariable); //vil printe true fordi let er blok scoped
}

//hvis man bruger let fungere det som forventet
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
    console.log(i);
}, 1000);
}




