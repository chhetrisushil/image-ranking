import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.sendFile('html/index.html')
});

export default router;