import nodemailer from "nodemailer";

import config from "../utils/config";

const sendModel = async (
    emailTo: string,
    subject: string,
    emailHTML: string
) => {
    const {emailService, emailServer, emailUser, emailPassword} = config;
    try {
        const mailerTransport = {
            service: emailService,
            host: emailServer,
            auth: {
                user: emailUser,
                pass: emailPassword
            }
        };
        const transporter = nodemailer.createTransport(mailerTransport);
        const info = await transporter.sendMail({
            from: emailUser,
            to: emailTo,
            subject,
            html: emailHTML
        });
        return true;
    } catch(e) {
        return e;
    }
};

export { sendModel };

