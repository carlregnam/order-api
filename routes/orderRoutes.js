const express = require("express")
const router = express.Router()

const controller = require("../controllers/orderController")

// Criar pedido
router.post("/order",controller.create)

// Buscar pedido
router.get("/order/:id",controller.get)

// Listar pedidos
router.get("/order/list",controller.list)

// Deletar pedido
router.delete("/order/:id",controller.remove)

module.exports = router