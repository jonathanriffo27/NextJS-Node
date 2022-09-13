import pool from "../utils/database";

const getAllModel = async () => {
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

export { getAllModel };
