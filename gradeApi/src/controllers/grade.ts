import {
  getAllModel,
  createModel,
  updateModel,
  deleteModel,
} from "../models/grade";

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

const createController = async (req: any, res: any) => {
  const { grade } = req.body;
  try {
    const response = await createModel(grade);
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

const updateController = async (req: any, res: any) => {
  const { id } = req.params;
  const { grade } = req.body;
  console.log(id, grade);

  try {
    const response = await updateModel(id, grade);
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

const deleteController = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const response = await deleteModel(id);
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

export {
  getAllController,
  createController,
  updateController,
  deleteController,
};
