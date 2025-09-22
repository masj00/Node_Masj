//vores server fil (app.js er navnet alle giver den)
//først importere vi express modulet(altså vore package vi har installeret)

//import = require
const express = require ("express");

//console.log(express); //funktioner i express modulet

//instanciering af express biblioteket
const app = express();

//const app = require("express")(); forstår ikke helt men instancierer express modulet og kalder det med det samme

//den laver vores bodyparser
app.use(express.json()); //middleware der parser json body (skal være før vores routes)
//godt i express api hvis der er json

//request og response
//request er det vi sender til serveren client /response er det vi får tilbage fra serveren server
//Client Server model
//req, res er en callback funktion der bliver kaldt når vi får en request og er allerede defineret af express
//"/" er endpoint og (req, res) er callback funktionen EKSAMENS SPØRGSMÅL!!!
//dette er en route handler OGSÅ VIGTGT
app.get("/", (req, res) => {
    //vi ville gerne sende en json tilbage (hvis du sender en string skal du genstarte serveren)
    res.send(`<h1>Hello World</h1>`);
});

//console.log(__dirname); //viser hvor vi er i filsystemet
app.get("/fashionbrands", (req, res) => {
    res.sendFile(__dirname + "/index.html" );
});
//create post to create a new fashion brand
app.post("/fashionbrands", (req, res) => {
   console.log(req.body);
   res.send({data: req.body});
});


//res sådan her fordi det bliver parsed til json automatisk
app.get("/planets", (req, res) => {
    res.send({name: "Earth"});
});
                                    //client/server model
app.get("/planets/favoritePlanets", (req, res) => {
    res.send({name: "Mekur"});
});
 //kan sende på 2 måder i en get request = pathvariabel og (? query string)
                  //pathvariable
app.get("/waterfalls/:likingScore", (req, res) => {
//console.log({`You like waterfalls this much ${req.params.likingScore}`})
res.send(`You like waterfalls this much: ${req.params.likingScore}`);
});



// GET /urls?length=medium&spiciness=6
app.get("/urls", (req, res) => {
   // console.log(req.query); //{ length: 'medium', spiciness: '6' }
    res.send({data: req.query});
});

app.post("/subjects", (req, res) => {
    //til backend
console.log(req.body);
//til frontend
res.send({data: req.body});
});
//express nægtede at have body parser fordi de har minimalistisk framework //men de er der nu
//VIGTIGT EKSAMEN ik bodyparse i express den er på linje 15

//Skal have en port at køre på(8080 er standard til webservere)
//tomcat køre på 8080
app.listen(8080);

//importere instanciere og lytter til vores port

