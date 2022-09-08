import { regionModel, districtModel } from "../models/region";

const regionController = async (req: any, res: any) => {
  try {
    const response = await regionModel();
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

const districtController = async (req: any, res: any) => {
  try {
    const response = await districtModel();
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

export { regionController, districtController };
