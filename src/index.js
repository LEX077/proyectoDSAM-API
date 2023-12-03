//Llamada a los paquetes
const express = require("express")
const mongoose = require("mongoose")
const usuarios = require("./routes/usuarios")
const polos = require("./routes/polos")
const pantalones = require("./routes/pantalones")
const pijamas = require("./routes/pijamas")
const poleras = require("./routes/poleras")
const calzado = require("./routes/calzados")
require("dotenv").config()
const swaggerUi = require("swagger-ui-express")
const swaggerJSdoc = require("swagger-jsdoc")
const path = require("path")





//Configuraciones
const aplicacion = express();
const puerto = 4000;
const swaggerConf = {
    definition:{
        openapi: "3.0.0",
        info: {
            tittle:"documentacion api tienda",
            version:"1.0.0"
        },
        servers:[
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis: [ ` ${path.join(__dirname, "./routes/*.js")}` ]
}

//rutas
aplicacion.use(express.json());
aplicacion.use("/api", usuarios);
aplicacion.use("/api", polos);
aplicacion.use("/api", pijamas);
aplicacion.use("/api", poleras);
aplicacion.use("/api", calzado);
aplicacion.use("/api", pantalones);
aplicacion.use("/api-doc",swaggerUi.serve, swaggerUi.setup(swaggerJSdoc(swaggerConf)))


//Ejecución
mongoose.connect(process.env.mongodb_conexion)
    .then(() => { console.log("Conexión realizada")})
    .catch((error) => { console.log(error)})

aplicacion.listen(puerto, () => { console.log("Aplicación ejecutándose") } )







