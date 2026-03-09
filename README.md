# API de Gerenciamento de Pedidos

Este projeto é uma API desenvolvida em Node.js para gerenciamento de pedidos.
A API permite criar, consultar, listar e deletar pedidos armazenados em banco de dados SQL.

## Tecnologias utilizadas

* Node.js
* Express
* SQL Server
* JavaScript

## Estrutura do Projeto

```
src
 ├ controllers
 ├ services
 ├ routes
 ├ repository
 └ config
```

## Como executar o projeto

1. Clone o repositório

```
git clone https://github.com/seuusuario/pedido-api.git
```

2. Instale as dependências

```
npm install
```

3. Configure a conexão com o banco de dados no arquivo de configuração.

4. Inicie o servidor

```
node server.js
```

Servidor será iniciado em:

```
http://localhost:3000
```

## Endpoints

### Criar Pedido

POST

```
http://localhost:3000/order
```

Body:

```json
{
 "numeroPedido": "v10089015vdb-01",
 "valorTotal": 10000,
 "dataCriacao": "2023-07-19T12:24:11.529Z",
 "items": [
  {
   "idItem": "2434",
   "quantidadeItem": 1,
   "valorItem": 1000
  }
 ]
}
```

### Buscar Pedido

GET

```
http://localhost:3000/order/{orderId}
```

Exemplo:

```
http://localhost:3000/order/v10089015vdb
```

### Listar Pedidos

GET

```
http://localhost:3000/order/list
```

### Deletar Pedido

DELETE

```
http://localhost:3000/order/{orderId}
```

## Transformação de Dados (Mapping)

A API recebe o JSON no formato:

```
numeroPedido
valorTotal
dataCriacao
items
```

E transforma para salvar no banco:

```
orderId
value
creationDate
items:
 productId
 quantity
 price
```

## Estrutura do Banco de Dados

Tabela: Order

| Campo        | Tipo     |
| ------------ | -------- |
| orderId      | string   |
| value        | number   |
| creationDate | datetime |

Tabela: Items

| Campo     | Tipo   |
| --------- | ------ |
| orderId   | string |
| productId | number |
| quantity  | number |
| price     | number |

## Autor

Projeto desenvolvido como parte de desafio técnico para API de gerenciamento de pedidos 
test. commit
