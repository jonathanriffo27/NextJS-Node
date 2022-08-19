import {
    getAllModel, getByIdModel, createModel, updateModel, deleteModel, validateModel
} from "../models/user";

const getAllController = async (req: any, res: any) => {
    const response = await getAllModel();
    try {
        res.json({
            success: true,
            data: response,
            error: null
        })
    } catch (error) {
        res.json({
            success: false,
            data: null,
            error
        })
    }
};

const getByIdController = async (req: any, res: any) => {
    const {id} = req.params;
    const response = await getByIdModel(id);
    try {
        res.json({
            success: true,
            data: response,
            error: null
        })
    } catch (error) {
        res.json({
            success: false,
            data: null,
            error
        })
    }
};

const createController = async (req: any, res: any) => {
    const {rut, name, paternalLastName, maternalLastName, email, phone} = req.body
    const response = await createModel(rut, name, paternalLastName, maternalLastName, email, phone);
    try {
        res.json({
            success: true,
            data: response,
            error: null
        })
    } catch (error) {
        res.json({
            success: false,
            data: null,
            error
        })
    }
};

const updateController = async (req: any, res: any) => {
    const {id} = req.params;
    const {rut, name, paternalLastName, maternalLastName, email, phone, hash, isActive} = req.body;
    const response = await updateModel(id, rut, name, paternalLastName, maternalLastName, email, phone, hash, isActive); 
    try { 
        res.json({
            success: true,
            data: response,
            error: null
        })
    } catch (error) {
        res.json({
            success: false,
            data: null, 
            error
        })
    }
};

const deleteController = async (req: any, res: any) => {
    const {id} = req.params;
    await deleteModel(id);
    try {
        res.json({
            success: true,
            error: null
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }
};

const validateController = async (req: any, res: any) => {
    const {email, password} = req.body;
    const response = await validateModel(email, password);  
    try {
        res.json({
            success: true,
            data: response,
            error: null
        })
    } catch (error) {
        res.json({
            success: false,
            data: null,
            error
        })
    }
};

export {getAllController, getByIdController, createController, updateController, deleteController, validateController} 