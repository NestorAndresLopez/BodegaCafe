import { connection } from '../../utils/database.js';



export const CreateLotsDao = (payload, callback) => {
    const sql = 'INSERT INTO lots SET?';
    connection.query(sql, payload, error => {
        if(error) callback(error);
        callback(null, 'Lots created')
    });
}

export const FindLotsById = (id, callback) => {
    const sql = `SELECT * FROM lots WHERE idlots = ${id}`;
    connection.query(sql, (err, resp) => {
        if(err) callback(error);
        callback(null, resp)
    });
}

