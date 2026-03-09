
//chamando as minhas requisições do banco 
const express = require("express")
const bodyParser = require("body-parser")

const routes = require("./routes/orderRoutes")
const db = require("./config/database")

const app = express()

app.use(bodyParser.json())
app.use("/", routes)

//coloquei essa função para eu saber se conseguir realizar a consulta no banco e da APi 
async function startServer() { 


    console.log("🔎 Testando conexão com banco...")

    await db.connect()

    app.listen(3000, () => { 
        console.log("API rodando na porta 3000")
    })

}

startServer()