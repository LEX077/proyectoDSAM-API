const mongoose = require("mongoose");


const calzadoModel = mongoose.Schema({
    precio:{
        type: Number,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    
    title:{
        type: Number,
        required: true
    },
    marca:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    talla:{
        type: String,
        required: true
    },
    
});


module.exports = mongoose.model("calzado", calzadoModel);