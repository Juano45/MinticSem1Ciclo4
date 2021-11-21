const express = require('express')
const mongoose = require('mongoose')
const MunicipioSchema = require('./Model/Municipio.js')

/*Instancia del express */
const app = express()
const port = 3000
const routes = express.Router()
/*Con mongoose vamos a conectar con la base de datos, mediante cadena de conexión Atlas*/
mongoose.connect('mongodb+srv://juanvargas:Juane1428@clusterprogweb.ax6ip.mongodb.net/DepartamentosDB?retryWrites=true&w=majority')
/*Codificación de la URL*/
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)
/*Activar el puerto que va a escuchar la conexión
    Listening por puero 3000: localHost:3000*/
app.listen(port ,()=>{
    console.log('Conexión exitosa')
})
 /*Configurar rutas */
 /*Consulta */

routes.get('/municipio', (req,res)=>{
    MunicipioSchema.find(function(err,data){
         if (err)
            console.log('No se encontró información del municipio')
        else
            res.send(data)
     })
})

 /*Añadir municipios desde Postman*/

routes.post('/municipio',(req,res)=>{
    let municipioE = new MunicipioSchema({
        idMunicipio: req.body.id,
        nombreMunicipio: req.body.municipio,
        departamento: req.body.departamento
    })
    municipioE.save(function(err,data){
        if (err)
            console.log('No se pudó crear el municipio')
        else
            res.send(data)
            console.log('Municipio Creado con éxito')    
    })
 })