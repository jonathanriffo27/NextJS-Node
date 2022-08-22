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

import auth from "../middleware/auth";

const UserRouter = Router();

UserRouter.get("/getAll", auth, getAllController);
UserRouter.get("/getById/:id", auth, getByIdController);
UserRouter.post("/create", auth, createController);
UserRouter.put("/update/:id", auth, updateController);
UserRouter.delete("/delete/:id", auth, deleteController);
UserRouter.post("/validate", auth, validateController);
UserRouter.put("/assignPassword", auth, assaignPasswordController);

export default UserRouter;
