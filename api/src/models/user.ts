import pool from "../utils/database";

const getAll = async () => {
    const result = await pool.query(`
        SELECT  id,
                rut,
                name, 
                paternalLastName, 
                maternalLastName, 
                email, 
                phone
        FROM users`);
    return result.rows;
}

const getById = async (id: string) => {
    const result = await pool.query(`
        SELECT  rut,
                name, 
                paternalLastName, 
                maternalLastName, 
                email, 
                phone
        FROM users 
        WHERE id = $1`, [id]);
    return result.rows;
}

const create = async (rut: string, name: string, paternalLastName: string, maternalLastName: string, email: string, phone: string) => {
    const result = await pool.query(`
    INSERT INTO users (rut, name, paternalLastName, maternalLastName, email, phone) VALUES ($1, $2, $3, $4, $5, $6)`, [rut, name, paternalLastName, maternalLastName, email, phone]);
    return result;
}

const update = async (id: string, name: string) => {
    const result = await pool.query(`
    UPDATE users SET name = $2 WHERE id = $1`, [id, name]);
    return result;
}

const drop = async (id: string) => {
    const result = await pool.query(`
    DELETE FROM users WHERE id = $1`, [id]);
    return result.rows;
}

export {getAll, getById, create, update, drop};