const db = require("../config/database")

// Criar pedido
async function createOrder(data) {

    const pool = await db.connect()

    // MAPEAMENTO DO JSON
    const order = {
        orderId: data.numeroPedido.split("-")[0], // remove -01
        value: data.valorTotal,
        creationDate: new Date(data.dataCriacao)
    }

    // Inserir pedido
    await pool.request()
        .input("orderId", order.orderId)
        .input("value", order.value)
        .input("creationDate", order.creationDate)
        .query(`
            INSERT INTO Orders(orderId,value,creationDate)
            VALUES(@orderId,@value,@creationDate)
        `)

    // Inserir itens
    for (const item of data.items) {

        await pool.request()
            .input("orderId", order.orderId)
            .input("productId", item.idItem)
            .input("quantity", item.quantidadeItem)
            .input("price", item.valorItem)
            .query(`
                INSERT INTO Items(orderId,productId,quantity,price)
                VALUES(@orderId,@productId,@quantity,@price)
            `)

    }

    return order
}

// Buscar pedido
async function getOrder(orderId) {

    const pool = await db.connect()

    const order = await pool.request()
        .input("orderId", orderId)
        .query("SELECT * FROM Orders WHERE orderId=@orderId")

    const items = await pool.request()
        .input("orderId", orderId)
        .query("SELECT * FROM Items WHERE orderId=@orderId")

    return {
        order: order.recordset[0],
        items: items.recordset
    }
}

// Listar pedidos e usando o await para que o processo continue 
async function listOrders() {

    const pool = await db.connect()

    const result = await pool.request()
        .query("SELECT * FROM Orders")

    return result.recordset
}

// Deletar pedido usando filtros necessarios
async function deleteOrder(orderId) {

    const pool = await db.connect()

    await pool.request()
        .input("orderId", orderId)
        .query("DELETE FROM Items WHERE orderId=@orderId")

    await pool.request()
        .input("orderId", orderId)
        .query("DELETE FROM Orders WHERE orderId=@orderId")

}

module.exports = { //exporto os modulos necessarios 
    createOrder,
    getOrder,
    listOrders,
    deleteOrder
}