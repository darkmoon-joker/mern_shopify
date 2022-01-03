const express = require("express");
const Product = require("../models/ProductModel")
const asyncHandler = require("express-async-handler")
const router = express.Router();

//GET ROUTE FOR ALL PRODUCTS
router.get(
    "/products",
    asyncHandler(async(req,res)=>{
        const products=await Product.find({})
        res.json(products);
    })
)

//GET ROUTE FOR SINGLE PRODUCT
router.get('/products/:id',asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }
    else{
        res.status(404).json({message:'Product Not found'})

    }
}))

module.exports = router;