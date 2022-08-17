import {getAll, getById, create, update, drop} from "../models/user";

const getAllController = async (req: any, res: any) => {
    const response = await getAll();
    res.send(response);
};

const getByIdController = async (req: any, res: any) => {
    const {id} = req.params;
    const response = await getById(id);
    res.send(response);
};

const createController = async (req: any, res: any) => {
    const rut = req.body.rut
    const name = req.body.name
    const paternalLastName = req.body.paternalLastName
    const maternalLastName = req.body.maternalLastName
    const email = req.body.email
    const phone = req.body.phone
    const response = await create(rut, name, paternalLastName, maternalLastName, email, phone);
    res.send(response);
};

const updateController = async (req: any, res: any) => {
    const {id} = req.params;
    const name = req.body.name
    const response = await update(id, name);
    res.send(response);
};

const deleteController = async (req: any, res: any) => {
    const {id} = req.params;
    const response = await drop(id);
    res.send(response); 
};

export {getAllController, getByIdController, createController, updateController, deleteController}