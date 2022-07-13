import { connection } from '../../utils/database.js';



export const CreateSamplesDao = (payload, callback) => {
    const sql = 'INSERT INTO samples SET?';
    connection.query(sql, payload, error => {
        if(error) callback(error);
        callback(null, 'Samples created')
    });
}

export const FindSamplesById = (id, callback) => {
    const sql = `SELECT * FROM samples WHERE idsamples = ${id}`;
    connection.query(sql, (err, resp) => {
        if(err) callback(error);
        callback(null, resp)
    });
}

