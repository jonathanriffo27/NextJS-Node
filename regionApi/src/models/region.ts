import pool from "../utils/database";

const regionModel = async () => {
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

const districtModel = async () => {
  try {
    const result = await pool.query(`
        SELECT  regionid,
                name
        FROM district`);
    return result.rows;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export { regionModel, districtModel };
