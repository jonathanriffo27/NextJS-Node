import pool from "../utils/database";

const getAllRegionModel = async () => {
  try {
    const result = await pool.query(`
        SELECT  id,
                number,
                name
        FROM region`);
    return result.rows;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

const getAllDistrictModel = async () => {
  try {
    const result = await pool.query(`
        SELECT  id,
                regionid,
                name
        FROM district`);
    return result.rows;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export { getAllRegionModel, getAllDistrictModel };
