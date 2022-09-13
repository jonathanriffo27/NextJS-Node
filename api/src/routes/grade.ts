import { Router } from "express";

import {
  getAllController,
  createController,
  updateController,
  deleteController,
} from "../controllers/grade";
import auth from "../middleware/auth";
import tokenDecrypt from "../middleware/jwt";

const GradeRouter = Router();

GradeRouter.get("/getAll", auth, tokenDecrypt, getAllController);
GradeRouter.post("/create", auth, tokenDecrypt, createController);
GradeRouter.put("/update/:id", auth, tokenDecrypt, updateController);
GradeRouter.delete("/delete/:id", auth, tokenDecrypt, deleteController);

export default GradeRouter;
