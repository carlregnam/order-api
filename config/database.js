const sql = require("mssql/msnodesqlv8")

const config = {
    connectionString: "Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLSERVER2025;Database=OrderDB;Trusted_Connection=Yes;"
}//usei a autenticação do windows para banco, usando o sql server

//aqui eu faço a conexção do banco de dados, e faço um pequeno retorno se consegui realizar a conexão 
async function connect() {

    try {

        const pool = await sql.connect(config)

        console.log("✅ Conectado ao SQL Server")

        return pool

    } catch (error) {

        console.log("❌ ERRO SQL:")
        console.log(error)

    }

}

module.exports = { connect, sql } //exporto os modulos