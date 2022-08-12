const express = require("express");
const app = express();
const DB = require("./config/database");
const productRouter = require("./api/product/product.router");
const userRouter = require("./api/users/user.router");
require("dotenv").config();
DB();

app.use(express.json());
app.use("/product", productRouter);
app.use("/", userRouter);

app.listen(process.env.PORT,() => {
    console.log('Server are listening on port '+process.env.PORT);
})