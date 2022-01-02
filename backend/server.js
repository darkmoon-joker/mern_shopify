const express = require('express')
const products = require('../frontend/src/Products')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

const PORT = process.env.PORT || 1000;

app.get("/", (req, res) => {
    res.send("Hiiii");
})

app.get("/products", (req, res) => {
    res.json(products);
})

app.get("/products/:id", (req, res) => {
    res.json(products[Number(req.params.id) - 1]);
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${process.env.PORT} in mode ${process.env.NODE_ENV}`);
})