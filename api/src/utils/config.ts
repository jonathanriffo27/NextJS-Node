import cnf from "dotenv";
cnf.config();

type ConfigT = {
    apiPort: string;

}

const config = {
    apiPort: process.env.API_PORT || 3000,
    host: process.env.HOST || 'localhost',
    dbUsers : process.env.DB_USER || 'postgres',
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    dbMax: process.env.DB_MAX || 12,
    dbMin: process.env.DB_MIN || 2,
    dbIdle: process.env.DB_IDLE  || 3000,
    dbTimeout: process.env.DB_TIMEOUT || 2000,
    apiKey: process.env.API_KEY,
    secret: process.env.SECRET || 'secreto'
};

export default config;