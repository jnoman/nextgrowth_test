const userService = require("./user.services");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateSignup, validateSignin } = require("./../../validator/user_Validator");
require("dotenv").config();

module.exports = {
    createUser:(req, res)=>{
        const body = req.body;
        const { error, value } = validateSignup(body);
        if (error) {
            return res.status(403).json({
                message:error.details
            });
        }
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        userService.createUser(body).then(result=>{
            if(result){
                res.status(200).json({
                    message:"Uset inserted successfully",
                    data:result
                })
            } else {
                res.status(403).json({
                    message:"Failed to insert user",
                    data:result
                })
            }
        });
    },
    loginUser:(req, res)=>{
        const body = req.body;
        const { error, value } = validateSignin(body);
        if (error) {
            return res.status(403).json({
                message:error.details
            });
        }
        userService.getUserByEmail(body.email).then(result=>{
            if(result){
                const valid = compareSync(body.password, result.password);
                if(valid){
                    result.password= undefined;
                    const jsonToken = sign({result:result}, process.env.JWT_KEY, { expiresIn:"10h" });
                    res.status(200).json({
                        message:"login successfully",
                        Token:jsonToken
                    })
                } else {
                    res.status(401).json({
                        message:"Invalid email or password",
                        data:result
                    })
                }
                
            } else {
                res.status(401).json({
                    message:"Invalid email or password",
                    data:result
                })
            }
        });
    }
}