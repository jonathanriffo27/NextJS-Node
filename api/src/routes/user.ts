import { Router } from "express";

import {
  getAllController,
  getByIdController,
  createController,
  updateController,
  deleteController,
} from "../controllers/user";

const UserRouter = Router();

UserRouter.get("/getAll", getAllController);
UserRouter.get("/getById/:id", getByIdController);
UserRouter.post("/create", createController);
UserRouter.put("/update/:id", updateController);
UserRouter.delete("/delete/:id", deleteController);

export default UserRouter;
