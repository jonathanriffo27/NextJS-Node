import { getAllModel, getByRegionIdModel } from "../models/district";

const getByRegionIdController = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const response = await getByRegionIdModel(id);
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

export { getByRegionIdController, getAllController };
