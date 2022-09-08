import { getAllRegionModel, getAllDistrictModel } from "../models/region";

const getAllRegionController = async (req: any, res: any) => {
  try {
    const response = await getAllRegionModel();
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

const getAllDistrictController = async (req: any, res: any) => {
  try {
    const response = await getAllDistrictModel();
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

export { getAllRegionController, getAllDistrictController };
