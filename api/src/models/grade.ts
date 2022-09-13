import pool from "../utils/database";

const getAllModel = async () => {
  try {
    const result = await pool.query(`
        SELECT  id,
                name
        FROM grade`);
    return result.rows;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

const createModel = async (name: string) => {
  try {
    const result = await pool.query(
      `
        INSERT INTO grade (
          name
        )
        VALUES ($1) 
        RETURNING *`,
      [name]
    );
    return result.rows;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

const updateModel = async (id: string, grade: string) => {
  try {
    const result = await pool.query(
      `
      UPDATE grade 
      SET name = $2 
      WHERE id = $1 
        RETURNING *`,
      [id, grade]
    );
    return result.rows;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

const deleteModel = async (id: string) => {
  try {
    const result = await pool.query(
      `
      DELETE FROM grade
      WHERE id = $1
      RETURNING *`,
      [id]
    );
    return result.rows;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export { getAllModel, createModel, updateModel, deleteModel };
