const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'max'
});


conn.connect( (err) =>{
    if (err) {
       console.log('Error DB: ' , err);
       return err;
    }

    console.log('Conexion establecida!');
})

module.exports = conn;