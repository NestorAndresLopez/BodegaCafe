import { Router } from 'express';
import * as Controllers from './controller.js';

const router = new Router();

//ALL PROVIDERS
router.get('/lots', Controllers.GetLots);

//PROVIDERS ID
router.get('/lots/:id', Controllers.GetLotsById);

// NEW PROVIDERS
router.post('/addlots', Controllers.FindLotsById, Controllers.CreateLots);

//UPDATE PROVIDERS
router.put('/updatelots/:idlots', Controllers.PutLots);

//DELETE PROVIDERS
router.delete('/deletelots/:idlots', Controllers.Deletelots);

export default router; 
