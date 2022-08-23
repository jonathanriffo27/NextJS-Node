import { Router } from "express";

import {
  getAllController,
  getByIdController,
  createController,
  updateController,
  deleteController,
  validateController,
  assaignPasswordController,
  generatePasswordController,
  getByEmailController
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
UserRouter.post("/generatePassword", auth, generatePasswordController);
UserRouter.post("/getByEmail", auth, getByEmailController);

export default UserRouter;
