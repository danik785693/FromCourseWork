"use strict";
/** @format */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models/models");
var FlightCreate = /** @class */ (function () {
    function FlightCreate() {
    }
    FlightCreate.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, description, data, availabilitybilet, createFlight, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, name_1 = _a.name, description = _a.description, data = _a.data, availabilitybilet = _a.availabilitybilet;
                        return [4 /*yield*/, models_1.Flight.create({
                                name: name_1,
                                description: description,
                                data: data,
                                availabilitybilet: availabilitybilet,
                            })];
                    case 1:
                        createFlight = _b.sent();
                        res.status(200).json(createFlight);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        res.status(400).json(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FlightCreate.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var getallFlight, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.Flight.findAll()];
                    case 1:
                        getallFlight = _a.sent();
                        res.status(200).json(getallFlight);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        res.status(400).json(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FlightCreate.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, getoneFlight, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.query.id;
                        return [4 /*yield*/, models_1.Flight.findOne({
                                where: { id: id },
                            })];
                    case 1:
                        getoneFlight = _a.sent();
                        res.status(200).json(getoneFlight);
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        res.status(400).json(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FlightCreate.prototype.availabilitybilet = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var flightId, find, allquantity, i, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        flightId = +req.query.flightId;
                        return [4 /*yield*/, models_1.Bilet.findAll({ where: { flightId: flightId } })];
                    case 1:
                        find = _a.sent();
                        allquantity = 0;
                        for (i = 0; i < find.length; i++) {
                            allquantity += find[i].dataValues.quantity;
                        }
                        res.status(200).json();
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        res.status(400).json(e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FlightCreate.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.query.id;
                        return [4 /*yield*/, models_1.Flight.destroy({ where: { id: id } })];
                    case 1:
                        _a.sent();
                        res.status(200).json({ messege: "Рейс удалён" });
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        res.status(400).json(e_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FlightCreate;
}());
exports.default = new FlightCreate();