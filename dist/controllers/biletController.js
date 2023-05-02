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
var BiletCreate = /** @class */ (function () {
    function BiletCreate() {
    }
    BiletCreate.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, flightId, name_1, price, quantity, typebiletId, createBilet, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, flightId = _a.flightId, name_1 = _a.name, price = _a.price, quantity = _a.quantity, typebiletId = _a.typebiletId;
                        return [4 /*yield*/, models_1.Bilet.create({
                                flightId: flightId,
                                name: name_1,
                                price: price,
                                quantity: quantity,
                                typebiletId: typebiletId,
                            })];
                    case 1:
                        createBilet = _b.sent();
                        res.status(200).json(createBilet);
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
    BiletCreate.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var getallBilet, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.Bilet.findAll()];
                    case 1:
                        getallBilet = _a.sent();
                        res.status(200).json(getallBilet);
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
    BiletCreate.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, getoneBilet, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.query.id;
                        return [4 /*yield*/, models_1.Bilet.findOne({
                                where: { id: id },
                            })];
                    case 1:
                        getoneBilet = _a.sent();
                        res.status(200).json(getoneBilet);
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
    BiletCreate.prototype.buyBilet = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var flightId, typebiletId, find, allquantity, i, quantitymodels, _a, _b, e_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 10, , 11]);
                        flightId = +req.query.flightId;
                        typebiletId = +req.query.typebiletId;
                        return [4 /*yield*/, models_1.Bilet.findAll({
                                where: { flightId: flightId },
                            })];
                    case 1:
                        find = _c.sent();
                        allquantity = 0;
                        for (i = 0; i < find.length; i++) {
                            allquantity += find[i].dataValues.quantity;
                        }
                        if (!(allquantity > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, models_1.Bilet.findOne({
                                where: { flightId: flightId, typebiletId: typebiletId },
                            })];
                    case 2:
                        quantitymodels = (_c.sent()).dataValues.quantity;
                        if (!(quantitymodels > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, models_1.Bilet.update({ quantity: quantitymodels - 1 }, { where: { flightId: flightId, typebiletId: typebiletId } })];
                    case 3:
                        _c.sent();
                        _b = (_a = res.status(200)).json;
                        return [4 /*yield*/, models_1.Bilet.findOne({
                                where: { flightId: flightId, typebiletId: typebiletId },
                            })];
                    case 4: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                    case 5: return [2 /*return*/, res
                            .status(200)
                            .json({ message: "Билеты на этот класс закончились" })];
                    case 6: return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, models_1.Flight.update({ availabilitybilet: false }, { where: { id: flightId } })];
                    case 8:
                        _c.sent();
                        return [2 /*return*/, res
                                .status(200)
                                .json({ message: "Билетов на рейс нету в наличии" })];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        e_4 = _c.sent();
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    BiletCreate.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.query.id;
                        return [4 /*yield*/, models_1.Bilet.destroy({ where: { id: id } })];
                    case 1:
                        _a.sent();
                        res.status(200).json({ messege: "Тип билета удалён" });
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
    return BiletCreate;
}());
exports.default = new BiletCreate();
