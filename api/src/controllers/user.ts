import {
    getAllModel, getByIdModel, createModel, updateModel, deleteModel, validateModel, assignPasswordModel, getByEmailModel
} from "../models/user";
import generatePassword from "../utils/generatePassword";

const getAllController = async (req: any, res: any) => {
    try {
        const response = await getAllModel();
        res.status(200).json({
            success: true,
            data: response,
            error: null
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            error
        })
    }
};

const getByIdController = async (req: any, res: any) => {
    const {id} = req.params;
    try {
        const response = await getByIdModel(id);
        res.status(200).json({
            success: true,
            data: response,
            error: null
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            error
        })
    }
};

const createController = async (req: any, res: any) => {
    const {rut, name, paternalLastName, maternalLastName, email, phone, urlPhoto, grade} = req.body;
    try {
        const response = await createModel(rut, name, paternalLastName, maternalLastName, email, phone, urlPhoto, grade);
        res.status(200).json({
            success: true,
            data: response,
            error: null
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            error
        })
    }
};

const updateController = async (req: any, res: any) => {
    const {id} = req.params;
    const {rut, name, paternalLastName, maternalLastName, email, phone, isActive} = req.body;
    try { 
        const response = await updateModel(id, rut, name, paternalLastName, maternalLastName, email, phone, isActive); 
        res.status(200).json({
            success: true,
            data: response,
            error: null
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null, 
            error
        })
    }
};

const deleteController = async (req: any, res: any) => {
    const {id} = req.params;
    try {
        await deleteModel(id);
        res.status(200).json({
            success: true,
            error: null
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
};

const validateController = async (req: any, res: any) => {
    const {email, password} = req.body;
    const response = await validateModel(email, password);  
    try {
        if(response.isValid){
            res.status(200).json({
                success: true,
                data: response,
                error: null
            })
        }else {
            res.status(403).json({
                success: false,
                data: null,
                error: 'User not valid'
            })
        }     
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            error
        })
    }
};

const assaignPasswordController = async (req: any, res: any) => {
    const {id, password} = req.body;

    try {
        const response = await assignPasswordModel(id, password);
        res.status(200).json({
            success: true,
            data: response,
            error: null
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            error
        })
    }
}

const assignNewPasswordController = async (req: any, res: any) => {
    const {id, password, generatedPassword} = req.body;

    try {
        const userInfo = await getByIdModel(id);
        const response = await validateModel(userInfo.email, generatedPassword);
        
        
        if(!response.isValid) {
            res.status(403).json({
                success: false,
                data: null,
                error: 'Contraseña generica invalida'
            })  
        }else {
            const response = await assignPasswordModel(id, password);
            res.status(200).json({
                success: true,
                data: response,
                error: null
            })  
        } 
        
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            error
        })
    }
}



const assignGenericPasswordController = async (req: any, res: any) => {
    const {email} = req.body;
    const userInfo = await getByEmailModel(email);

    try {
        if(userInfo === undefined){
            res.status(500).json({
                success: false,
                data: null, 
                error: 'Email no valido'
            })
        } else {
            const genericPassword = generatePassword();
            await assignPasswordModel(userInfo.id, genericPassword);
            console.log(genericPassword);
            res.status(200).json({
                success: true,
                data: userInfo.id,
                error: null
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null, 
            error: 'Email no valido'
        })
    }
}

const getByEmailController = async (req: any, res: any) => {
    const {email} = req.body;
    
    try { 
        const response = await getByEmailModel(email);
        res.status(200).json({
            success: true,
            data: response,
            error: null
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null, 
            error
        })
    }
}

export {getAllController, getByIdController, createController, updateController, deleteController, validateController, assaignPasswordController, assignGenericPasswordController, getByEmailController, assignNewPasswordController} 