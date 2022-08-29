import { Router } from "express";

import {
  getAllController,
  getByIdController,
  createController,
  updateController,
  deleteController,
  validateController,
  assaignPasswordController,
  assignGenericPasswordController,
  getByEmailController,
  assignNewPasswordController
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
UserRouter.put("/assignGenericPassword", auth, assignGenericPasswordController);
UserRouter.post("/getByEmail", auth, getByEmailController);
UserRouter.put("/assignNewPassword", auth, assignNewPasswordController);

export default UserRouter;
