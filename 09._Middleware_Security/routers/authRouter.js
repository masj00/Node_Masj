import {Router} from 'express';

//instanciere
const router = Router();

function isAdmin(req, res, next) {
    //this simulates checking in the database
    //and assumes that the user is admin
    const isAdmin = true;
    if(isAdmin) {
        req.isAdmin = isAdmin;
        //Simulates username from database
        req.username = "John";
        return next(); // så behøver vi ikke have else-statement
    } 
        res.status(403).send({data: "You need to be an admin"});
    
}

router.get("/auth/secretroute", isAdmin, (req, res) => {
    console.log(req.isAdmin, req.username);
    res.send({ data: "secret data" });
});


export default router;

//authentication godkender hvem du er
//authorization - hvad har du adgang til hvad er du autoriseret til