const express = require('express')
const { errorHandler } = require("./middlewares/errorMiddleware");
const products = require('../frontend/src/Products')
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const productsRoutes = require('./routes/productsRoute')
dotenv.config()
connectDb();
const app = express()

const PORT = process.env.PORT || 1000;

app.get("/", (req, res) => {
    res.send("Hiiii");
})

app.use("/api",productsRoutes);
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening on Port ${process.env.PORT} in mode ${process.env.NODE_ENV}`);
})