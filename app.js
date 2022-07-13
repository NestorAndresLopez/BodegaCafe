import express from 'express';
import bodyParser from 'body-parser';
import { connection } from './src/utils/database.js';
import IndexRoutes from './src/modules/index/routes.js';
import ProvidersRoutes from './src/modules/providers/routes.js';
import ClientsRoutes from './src/modules/clients/routes.js';
import LotsRouters from  './src/modules/lots/routes.js';
import QualitysRouters from './src/modules/qualitys/routes.js';
import SamplesRouters from './src/modules/samples/routes.js';
import UuidRoutes from './src/modules/uuid/routes.js';

//Initiliazations

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }    
    console.log('connected as id ' + connection.threadId);
});

//Routes Index
app.use(ProvidersRoutes);
app.use(ClientsRoutes);
app.use(LotsRouters);
app.use(QualitysRouters); 
app.use(SamplesRouters);
app.use(IndexRoutes);
app.use(UuidRoutes);




//Escuchando servidor


app.listen(PORT, () => console.log('Server running on PORT 3000') );
