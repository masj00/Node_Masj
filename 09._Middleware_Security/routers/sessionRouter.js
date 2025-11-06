import { Router } from "express";

const router = Router();

//session kan bruge cross routes

router.get("/addicecream", (req, res) => {
    req.session.flavor = "chocolate caramel";
    req.session.amount = 5;
    res.send({flavor : req.session, amount: req.session.amount });
});

router.get("/eaticecream", (req, res) => {
    req.session.amount--;
    if(!req.session.flavor) {
        return  res.send({data: "no icecream flavor selected"});
    }
    if (!req.session.amount) {
        return res.send({data: "no icecream left"});
    }
    res.send({flavor : req.session, amount: req.session.amount });
});

router.get("/closeshop", (req, res) => {
 req.session.destroy(() => {
    res.send({ data: "shop closed"});
 });
});

export default router;