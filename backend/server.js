const express = require('express')
const { errorHandler } = require("./middlewares/errorMiddleware");
const products = require('../frontend/src/Products')
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const productsRoutes = require('./routes/productsRoute')
const usersRoutes = require('./routes/UsersRoute')
dotenv.config()
connectDb();
const app = express();
app.use(express.json())

const PORT = process.env.PORT || 1000;

app.get("/", (req, res) => {
    res.send("Hiiii");
})

app.use("/api",productsRoutes);
app.use("/api/users",usersRoutes);
app.use("/api/orders", orderRoutes);
// app.get("/api/config/paypal", (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID);
// });

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening on Port ${process.env.PORT} in mode ${process.env.NODE_ENV}`);
})