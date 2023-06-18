const mysql= require("mysql")
const express= require('express');
const myconnection= require("express-myconnection")
const cors= require("cors")
const dotenv = require("dotenv")

dotenv.config({path: './config.env'});

const routes= require("./routes")

const app= express();
app.disable("x-powered-by")

app.set("port", process.env.PORT || 9000)

const corsOptions={
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'UPDATE', 'DELETE'],
  allowedHeaders:['Content-Type'],
  credentials: true,
}

const connection ={
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: process.env.DB_PASS,
    database: 'flyeasy'
  }


// middlewares -------------------------------------
app.use(myconnection(mysql, connection, 'single'))
app.use(express.json())
app.use(cors(corsOptions))

// routes -------------------------------------------

app.use('/api', routes)
app.listen(app.get('port'), ()=>{
  console.log("Servidor iniciado en el puerto ", app.get('port'))
})

