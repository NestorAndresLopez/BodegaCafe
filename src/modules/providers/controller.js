import { connection } from "../../utils/database.js";
import * as Dao from "./dao.js"

export const GetProvider = (req, res,) =>{
    const sql = 'SELECT * FROM providers';

    connection.query(sql, (error, results)=>{
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.send('Not result');
        }
    } );
}; 

export const CreateProvider = (req, res) => {
    const providersObj ={
        idproviders: req.body.idproviders,
        nameproviders: req.body.nameproviders,
        cityproviders: req.body.cityproviders,
        providerscol: req.body.providerscol
    }
    Dao.CreateProviderDao(providersObj, (error, resp) => {
        if(error) throw error
        res.send(resp)
    })
}

export const GetProviderById = (req, res) => {
    Dao.FindProviderById(req.params.id, (error, resp) => {
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

export const FindProviderById = (req, res, next) => {
    Dao.FindProviderById(req.body.idproviders, (error, resp) => {
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

export const PutProviders = (req, res)=>{
    const {idproviders} = req.params;
    const{nameproviders,cityproviders,providerscol} = req.body;
    const sql = `UPDATE providers SET nameproviders='${nameproviders}',cityproviders='${cityproviders}',providerscol='${providerscol}' WHERE idproviders =${idproviders}`;
    
    connection.query(sql, error=>{
        if(error) throw error;
        res.send('Provider Update');
    });  
}

export const DeleteProviders =(req, res)=>{
    const {idproviders} = req.params;
    const sql = `DELETE FROM providers WHERE idproviders= ${idproviders}`;

    connection.query(sql, error=>{
        if(error) throw error;
        res.send('Provider Delete');
    });  

}
