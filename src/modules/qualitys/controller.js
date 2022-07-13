import { connection } from "../../utils/database.js";
import * as Dao from "./dao.js"

export const GetQualitys = (req, res,) =>{
    const sql = 'SELECT * FROM qualitys';

    connection.query(sql, (error, results)=>{
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.send('Not result');
        }
    } );
}; 

export const CreateQualitys = (req, res) => {
    const qualitysObj ={
        idqualitys: req.body.idqualitys,
        qualitysnumber: req.body.qualitysnumber,
        qualityresult: req.body.qualityresult
        }
    Dao.CreateQualitysDao(qualitysObj, (error, resp) => {
        if(error) throw error
        res.send(resp)
    })
}

export const GetQualitysById = (req, res) => {
    Dao.FindQualitysById(req.params.id, (error, resp) => {
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

export const FindQualitysById = (req, res, next) => {
    Dao.FindQualitysById(req.body.idqualitys, (error, resp) => {
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

export const PutQualitys = (req, res)=>{
    const {idqualitys} = req.params;
    const{qualitysnumber,qualityresult} = req.body;
    const sql = `UPDATE qualitys SET qualitysnumber='${qualitysnumber}',qualityresult='${qualityresult}' WHERE idqualitys =${idqualitys}`;
    
    connection.query(sql, error=>{
        if(error) throw error;
        res.send('Qualitys Update');
    });  
}

export const DeleteQualitys =(req, res)=>{
    const {idqualitys} = req.params;
    const sql = `DELETE FROM qualitys WHERE idqualitys= ${idqualitys}`;

    connection.query(sql, error=>{
        if(error) throw error;
        res.send('Qualitys Delete');
    });  

}
