import express from "express"
import cors from "cors"
import mysql2 from "mysql2"
import "dotenv/config"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (request, response) => {
    const commandSelect = "SELECT * FROM musics_ronny"

    sql.query(commandSelect, (error, data) => {
        if (error) {
            console.log(error)
            return
        }
        response.json(data)
    })
})

app.listen(3000, () => {
    console.log("O servidô tá ródânu na porta 3000 visse!?")
})

const sql = mysql2.createPool({
    host: process.env.HOST_BANCO,
    user: process.env.USUARIO_BANCO,
    password: process.env.SENHA_BANCO,
    database: process.env.NOME_BANCO
})

export default app