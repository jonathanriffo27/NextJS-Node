import config from "../utils/config";

const {apiKey} = config;

const auth = (req: any, res: any, next: any) => {
    const {api_key} = req.headers;
    if(api_key === apiKey) {
        return next();
    } else {
        res.status(401).json({ error: "No autorizado" });
    }
} 

export default auth;