import { Router } from 'express';
import * as Controllers from './controller.js';

const router = new Router();

//ALL PROVIDERS 
router.get('/clients', Controllers.GetClients);

//PROVIDERS ID
router.get('/clients/:id', Controllers.GetClientsById);

// NEW PROVIDERS
router.post('/addclients',  Controllers.CreateClients);

//Controllers.FindClientsById,  como usar busqueda por id si los id no los sabemos
//Probar que pasa si tengo dos usuarios con el mismo id me trae los dos asi puedo buscar por nombre

//UPDATE PROVIDERS
router.put('/updateclients/:uuid', Controllers.UpdateClients);

//DELETE PROVIDERS
router.delete('/deleteclients/:uuid', Controllers.DeleteClients);

export default router;
