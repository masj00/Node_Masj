//vi skal importere fra express LEKSION 8
//målet med idag skal vi bl. a. kunne sætte en router op

//router er en mini app der kan håndtere routes / endpoints selvom det ikke er helt en app men en router

import {Router} from 'express';
import { getMatches } from '../util/matchesutil.js';

//instantiere
const router = Router();

//man ville gerne have sine endpoints herinde
router.get("/api/matches", async (req, res) =>  {
    const matches = await getMatches();
    res.send({ data: matches });
});
export default router;