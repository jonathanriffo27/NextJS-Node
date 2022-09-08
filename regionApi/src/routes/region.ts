import { Router } from "express";
import {
  getAllRegionController,
  getAllDistrictController,
} from "../controllers/region";

const RegionRouter = Router();

RegionRouter.get("/region/getAll", getAllRegionController);
RegionRouter.get("/district/getAll", getAllDistrictController);

export default RegionRouter;
