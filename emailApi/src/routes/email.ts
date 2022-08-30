import { Router } from "express";
import { sendController } from "../controllers/email";

const EmailRouter = Router();

EmailRouter.post("/send", sendController);

export default EmailRouter;