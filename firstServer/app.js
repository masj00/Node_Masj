
const express = require ("express");
const app = express();

const gods = [
    { id: 1, name: "Zeus", domain: "Sky" },
    { id: 2, name: "Hera", domain: "Marriage" },
    { id: 3, name: "Poseidon", domain: "Sea" },
    { id: 4, name: "Athena", domain: "Wisdom" },
    { id: 5, name: "Apollo", domain: "Sun" },
    { id: 6, name: "Aphrodite", domain: "Love" }
];


app.get("/", (req, res) => {
    res.send(`<h1>Homepage for greek gods</h1>`);
});

app.get("/GreekGods", (req, res) => {
    res.send({gods});

});


app.listen(8080);

