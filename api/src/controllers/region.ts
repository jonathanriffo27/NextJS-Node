import { getAllModel } from "../models/region";

const getAllController = async (req: any, res: any) => {
  try {
    const response = await getAllModel();
    res.status(200).json({
      success: true,
      data: response,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      error,
    });
  }
};

export { getAllController };
