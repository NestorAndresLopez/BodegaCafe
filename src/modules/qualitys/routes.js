import { Router } from 'express';
import * as Controllers from './controller.js';

const router = new Router();

//ALL PROVIDERS
router.get('/qualitys', Controllers.GetQualitys);

//PROVIDERS ID
router.get('/qualitys/:id', Controllers.GetQualitysById);

// NEW PROVIDERS
router.post('/addqualitys', Controllers.FindQualitysById, Controllers.CreateQualitys);

//UPDATE PROVIDERS
router.put('/updatequalitys/:idqualitys', Controllers.PutQualitys);

//DELETE PROVIDERS
router.delete('/deletequalitys/:idqualitys', Controllers.DeleteQualitys);

export default router;
