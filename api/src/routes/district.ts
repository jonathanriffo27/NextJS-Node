import { Router } from "express";

import {
  getAllController,
  getByRegionIdController,
} from "../controllers/district";
import auth from "../middleware/auth";
import tokenDecrypt from "../middleware/jwt";

const DistrictRouter = Router();

DistrictRouter.get("/getAll", auth, tokenDecrypt, getAllController);

DistrictRouter.get(
  "/getByRegionId/:id",
  auth,
  tokenDecrypt,
  getByRegionIdController
);

export default DistrictRouter;
