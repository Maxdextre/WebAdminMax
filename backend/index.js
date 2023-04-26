
const express = require('express');
const cors = require('cors');
const db = require('./config/conexion');

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(cors());


//RUTAS

app.get('/experiencias', (req, res) => {
    db.query('SELECT * FROM experiences', (err, data) =>{
        if(err){
            return err;
        }
        res.json({ experiencias:  data })
    })
    
})


app.get('/experiencias/:id', (req, res) => {
    console.log(req.params.id)
    const ID = req.params.id;
    const sql ='SELECT * FROM experiences WHERE Id = ?'
    db.query(sql, [ID], (err,data) => {
        if(err){
            return err;
        }
        res.json({ 
            mensaje: 'Resultados',
            data
         })
    })
 
})


app.put('/experiencias/:id', (req, res) => {
    console.log(Object.values(req.body))
    const values = Object.values(req.body);
    const sql ='UPDATE experiences SET name = ?'
    db.query(sql, values, (err,requ) => {
        if(err){
            return err;
        }
        res.json({ 
            mensaje: 'Experiencia actualizada',
            requ
         })
    })
 
})



app.delete('/experiencias/:id', (req, res) => {
    console.log(req.params.id)
    const ID = req.params.id;
    const sql ='DELETE FROM experiences WHERE Id = ?'
    db.query(sql, [ID], (err,requ) => {
        if(err){
            return err;
        }
        res.json({ 
            mensaje: 'Producto eliminado',
            requ
         })
    })
 
})


app.delete('/experiencias/:id', (req, res) => {
    console.log(Object.values(req.body))
    const values = Object.values(req.body);
    const sql ='INSERT INTO experiences (name) VALUES (?)'
    db.query(sql, values, (err, requ) => {
        if(err){
            return err;
        }
        res.json({ 
            mensaje: 'Experiencia agregada',
            requ
         })
    })

    
})


app.listen(PORT, () => {
    console.log('Server en el puerto: ' + PORT);
});