import { Router } from 'express';

//instanciere
const router = Router();


//middleware kan tilgå req, res og next
//iplogger 
function iplogger(req, res, next) {
    console.log(req.ip);
    next(); //kalder den næste middleware eller route der matcher
};
//global middleware - gælder for alle routes nedenunder hvis det er app.use(iplogger);
//middleware til /room route
router.use("/room", iplogger); //app.use skal være i toppen før routes

function middlewareGreeter(req, res, next) {
    //res.send("<h1>Unauthorized</h1>");
    next();
}

router.get('/room', middlewareGreeter, (req, res, next) => {
    //res.send({data: "you are in rooom 3"});
    next(); //kalder den næste route der matcher
});

//kun den ene af disse routes vil virke, da de har samme sti den første da den kun skal bruge 1 response pr req.
//express matcher endpoints med routes
//iplogger her er middleware(express) eksistere på serveren //vigtig! (selve express er middleware)

//inline middleware
router.get('/room', (req, res, next) =>{
console.log("checking papers");
next();
},
 (req, res) => {
    res.send({data: "you are in rooom 1"});
});

router.get('/room', (req, res) => {
    res.send({data: "you are in rooom 2"});
});





export default router;