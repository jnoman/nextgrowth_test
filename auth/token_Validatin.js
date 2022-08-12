const { verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("Authorization")
        if(token){
            if (token.startsWith('apikey ')) {
                token = token.slice(7);
                verify(token, process.env.JWT_KEY, (err, decoded) => {
                    if (err) {
                        return res.status(401).json({
                            message: "Invalid Token"
                        });
                    } else {
                    req.decoded = decoded;
                    next();
                    }
                });
              } else {
                return res.status(401).json({
                    message:"Invalid prefix"
                });
              }
            
        } else {
            return res.status(403).json({
                message:"Access Denied! Unauthorized User"
            });
        }
    }
}