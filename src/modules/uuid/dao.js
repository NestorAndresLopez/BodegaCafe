import { connection } from '../../utils/database.js';

export const CreateUuidDao = (payload, callback) => {
    const sql = 'INSERT INTO uuid SET?';
    connection.query(sql, payload, error => {
        if(error) callback(error);
        callback(null, 'Uuid created')
    });
}

// export const UpdateClientsDao = (idclients, payload, callback) => {
//     const sql = `UPDATE clients SET ?`;
//     connection.query(sql, payload, (error, resp) => {
//         if(error) callback(error);
//         callback(null, resp)
// });
// }



