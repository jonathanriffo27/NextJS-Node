import pool from "../utils/database";

const getAllModel = async () => {
  try {
    const result = await pool.query(`
        SELECT  id,
                region_id,
                name
        FROM district
        ORDER BY name`);
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
        WHERE region_id = $1
        ORDER BY name`,
      [id]
    );
    return result.rows;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export { getAllModel, getByRegionIdModel };
