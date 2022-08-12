import { connection } from '../../utils/database.js';


export const GetClientsDao = (callback) => {
    const sql = `SELECT * FROM clients`;
    connection.query(sql, (err, resp) => {
        if(err) callback(error);
        callback(null, resp)
    });
}

export const CreateClientsDao = (payload, callback) => {
    const sql = 'INSERT INTO clients SET?';
    connection.query(sql, payload, error => {
        if(error) callback(error);
        callback(null, 'Clients created')
    });
}

// export const UpdateClientsDao = (uuid, payload, callback) => {
//     console.log("datos recibidos del dao ",uuid,payload)
//     const sql = `UPDATE clients SET ?`;
//     connection.query(sql, payload,   (error, resp) => {
//         if(error) callback(error);
//         callback(null, resp)
// });
// }

export const FindClientsById = (id, callback) => {
    console.log("este es ", id);
    const sql = `SELECT * FROM clients WHERE uuid = '${id}'`;
    console.log(sql);
    connection.query(sql, (err, resp) => {
        console.log (err, resp);
        if(err) callback(error);
        callback(null, resp)
    });
}

export const DeleteClientsDao = (uuid, callback) =>{
    console.log("este se esta eliminando", uuid)
    const sql = `DELETE FROM clients WHERE uuid = '${uuid}'`;
    connection.query(sql,(err,resp) =>{
        if(err) callback(error);
        callback(null, resp)
    })
}


