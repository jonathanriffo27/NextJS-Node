import jwt from "jsonwebtoken";

import config from "../utils/config";

const tokenDecrypt = (req:any, res:any, next:any) => {
    const {token, api_key} = req.headers;
    try { 
        let decoded = jwt.verify(token, config.secret);
        if(api_key === decoded) {
            return next();
        } else {
            res.status(401).json({error: "No autorizado"});
        }
    } catch {
        res.status(401).json({error: "No autorizado"});
    }
};

export default tokenDecrypt;