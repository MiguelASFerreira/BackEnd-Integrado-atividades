const express = require("express");
const { createProduct, getAllProducts, getIdProduct, updateProduct, deleteProduct } = require("../database/products");
const router = express.Router()
const auth = require('../middleware/auth')


router.get("/products", auth, async (req, res) => {
    const moreThan = req.query.more_than ? Number(req.query.more_than) : 0;
    const products = await getAllProducts(moreThan);
    res.json({
        products
    })
})

router.get("/products/:id", auth, async (req, res) => {
    const id = Number(req.params.id);
    const product = await getIdProduct(id);
    res.json({product})
})

router.post("/products", auth, async (req, res) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    }

    const create = await createProduct(newProduct)
    res.json({
        product: create
    })
})

router.put("/products/:id", auth, async (req, res) => {
    const id = Number(req.params.id);
    const update = await updateProduct(id, req.body)
    if (!update){
        return res.status(404).send({message: "Product not found"})
        
    }
    res.json({
        update
    })
})

router.delete("/products/:id", auth, async (req, res) => {
    const id = Number(req.params.id)
    products = await deleteProduct(id);
    res.status(204).send()
})

module.exports = {
    router
}