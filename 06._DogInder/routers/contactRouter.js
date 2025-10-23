import { Router } from 'express';
import {contactPage } from '../util/pagesUtil.js';

const router = Router();

router.post('/api/contact', (req, res) => {
    res.send({ data : "OK" });
});

export default router;