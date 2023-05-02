/** @format */

import { Router } from "express";
import FlightCreate from "../controllers/flightController";
import TypeBiletCreate from "../controllers/typebiletController";

const router = Router();

router.post("/flightcreate", FlightCreate.create);
router.get("/flightgetAll", FlightCreate.getAll);
router.get("/flightgetAll", FlightCreate.getAll);
router.delete("/flightdelete", FlightCreate.delete);

router.post("/typebiletcreate", TypeBiletCreate.create);
router.get("/typebiletgetAll", TypeBiletCreate.getAll);
router.get("/typebiletgetAll", TypeBiletCreate.getAll);
router.delete("/typebiletdelete", TypeBiletCreate.delete);

export default router;
