const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function(){
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 5000
    }).catch(error => console.log(error.message));
    mongoose.connection.on("connected", () => {
        console.log("DB Connected ....")
    });
};