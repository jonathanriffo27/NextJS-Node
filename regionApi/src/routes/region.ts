import { Router } from "express";
import { regionController, districtController } from "../controllers/region";

const RegionRouter = Router();

RegionRouter.get("/region/getAll", regionController);
RegionRouter.get("/district/getAll", districtController);

export default RegionRouter;
