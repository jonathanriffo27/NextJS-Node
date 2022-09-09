import { Router } from "express";
import {
  getAllController,
  createController,
  updateController,
  deleteController,
} from "../controllers/grade";

const GradeRouter = Router();

GradeRouter.get("/getAll", getAllController);
GradeRouter.post("/create", createController);
GradeRouter.put("/update/:id", updateController);
GradeRouter.delete("/delete/:id", deleteController);

export default GradeRouter;
