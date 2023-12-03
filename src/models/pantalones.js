const mongoose = require("mongoose");


const pantalonesModel = mongoose.Schema({
    precio:{
        type: Number,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    
    title:{
        type: String,
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


module.exports = mongoose.model("pantalones", pantalonesModel);