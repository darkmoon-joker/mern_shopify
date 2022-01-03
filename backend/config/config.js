const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopify", {useNewUrlParser: true});

const connectDb = async () => {
    var db=mongoose.connection;
    db.on('error',console.error.bind(console,'connection error'));
    db.once('open',function(){
    console.log('done');
    })
}
module.exports = connectDb