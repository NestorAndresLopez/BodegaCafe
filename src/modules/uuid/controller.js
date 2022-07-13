import {v4 as uuidv4} from 'uuid';
import * as Dao from "./dao.js";

export const CreateUuid = (req, res) => {
    const UuidObj ={
        uuid: uuidv4(),
        name: req.body.name,
        city: req.body.city,
    }
    Dao.CreateUuidDao(UuidObj, (error, resp) => {
        if(error) throw error
        res.send(resp)
    })
}

// export const UpdateClients = (req, res)=>{
//     const {idclients} = req.params;
//     const updateclients ={
//         idclients: req.body.idclients,
//         nameclients: req.body.nameclients,
//         cityclients: req.body.cityclients,
//     }
//             Dao.UpdateClientsDao(idclients,updateclients,(error, resp)=>{
//             if(error) throw error;
//                 res.send('Clients Update');
// })
// }

 