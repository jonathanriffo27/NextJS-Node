import pg from "pg";

import config from "./config"

const {Pool} = pg;
const {dbUsers, host, dbName, dbPassword, dbMax, dbMin, dbIdle, dbTimeout}:any = config;

const pool = new Pool({
    user: dbUsers,
    host: host,
    database: dbName,
    password: dbPassword,
    max: dbMax,
    min: dbMin,
    idleTimeoutMillis: dbIdle,
    connectionTimeoutMillis: dbTimeout
  })

  export default pool;