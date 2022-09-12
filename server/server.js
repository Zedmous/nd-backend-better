const express = require('express')
const cors = require('cors');
const dbConection  = require('../database/db.config');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //this.authRouter='/api/auth';
        this.routerPlan='/api/planes';
        this.routerCliente='/api/clientes';
        //conectar a la BD
        this.conectarDB();
        //Middleware
        this.middlewares();
        //rutas de mi aplicacion
        this.routes();
    }
    async conectarDB(){
        await dbConection.sync().then(() => console.log("Conexion exitosa a la base de datos"));
    }
    middlewares(){
        //cors
        this.app.use(cors())
        //lectura y parseo del body
        this.app.use(express.json())//cualquier informacion que venga vendra serializar a json

        //directorio publico
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.routerPlan,require('../routes/plan.route'))
        this.app.use(this.routerCliente,require('../routes/cliente.route'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto","localhost:"+this.port)
        })
    }
}
module.exports = Server;