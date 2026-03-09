const service = require("../services/orderService")

// Criar pedido
async function create(req,res){

    try{

        const result = await service.createOrder(req.body)

        res.status(201).json(result)

    }catch(error){

        res.status(500).json({
            message:"Erro ao criar pedido",
            error:error.message
        })

    }

}

// Buscar pedido
async function get(req,res){

    try{

        const result = await service.getOrder(req.params.id)

        res.status(200).json(result)

    }catch(error){

        res.status(500).json({
            message:"Erro ao buscar pedido"
        })

    }

}

// Listar
async function list(req,res){

    const result = await service.listOrders()

    res.json(result)

}

// Deletar
async function remove(req,res){

    await service.deleteOrder(req.params.id)

    res.status(200).json({
        message:"Pedido deletado"
    })

}

module.exports = {
    create,
    get,
    list,
    remove
}