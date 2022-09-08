import pool from "../utils/database";
import bcrypt from "bcrypt";

const getAllModel = async () => {
  const result = await pool.query(`
  SELECT  U.id,
          U.rut,
          U.name,
          U.paternalLastName,
          U.maternalLastName,
          U.adress,
          R.name AS region_name,
          D.name AS district_name,
          U.email,
          U.phone,
          U.urlPhoto,
          U.grade
  FROM public.user U
  LEFT OUTER JOIN public.region R ON U.region_id = R.id 
  LEFT OUTER JOIN public.district D ON U.district_id = D.id 
  WHERE isActive = true`);
  return result.rows;
};

const getByIdModel = async (id: string) => {
  const result = await pool.query(
    `
        SELECT  id,
                rut, 
                name, 
                paternalLastName, 
                maternalLastName, 
                adress,
                region,
                district,
                email, 
                phone,
                urlPhoto,
                grade
        FROM public.user 
        WHERE id = $1`,
    [id]
  );
  return result.rows[0];
};

const createModel = async (
  rut: string,
  name: string,
  paternalLastName: string,
  maternalLastName: string,
  adress: string,
  region: string,
  district: string,
  email: string,
  phone: string,
  urlPhoto: string,
  grade: string
) => {
  const result = await pool.query(
    `
        INSERT INTO public.user (
            rut, 
            name, 
            paternalLastName, 
            maternalLastName, 
            adress,
            region,
            district,
            email, 
            phone,
            urlPhoto,
            grade
        ) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
        RETURNING *`,
    [
      rut,
      name,
      paternalLastName,
      maternalLastName,
      adress,
      region,
      district,
      email,
      phone,
      urlPhoto,
      grade,
    ]
  );
  return result.rows[0];
};

const updateModel = async (
  id: string,
  rut: string,
  name: string,
  paternalLastName: string,
  maternalLastName: string,
  adress: string,
  region: string,
  district: string,
  email: string,
  phone: string,
  urlPhoto: string,
  grade: string
) => {
  const result = await pool.query(
    `
        UPDATE public.user 
        SET rut = $2, 
            name = $3,
            paternalLastName = $4,
            maternalLastName = $5,
            adress = $6,
            region_id = $7,
            district_id = $8,
            email = $9,
            phone = $10,
            urlPhoto = $11,
            grade = $12 
        WHERE id = $1 
        RETURNING *`,
    [
      id,
      rut,
      name,
      paternalLastName,
      maternalLastName,
      adress,
      region,
      district,
      email,
      phone,
      urlPhoto,
      grade,
    ]
  );
  return result.rows[0];
};

const deleteModel = async (id: string) => {
  const result = await pool.query(
    `
    UPDATE public.user 
    SET  isACtive = false  
    WHERE id = $1`,
    [id]
  );
  return result;
};

const validateModel = async (email: string, password: string) => {
  try {
    const result = await pool.query(
      `
          SELECT  rut,
                  name, 
                  paternallastname, 
                  maternallastname, 
                  email, 
                  phone,
                  urlphoto,
                  grade,
                  hash
          FROM public.user 
          WHERE email = $1`,
      [email]
    );
    const {
      rut,
      name,
      paternallastname,
      maternallastname,
      phone,
      urlphoto,
      grade,
      hash,
    } = result.rows[0];
    const isValid = await bcrypt.compare(password, hash);
    return {
      rut,
      name,
      paternallastname,
      maternallastname,
      phone,
      urlphoto,
      grade,
      isValid,
    };
  } catch (error) {
    throw new Error();
  }
};

const assignPasswordModel = async (id: string, password: string) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  const result = await pool.query(
    `
    UPDATE public.user 
    SET  hash = $2  
    WHERE id = $1`,
    [id, hash]
  );
  return result;
};

const getByEmailModel = async (email: string) => {
  const result = await pool.query(
    `
        SELECT  id,
                rut,
                name, 
                paternalLastName, 
                maternalLastName, 
                email, 
                phone,
                urlphoto,
                grade
        FROM public.user 
        WHERE email = $1`,
    [email]
  );
  return result.rows[0];
};

export {
  getAllModel,
  getByIdModel,
  createModel,
  updateModel,
  deleteModel,
  validateModel,
  assignPasswordModel,
  getByEmailModel,
};
