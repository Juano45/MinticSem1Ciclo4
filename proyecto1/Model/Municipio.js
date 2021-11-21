const mongoose = require('mongoose')
let MunicipioSchema = new mongoose.Schema({
    idMunicipio: Number,
    nombreMunicipio: String,
    departamento: String
})

module.exports = mongoose.model('municipio',MunicipioSchema, 'Municipios')