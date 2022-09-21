import pool from "../utils/database";
import bcrypt from "bcrypt";

const getAllModel = async () => {
  try {
    const result = await pool.query(`
    SELECT  USR.id,
            USR.rut,
            USR.name,
            USR.paternalLastName,
            USR.maternalLastName,
            USR.address,
            USR.region_id,
            REG.name AS region_name,
            USR.district_id,
            DIS.name AS district_name,
            USR.email,
            USR.phone,
            USR.urlPhoto,
            USR.grade_id,
            GRA.name AS grade_name
    FROM public.user USR
    LEFT OUTER JOIN public.region REG ON USR.region_id = REG.id 
    LEFT OUTER JOIN public.district DIS ON USR.district_id = DIS.id 
    LEFT OUTER JOIN public.grade GRA ON USR.grade_id = GRA.id 
    WHERE USR.isActive = true
    ORDER BY name, paternallastname, maternallastname`);
    return result.rows;
  } catch (error) {
    throw new Error();
  }
};

const getByIdModel = async (id: string) => {
  const result = await pool.query(
    `
    SELECT  USR.id,
            USR.rut,
            USR.name,
            USR.paternalLastName,
            USR.maternalLastName,
            USR.address,
            USR.region_id,
            REG.name AS region_name,
            USR.district_id,
            DIS.name AS district_name,
            USR.email,
            USR.phone,
            USR.urlPhoto,
            USR.grade_id,
            GRA.name AS grade_name
        FROM public.user USR
        LEFT OUTER JOIN public.region REG ON USR.region_id = REG.id 
        LEFT OUTER JOIN public.district DIS ON USR.district_id = DIS.id 
        LEFT OUTER JOIN public.grade GRA ON USR.grade_id = GRA.id 
        WHERE id = $1
        ORDER BY name, paternallastname, maternallastname`,
    [id]
  );
  return result.rows[0];
};

const createModel = async (
  rut: string,
  name: string,
  paternalLastName: string,
  maternalLastName: string,
  address: string,
  region_id: string,
  district_id: string,
  email: string,
  phone: string,
  urlPhoto: string,
  grade_id: string
) => {
  const result = await pool.query(
    `
        INSERT INTO public.user (
            rut, 
            name, 
            paternalLastName, 
            maternalLastName, 
            address,
            region_id,
            district_id,
            email, 
            phone,
            urlPhoto,
            grade_id
        ) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
        RETURNING *`,
    [
      rut,
      name,
      paternalLastName,
      maternalLastName,
      address,
      region_id,
      district_id,
      email,
      phone,
      urlPhoto,
      grade_id,
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
  address: string,
  region_id: string,
  district_id: string,
  email: string,
  phone: string,
  urlPhoto: string,
  grade_id: string
) => {
  const result = await pool.query(
    `
        UPDATE public.user 
        SET rut = $2, 
            name = $3,
            paternalLastName = $4,
            maternalLastName = $5,
            address = $6,
            region_id = $7,
            district_id = $8,
            email = $9,
            phone = $10,
            urlPhoto = $11,
            grade_id = $12 
        WHERE id = $1 
        RETURNING *`,
    [
      id,
      rut,
      name,
      paternalLastName,
      maternalLastName,
      address,
      region_id,
      district_id,
      email,
      phone,
      urlPhoto,
      grade_id,
    ]
  );
  return result.rows[0];
};

const deleteModel = async (id: string) => {
  const result = await pool.query(
    `
    UPDATE public.user 
    SET  isActive = false  
    WHERE id = $1
    RETURNING *`,
    [id]
  );
  return result;
};

const validateModel = async (email: string, password: string) => {
  try {
    const result = await pool.query(
      `
      SELECT  USR.id,
              USR.rut,
              USR.name,
              USR.paternalLastName,
              USR.maternalLastName,
              USR.address,
              REG.name AS region_name,
              DIS.name AS district_name,
              USR.email,
              USR.phone,
              USR.urlPhoto,
              GRA.name AS grade_name,
              USR.hash
      FROM public.user USR
      LEFT OUTER JOIN public.region REG ON USR.region_id = REG.id 
      LEFT OUTER JOIN public.district DIS ON USR.district_id = DIS.id 
      LEFT OUTER JOIN public.grade GRA ON USR.grade_id = GRA.id 
      WHERE email = $1
      ORDER BY name, paternallastname, maternallastname `,
      [email]
    );

    const {
      rut,
      name,
      paternallastname,
      maternallastname,
      address,
      region_name,
      district_name,
      phone,
      urlphoto,
      grade_name,
      hash,
    } = result.rows[0];
    const isValid = await bcrypt.compare(password, hash);
    return {
      rut,
      name,
      paternallastname,
      maternallastname,
      address,
      region_name,
      district_name,
      phone,
      urlphoto,
      grade_name,
      isValid,
    };
  } catch (error) {
    throw new Error((error as Error).message);
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
    SELECT  USR.id,
            USR.rut,
            USR.name,
            USR.paternalLastName,
            USR.maternalLastName,
            USR.address,
            USR.region_id,
            REG.name AS region_name,
            USR.district_id,
            DIS.name AS district_name,
            USR.email,
            USR.phone,
            USR.urlPhoto,
            USR.grade_id,
            GRA.name AS grade_name
    FROM public.user USR
    LEFT OUTER JOIN public.region REG ON USR.region_id = REG.id 
    LEFT OUTER JOIN public.district DIS ON USR.district_id = DIS.id 
    LEFT OUTER JOIN public.grade GRA ON USR.grade_id = GRA.id 
    WHERE email = $1
    ORDER BY name, paternallastname, maternallastname`,
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
