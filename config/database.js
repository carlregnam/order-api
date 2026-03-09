const sql = require("mssql/msnodesqlv8")

const config = {
    connectionString: "Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLSERVER2025;Database=OrderDB;Trusted_Connection=Yes;"
}

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

module.exports = { connect, sql }