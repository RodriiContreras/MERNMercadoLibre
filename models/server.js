const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');
const fileUpload = require('express-fileupload')


class Server{

    constructor(){
        this.app= express(),
        this.port=process.env.PORT;
        

        //PATHS DE MI APP MERCADOLIBRE
        this.paths={
          auth:'/auth'
        }


        this.conectionDB();

        this.middlewares();

        this.routes()
    }


    async conectionDB(){
        await dbConnection()
    }

    middlewares(){
        this.app.use(cors())
        
        this.app.use(express.json())
        
        //middleware que lleva al public
        this.app.use(express.static('public')); 
    
        this.app.use(fileUpload({
          useTempFiles : true,
          tempFileDir : '/tmp/',
          createParentPath:true
        }));
      }
    
      routes(){ 
          this.app.use(this.paths.auth, require('../routes/auth.js'))
      }
    
      listen(){
        this.app.listen(this.port)
        console.log(`Servidor corriendo en localhost:${this.port}`)
      }  
    
}

module.exports = Server

