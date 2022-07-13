import { connection } from "../../utils/database.js";
import * as Dao from "./dao.js"

export const GetSamples = (req, res,) =>{
    const sql = 'SELECT * FROM samples';

    connection.query(sql, (error, results)=>{
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.send('Not result');
        }
    } );
}; 

export const CreateSamples = (req, res) => {
    const samplesObj ={
        idsamples: req.body.idsamples,
        numbersamples: req.body.numbersamples,
        providerssamples: req.body.providerssamples
    }
    Dao.CreateSamplesDao(samplesObj, (error, resp) => {
        if(error) throw error
        res.send(resp)
    })
}

export const GetSamplesById = (req, res) => {
    Dao.FindSamplesById(req.params.id, (error, resp) => {
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

export const FindSamplesById = (req, res, next) => {
    Dao.FindSamplesById(req.body.idsamples, (error, resp) => {
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

export const PutSamples = (req, res)=>{
    const {idsamples} = req.params;
    const{numbersamples,providerssamples} = req.body;
    const sql = `UPDATE samples SET numbersamples='${numbersamples}',providerssamples='${providerssamples}' WHERE idsamples =${idsamples}`;
    
    connection.query(sql, error=>{
        if(error) throw error;
        res.send('Samples Update');
    });  
}

export const DeleteSamples =(req, res)=>{
    const {idsamples} = req.params;
    const sql = `DELETE FROM samples WHERE idsamples= ${idsamples}`;

    connection.query(sql, error=>{
        if(error) throw error;
        res.send('Samples Delete');
    });  

}
