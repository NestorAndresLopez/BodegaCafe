import { connection } from "../../utils/database.js";
import * as Dao from "./dao.js"

export const GetLots = (req, res,) =>{
    const sql = 'SELECT * FROM lots';

    connection.query(sql, (error, results)=>{
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.send('Not result');
        }
    } );
}; 


export const CreateLots = (req, res) => {
    const lotsObj ={
        idlots: req.body.idlots,
        fechalots: req.body.fechalots,
        providerslots: req.body.providerslots,
        typecoffelots: req.body.typecoffelots
    }
    Dao.CreateLotsDao(lotsObj, (error, resp) => {
        if(error) throw error
        res.send(resp)
    })
}


export const GetLotsById = (req, res) => {
    Dao.FindLotsById(req.params.id, (error, resp) => {
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

export const FindLotsById = (req, res, next) => {
    Dao.FindLotsById(req.body.idlots, (error, resp) => {
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


export const PutLots = (req, res)=>{
    const {idlots} = req.params;
    const{fechalots,providerslots,typecoffelots} = req.body;
    const sql = `UPDATE lots SET fechalots='${fechalots}',providerslots='${providerslots}',typecoffelots='${typecoffelots}' WHERE idlots =${idlots}`;
    
    connection.query(sql, error=>{
        if(error) throw error;
        res.send('Lot Update');
    });  
}


export const Deletelots =(req, res)=>{
    const {idlots} = req.params;
    const sql = `DELETE FROM lots WHERE idlots= ${idlots}`;

    connection.query(sql, error=>{
        if(error) throw error;
        res.send('Lots Delete');
    });  

}
