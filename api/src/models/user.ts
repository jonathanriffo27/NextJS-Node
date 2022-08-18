import pool from "../utils/database";

const getAllModel = async () => {
    const result = await pool.query(`
        SELECT  id,
                rut,
                name, 
                paternalLastName, 
                maternalLastName, 
                email, 
                phone
        FROM public.user`);
    return result.rows;
}

const getByIdModel = async (id: string) => {
    const result = await pool.query(`
        SELECT  rut,
                name, 
                paternalLastName, 
                maternalLastName, 
                email, 
                phone
        FROM public.user 
        WHERE id = $1`, [id]);
    return result.rows;
}

const createModel = async (rut: string, name: string, paternalLastName: string, maternalLastName: string, email: string, phone: string) => {
    const result = await pool.query(`
    INSERT INTO public.user (rut, 
                            name, 
                            paternalLastName, 
                            maternalLastName, 
                            email, 
                            phone) 
    VALUES ($1, $2, $3, $4, $5, $6)`, [rut, name, paternalLastName, maternalLastName, email, phone]);
    return result;
}

const updateModel = async (id: string, rut: string, name: string, paternalLastName: string, maternalLastName: string, email: string, phone: string) => {
    const result = await pool.query(` 
    UPDATE public.user SET  rut = $2, 
                            name = $3,
                            paternalLastName = $4,
                            maternalLastName =$5,
                            email = $6,
                            phone =$7 
    WHERE id = $1`, [id, rut, name, paternalLastName, maternalLastName, email, phone]);
    return result;
}

const deleteModel = async (id: string) => {
    const result = await pool.query(`
    DELETE FROM public.user 
    WHERE id = $1`, [id]);
    return result.rows;
}

export {getAllModel, getByIdModel, createModel, updateModel, deleteModel};