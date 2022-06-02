const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const res = require('express/lib/response');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'node20_mysql'
});

//Routes
app.get('/', (req, res)=>{
    res.send('Welcome to my API');
});


// all customers
app.get('/customers', (req, res)=>{
    const sql = 'SELECT * FROM customers';

    connection.query(sql, (error, results)=>{
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.send('Not result');
        }
    } );
});

app.get('/customers/:id', (req, res)=>{
    const {id}=req.params;
    const sql = `SELECT * FROM customers WHERE id = ${id}`;
    connection.query(sql, (error, result)=>{
        if(error) throw error;

        if(result.length > 0){
            res.json(result);
        }else{
            res.send('Not result');
        }
    } );
});

// new customers
app.post('/add',(req, res)=>{
    const sql = 'INSERT INTO customers SET?';

    const customerObj ={
    id: req.body.id,
    name: req.body.name,
    city: req.body.city,
    customerscol: req.body.customerscol
}
connection.query(sql,customerObj, error=>{
    if(error) throw error;
    res.send('Customer created');

    });
});


// Update customers
app.put('/update/:id', (req, res)=>{
    const {id} = req.params;
    const{name,city,customerscol} = req.body;
    const sql = `UPDATE customers SET name='${name}',city='${city}',customerscol='${customerscol}' WHERE id =${id}`;
    
    connection.query(sql, error=>{
        if(error) throw error;
        res.send('Customer Update');
    });  
});

//Delete coustomers
app.delete('/delete/:id', (req, res)=>{
    const {id} = req.params;
    const sql = `DELETE FROM customers WHERE id= ${id}`;

    connection.query(sql, error=>{
        if(error) throw error;
        res.send('Customer Delete');
    });  

});



//check connect
connection.connect(error => {
    if(error) throw error;
    console.log('Database server running');
});

app.listen(PORT, () => console.log('Server running on PORT 3000') );
