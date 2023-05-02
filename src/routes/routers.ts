/** @format */

import { Router } from "express";
import FlightCreate from "../controllers/flightController";
import TypeBiletCreate from "../controllers/typebiletController";
import BiletCreate from "../controllers/biletController";

const router = Router();

router.post("/flightcreate", FlightCreate.create);
router.get("/flightgetAll", FlightCreate.getAll);
router.get("/flightgetOne", FlightCreate.getOne);
router.delete("/flightdelete", FlightCreate.delete);
router.post("/availabilitybilet", FlightCreate.availabilitybilet);

router.post("/typebiletcreate", TypeBiletCreate.create);
router.get("/typebiletgetAll", TypeBiletCreate.getAll);
router.get("/typebiletgetOne", TypeBiletCreate.getOne);
router.delete("/typebiletdelete", TypeBiletCreate.delete);

router.post("/biletcreate", BiletCreate.create);
router.get("/biletgetAll", BiletCreate.getAll);
router.get("/biletgetOne", BiletCreate.getOne);
router.delete("/biletdelete", BiletCreate.delete);
router.post("/buyBilet", BiletCreate.buyBilet);

export default router;
