/** @format */

import express from "express";
import dotenv from "dotenv";
import logger from "./logger";
import DataBase from "./database/database";

dotenv.config();

const app = express();

const PORT: number = +process.env.PORT;

logger.error("error");
logger.warn("warn");
logger.info("info");
logger.verbose("verbose");
logger.debug("debag");
logger.silly("silly");

const start = async () => {
  try {
    await DataBase.sync();
    await DataBase.authenticate();
    app.listen(PORT, () => console.log("Server work " + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
