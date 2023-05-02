/** @format */

import DataBase from "../database/database";
import DataTypes from "sequelize";

const User = DataBase.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = DataBase.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Flight = DataBase.define("flight", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: false, allowNull: false },
  description: { type: DataTypes.STRING },
  data: { type: DataTypes.STRING },
  availabilitybilet: { type: DataTypes.BOOLEAN, defaultValue: true },
});

const Bilet = DataBase.define("bilet", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
  quantity: { type: DataTypes.INTEGER },
});

const TypeBilet = DataBase.define("typebilet", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const ByBilet = DataBase.define("bybilet", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

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

export { User, Basket, ByBilet, Flight, TypeBilet, Bilet };
