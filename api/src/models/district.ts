import pool from "../utils/database";

const getAllModel = async () => {
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

const getByRegionIdModel = async (id: string) => {
  try {
    const result = await pool.query(
      `
        SELECT  id,
                name
        FROM district
        WHERE regionid = $1`,
      [id]
    );
    return result.rows;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export { getAllModel, getByRegionIdModel };
