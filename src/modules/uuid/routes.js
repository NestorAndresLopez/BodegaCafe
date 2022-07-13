import { Router } from 'express';
import * as Controllers from './controller.js';

const router = new Router();

// NEW PROVIDERS
router.post('/adduuid', Controllers.CreateUuid);

// //UPDATE PROVIDERS
// router.put('/updateclients/:idclients', Controllers.UpdateClients);

export default router;
