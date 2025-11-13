import { Router } from 'express'; //1

const router = Router(); //1 

const realEstateAgents = ["John Doe", "Jane Doe", "Timmy Doe"];

router.get('/realestateagents', (req, res) => {
res.send({data: realEstateAgents })
})


export default router; //1