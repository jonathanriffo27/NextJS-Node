import jwt from "jsonwebtoken";

import config from "./config";

export const generateToken = (data:any) => {
    let token = jwt.sign(data, config.secret);
    return token;
}
