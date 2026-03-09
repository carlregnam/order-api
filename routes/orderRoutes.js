const express = require("express")
const router = express.Router()

const controller = require("../controllers/orderController")

// Criar pedido da API usando metodo .post
router.post("/order",controller.create)

// Buscar pedido com o metodo get
router.get("/order/:id",controller.get)

// Listar pedidos e chamo os metodos get
router.get("/order/list",controller.list)

// Deletar pedido
router.delete("/order/:id",controller.remove)

module.exports = router