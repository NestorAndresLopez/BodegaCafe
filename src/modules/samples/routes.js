import { Router } from 'express';
import * as Controllers from './controller.js';

const router = new Router();

//ALL PROVIDERS
router.get('/samples', Controllers.GetSamples);

//PROVIDERS ID
router.get('/samples/:id', Controllers.GetSamplesById);

// NEW PROVIDERS
router.post('/addsamples', Controllers.FindSamplesById, Controllers.CreateSamples);

//UPDATE PROVIDERS
router.put('/updatesamples/:idsamples', Controllers.PutSamples);

//DELETE PROVIDERS
router.delete('/deletesamples/:idsamples', Controllers.DeleteSamples);

export default router;
