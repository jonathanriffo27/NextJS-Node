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
        FROM public.user
        WHERE isActive = true`);
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
    return result.rows[0];
}

const createModel = async (rut: string, name: string, paternalLastName: string, maternalLastName: string, email: string, phone: string, hash: string, urlPhoto: string, grade: string) => {
    const result = await pool.query(`
        INSERT INTO public.user (
            rut, 
            name, 
            paternalLastName, 
            maternalLastName, 
            email, 
            phone,
            hash, 
            urlPhoto,
            grade
        ) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
        RETURNING *`, [rut, name, paternalLastName, maternalLastName, email, phone, hash, urlPhoto, grade]);
    return result.rows[0];
}

const updateModel = async (id: string, rut: string, name: string, paternalLastName: string, maternalLastName: string, email: string, phone: string, hash: string, isActive: string) => {
    const result = await pool.query(`
        UPDATE public.user 
        SET rut = $2, 
            name = $3,
            paternalLastName = $4,
            maternalLastName = $5,
            email = $6,
            phone = $7,
            hash = $8,
            isActive = $9 
        WHERE id = $1 
        RETURNING *`, [id, rut, name, paternalLastName, maternalLastName, email, phone, hash, isActive]);
    return result.rows[0];
}

const deleteModel = async (id: string) => {
    const result = await pool.query(`
    UPDATE public.user 
    SET  isACtive = false  
    WHERE id = $1`, [id]);
    return result;
}

const validateModel = async (email: string, password: string) => {
    const result = await pool.query(`
        SELECT  rut,
                name, 
                paternalLastName, 
                maternalLastName, 
                email, 
                phone,
                urlphoto,
                grade
        FROM public.user 
        WHERE email = $1 AND hash = $2`, [email, password]);
    return result.rows[0];
} 

export {getAllModel, getByIdModel, createModel, updateModel, deleteModel, validateModel};