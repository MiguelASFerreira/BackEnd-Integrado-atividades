const express = require("express");
const server = express()


server.get("/health", (req, res) => {
    res.status({
        status: "Running"
    })
})

const products = [
    {
        "id": 1,
        "name": "ps5",
        "price": 3000
    },
    {
        "id": 2,
        "name": "ps4",
        "price": 2500
    },
    {
        "id": 3,
        "name": "ps3",
        "price": 1750
    },
]

server.get("/products", (req, res) => {
    res.json({products})
})

server.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const product = products.find((product) => {
        return product.id === id;
    })
    res.json({product})
})

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running ${port}`)
})