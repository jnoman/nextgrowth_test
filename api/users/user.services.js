const userModel = require("./user.model");

module.exports = {
    createUser:(data)=>{
        return userModel.create(data);
    },
    getUserByEmail:(email)=>{
        return userModel.findOne({ _email: email});
    }
}

