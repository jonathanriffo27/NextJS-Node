import config from "./utils/config";
import app from "./app";

const {apiPort} = config;

app.listen(apiPort);
console.log(`App running in port: ${apiPort}`);