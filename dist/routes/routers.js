"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var flightController_1 = __importDefault(require("../controllers/flightController"));
var typebiletController_1 = __importDefault(require("../controllers/typebiletController"));
var biletController_1 = __importDefault(require("../controllers/biletController"));
var userController_1 = __importDefault(require("../controllers/userController"));
var router = (0, express_1.Router)();
router.post("/registration", userController_1.default.registration);
router.post("/login", userController_1.default.login);
router.get("/check", userController_1.default.check);
router.post("/flightcreate", flightController_1.default.create);
router.get("/flightgetAll", flightController_1.default.getAll);
router.get("/flightgetOne", flightController_1.default.getOne);
router.delete("/flightdelete", flightController_1.default.delete);
router.post("/typebiletcreate", typebiletController_1.default.create);
router.get("/typebiletgetAll", typebiletController_1.default.getAll);
router.get("/typebiletgetOne", typebiletController_1.default.getOne);
router.delete("/typebiletdelete", typebiletController_1.default.delete);
router.post("/biletcreate", biletController_1.default.create);
router.get("/biletgetAll", biletController_1.default.getAll);
router.get("/biletgetOne", biletController_1.default.getOne);
router.delete("/biletdelete", biletController_1.default.delete);
router.post("/buyBilet", biletController_1.default.buyBilet);
exports.default = router;
