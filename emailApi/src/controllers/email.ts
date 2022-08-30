import { sendModel } from "../models/email";

const sendController = async (req: any, res: any) => {
    const { emailTo, subject, emailHTML } = req.body;
    const response = await sendModel(emailTo, subject, emailHTML);
    res.json(response);
};

export { sendController };