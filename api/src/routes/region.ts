import { Router } from "express";

import auth from "../middleware/auth";
import tokenDecrypt from "../middleware/jwt";
import { getAllController } from "../controllers/region";

const RegionRouter = Router();

RegionRouter.get("/getAll", auth, tokenDecrypt, getAllController);

export default RegionRouter;
