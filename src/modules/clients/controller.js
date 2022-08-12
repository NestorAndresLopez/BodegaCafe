import {v4 as uuidv4} from 'uuid';
import { connection } from '../../utils/database.js';
import * as Dao from "./dao.js";


export const GetClients =(req, res,) =>{
    Dao.GetClientsDao((error, resp) => {
        if(error) throw error
        if(resp.length > 0){
            const response = {
                status: 200,
                message: "",
                data: resp,
                dataInfo: {
                    totalRecords: resp.length,
                    page: 1
                }
            }
            res.status(200).json(response)
        }else{
            res.send('Not result');
        }
    })
}; 

export const CreateClients = (req, res) => {
    const clientsObj ={
        uuid: uuidv4(),
        nameclients: req.body.nameclients,
        cityclients: req.body.cityclients,
        addressclients: req.body.addressclients,
        phoneNumberclients: req.body.phoneNumberclients,
        emailclients: req.body.emailclients
    }
    Dao.CreateClientsDao(clientsObj, (error, resp) => {
        if(error) throw error
        res.send(resp)
    })
}
export const GetClientsById = (req, res) => {
    console.log("getclientsbyid");
    console.log(req.params.id);
    Dao.FindClientsById(req.params.id, (error, resp) => {
        if(error) throw error
        const response = {
            status: 200,
            message: "",
            data: resp[0],
            dataInfo: {
                totalRecords: 1,
                page: 1
            }
        }
        res.status(200).json(response)
    })
}
export const FindClientsById = (req, res, next) => {
    Dao.FindClientsById(req.body.uuid, (error, resp) => {
        if(error) throw error
        console.log(resp)
        if(resp.length > 0) {
            const response = {
                status: 400,
                message: "Registro existente",
                data: [],
                dataInfo: {
                    totalRecords: 0,
                    page: 0
                }
            }
            return res.status(400).json(response)
        }
        next()
    })
}
// export const UpdateClients = (req, res)=>{
//     const {uuid} = req.params;
    
//     const updateclients ={
//         uuid: req.body.uuid,
//         nameclients: req.body.nameclients,
//         cityclients: req.body.cityclients,
//         addressclients: req.body.addressclients,
//         phoneNumberclients: req.body.phoneNumberclients,
//         emailclients: req.body.emailclients
//     }
//             Dao.UpdateClientsDao(updateclients,uuid,(error, resp)=>{
//             if(error) throw error;
//                 resp.send('Clients Update');
// })
// }

export const UpdateClients = (req, res)=>{
    const {uuid} = req.params;
    
    const updateclients ={
        uuid: req.body.uuid,
        nameclients: req.body.nameclients,
        cityclients: req.body.cityclients,
        addressclients: req.body.addressclients,
        phoneNumberclients: req.body.phoneNumberclients,
        emailclients: req.body.emailclients
    }
    connection.query('UPDATE clients set ? WHERE uuid = ?', [updateclients, uuid]);
        res.send('Clients Update')
}


export const DeleteClients =(req, res)=>{
    const {uuid} = req.params;
        Dao.DeleteClientsDao(uuid, (error, resp)=>{
            if(error) throw error;
            res.send('Clients Delete');
        })
}
