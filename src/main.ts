// Transaction Script
// Tudo no mesmo arquivo em sequência

// Passo 1: Criar um servidor de back-end
//EXPRESS

import express from 'express';
import mysql from 'mysql2/promise';
// Criar um OBJETO do express
const app = express();
app.get("/produtos",async(req,res)=>{
    //0 - Criar o banco de dados e iniciar o servidor de banco.
    
    //1 - Criar a conexão com o banco
    try{
        const conection = await mysql.createConnection({
            host:process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"banco1022A",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
         //2 - Realizar uma consulta na tabela
        const resposta = await conection.query("SELECT * from produtos")
        res.send("Devolve Produtos")
    }catch(e){
        res.status(500).send("Server ERROR")
    }
   
   
    //3 - Devolver os dados pra quem pediu

    
})

// Abrir uma porta do servidor express
app.listen(8000,()=>{
    console.log("Iniciei o servidor")
})