import { connection } from '../../utils/database.js';



export const CreateProviderDao = (payload, callback) => {
    const sql = 'INSERT INTO providers SET?';
    connection.query(sql, payload, error => {
        if(error) callback(error);
        callback(null, 'Provider created')
    });
}

export const FindProviderById = (id, callback) => {
    const sql = `SELECT * FROM providers WHERE idproviders = ${id}`;
    connection.query(sql, (err, resp) => {
        if(err) callback(error);
        callback(null, resp)
    });
}

