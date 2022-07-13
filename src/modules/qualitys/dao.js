import { connection } from '../../utils/database.js';



export const CreateQualitysDao = (payload, callback) => {
    const sql = 'INSERT INTO qualitys SET?';
    connection.query(sql, payload, error => {
        if(error) callback(error);
        callback(null, 'Qualitys created')
    });
}

export const FindQualitysById = (id, callback) => {
    const sql = `SELECT * FROM qualitys WHERE idqualitys = ${id}`;
    connection.query(sql, (err, resp) => {
        if(err) callback(error);
        callback(null, resp)
    });
}

