import { Router } from "express";

import {
  getAllController,
  getByIdController,
  createController,
  updateController,
  deleteController,
  validateController,
  assaignPasswordController
} from "../controllers/user";

const UserRouter = Router();

UserRouter.get("/getAll", getAllController);
UserRouter.get("/getById/:id", getByIdController);
UserRouter.post("/create", createController);
UserRouter.put("/update/:id", updateController);
UserRouter.delete("/delete/:id", deleteController);
UserRouter.post("/validate", validateController);
UserRouter.put("/assignPassword", assaignPasswordController);

export default UserRouter;
