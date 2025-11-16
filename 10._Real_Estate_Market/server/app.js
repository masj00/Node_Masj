import 'dotenv/config';
console.log("SESSION_SECRET:", process.env.SESSION_SECRET);

import express from 'express';
const app = express();

app.use(express.json()); //middleware der parser json body (inde i housesRouter.js)
/*
import cors from 'cors'; //check anders kode kan ikke fetche dette
app.use(cors({
    origin: true,
    credentials: true
}));
*/
//uden cors bibliotek høre til udkommenteret kode ovenover
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//skal være over routers
import session from 'express-session'; //import fra https://www.npmjs.com/package/express-session
app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } //skal ændres lokalt køre vi uden https
}));


import realEstateAgentRouter from './routers/realEstateAgentsRouter.js'; 
app.use(realEstateAgentRouter);  
import housesRouter from './routers/housesRouter.js'; 
app.use(housesRouter); 




const PORT = 8080 || process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});