import { Router } from 'express';
import * as Controllers from './controller.js';

const router = new Router();

//ALL PROVIDERS
router.get('/providers', Controllers.GetProvider);

//PROVIDERS ID
router.get('/providers/:id', Controllers.GetProviderById);

// NEW PROVIDERS
router.post('/addproviders', Controllers.FindProviderById, Controllers.CreateProvider);

//UPDATE PROVIDERS
router.put('/updateproviders/:idproviders', Controllers.PutProviders);

//DELETE PROVIDERS
router.delete('/deleteproviders/:idproviders', Controllers.DeleteProviders);

export default router;
