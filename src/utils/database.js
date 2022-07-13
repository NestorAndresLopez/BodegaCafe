import mysql from 'mysql';

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'node20_mysql'
});
