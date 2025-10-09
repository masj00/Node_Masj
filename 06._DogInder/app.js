import express from 'express';
import path from 'path';

const app = express();


//sender ikke gør det bare tilgængeligt at gøre / altså når vi ville hente fra matches.html fra matches.js
app.use(express.static("public"));

console.log(process.env.PORT); // kan ændre en miljøvariabler eksistere i node
//scripts nogle duer kun med mac/bash så man skal have cross-env npm fx (npm install --save-dev cross-env) /den laver en
//devDependencies

//======PAGES======


import { frontpagePage, matchesPage } from './util/pagesUtil.js';

    //behøver ikke da vi lavede frontpage ovenover
    //res.sendFile(path.resolve('public/pages/frontend/index.html'));
    //man sender bare hele html filen ind som string
app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/matches", (req, res) => {
    res.send(matchesPage);
});



//=======API==========
//task create a /api/matches route that returns 5 dog objects contain urls

//MULIG FEJLLLL!!!!!!! (skal være med lille?)
import { getMatches } from './util/matchesutil.js';

app.get("/api/matches", async (req, res) =>  {
    const matches = await getMatches();
    res.send({ data: matches });
});

//Leksion 6/7
//arbejder også i package.json under scripts


// false, null, undefined, NaN, 0, "". = faulty values
const w = false || null || 5 || NaN;
console.log(w)

//MANDATORY Can define and run scripts with NPM og Know how to define environment variables natively in Node.js (natively = not using any libraries).
const PORT = Number(process.env.PORT) || 8080; //kan ændre dette til en miljøvariable (i stedet for 8080)
//kan skrive PORT=XXXX node app.js i terminal (kan overloade den)
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});

//wrappers (til scripts fx nodemon er en wrapper til node og cross-env er en wrapper til ? )

//VIGTIGT SEMANTISK HTML (nav, main, footer) kig på index