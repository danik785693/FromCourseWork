"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bilet = exports.TypeBilet = exports.Flight = exports.ByBilet = exports.Basket = exports.User = void 0;
var database_1 = __importDefault(require("../database/database"));
var sequelize_1 = __importDefault(require("sequelize"));
var User = database_1.default.define("user", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: sequelize_1.default.STRING, unique: true },
    password: { type: sequelize_1.default.STRING },
    role: { type: sequelize_1.default.STRING, defaultValue: "USER" },
});
exports.User = User;
var Basket = database_1.default.define("basket", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.Basket = Basket;
var Flight = database_1.default.define("flight", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, unique: false, allowNull: false },
    description: { type: sequelize_1.default.STRING },
    data: { type: sequelize_1.default.STRING },
    availabilitybilet: { type: sequelize_1.default.BOOLEAN, defaultValue: true },
});
exports.Flight = Flight;
var Bilet = database_1.default.define("bilet", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING },
    price: { type: sequelize_1.default.INTEGER },
    quantity: { type: sequelize_1.default.INTEGER },
});
exports.Bilet = Bilet;
var TypeBilet = database_1.default.define("typebilet", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, allowNull: false },
});
exports.TypeBilet = TypeBilet;
var ByBilet = database_1.default.define("bybilet", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.ByBilet = ByBilet;
User.hasOne(Basket);
Basket.belongsTo(User);
Flight.hasMany(Bilet);
Bilet.belongsTo(Flight);
User.hasMany(ByBilet);
ByBilet.belongsTo(User);
Bilet.hasMany(ByBilet);
ByBilet.belongsTo(Bilet);
TypeBilet.hasMany(Bilet);
Bilet.belongsTo(TypeBilet);
