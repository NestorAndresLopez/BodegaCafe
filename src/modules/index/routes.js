import {Router} from 'express';
const router = new Router();

router.get('/', (req, res)=>{
    res.send('Welcome APP BODEGA');
});

export default router;