
//step 1 
const express = require ("express");
const app = express();

app.use(express.json)

//step 3
const greekGods = [
    {id: 1, name: "Zeus",  },
    {id: 2, name: "Hercules", isDemiGod: true },
];
let nextId = 3;
//let lastId = 2; //sidste id i arrayet Slettet muligvis til step 6
//postfix notation
//console.log(lastId++) giver 2
//prefix notation
//console.log(++lastId) giver 3

//step 4                //callback.  kan kun være 200
app.get("/greekgods", (req, res) => {
    res.send({ data: greekGods });//data(mange kan parse det) er et key og greekGods er value (object notation) fx i graphql self i {} for at vise det er et object
});
//res.json() dårligt til EKSAMEN (legacy) | res.send() bedre til eksamen (current standard)

//step 5
app.get("/greekgods/:id", (req, res) => {
    const providedgreekGodId = Number(req.params.id); //Number/Parseint fordi det er en string i url og vi skal bruge et tal
    const foundGreekGod = greekGods.find((greekGod) => greekGod.id === providedgreekGodId); //find returner et element der matcher betingelsen (altså det første der matcher)
    
    //tidligst muligt rammer vi fejlen (derfor laver vi !foundGreekGod først)
    if (!foundGreekGod) {
        res.status(404).send({errorMessage: `Greek god not found ${providedgreekGodId}`});
    } else {
        res.send({data: foundGreekGod})
    }

});

//Næste step 6 POST

app.post("/greekgods", (req, res) => {

    if(!req.body) {
        return res.status(400).send({errorMessage:"Requires a JSON body"})
    }

    const newGreekGod = req.body;
    req.body.id = nextId++; //sætter id til det sidste id + 1
    greekGods.push(newGreekGod); //push tilføjer et element til et array

    res.send({data: newGreekGod}); //201 created
});
//Alternativt step 6
//
// const newGreekGod = {id: ++lastId, name: `New Greek God ${lastId}`}; //++lastId for at den starter på 3
// greekGods.push(newGreekGod); //push tilføjer et element til et array
// res.status(201).send({data: newGreekGod}); //201 created



//Step 8 PATCH

app.patch("/greekgods/:id", (req, res) =>{
    const providedgreekGodId = Number(req.params.id)
    const foundGreekGodIndex = greekGods.findIndex((greekGod) => greekGod.id == providedgreekGodId)

    if(foundGreekGodIndex === -1){
            res.status(404).send({errorMessage: `Greek God not found by id ${providedgreekGodId}`})
            return;
    }

    const foundGreekGod = greekGods[foundGreekGodIndex]
    
// ... / spread = den tager "tarmen" ud af objekter og merger dem sammen hvis man har flere objekter den patcher med req body fordi det er den sidste
    const newGreekGod = {...foundGreekGod, ...req.body, id: foundGreekGod.id};
    //vi finder greek godt så sætter vi req.body ind og så sørger vi for at id ikke ændres i req.body men id

    newGreekGod.id = foundGreekGod.id;

    greekGods[foundGreekGodIndex] = newGreekGod;
    res.send ({data: newGreekGod})
});

//step 7 DELETE
app.delete("/greekgods/:id", (req, res) => {
    const providedgreekGodId = Number(req.params.id);
    const foundGreekGodIndex =  greekGods.findIndex((greekGod) => greekGod.id === providedgreekGodId);
if(foundGreekGodIndex == -1){
    res.status(404).send({errorMessage: `Greek God not found by id ${providedgreekGodId}`})
    return;
}else {
    greekGods.splice(foundGreekGodIndex, 1)

    //i delete bruger vi bare 204
    res.status(204).res.send();
}

});





//app.listen can be given a callback function as a second argument
//console.log("Server is running on port 8080"); / Man kan give den error
// 2xx - sucess, 4xx - Client fejl, 5xx - Server fejl.
//skal være i bunden step 2 / Leksion 4
const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.error("Something went wrong", error);
    return;
}
    console.log(`Server is running on port ${PORT}`, PORT);
});
