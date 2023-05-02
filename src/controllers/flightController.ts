/** @format */

import { Request, Response } from "express";
import { Flight, Bilet } from "../models/models";

class FlightCreate {
  async create(req: Request, res: Response) {
    try {
      const { name, description, data, availabilitybilet } = req.body;
      const createFlight = await Flight.create({
        name,
        description,
        data,
        availabilitybilet,
      });
      res.status(200).json(createFlight);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getallFlight = await Flight.findAll();
      res.status(200).json(getallFlight);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const getoneFlight = await Flight.findOne({
        where: { id: id },
      });
      res.status(200).json(getoneFlight);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async availabilitybilet(req: Request, res: Response) {
    try {
      const flightId: number = +req.query.flightId;
      const find = await Bilet.findAll({ where: { flightId: flightId } });
      let allquantity: number = 0;
      for (var i = 0; i < find.length; i++) {
        allquantity += find[i].dataValues.quantity;
      }

      res.status(200).json();
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Flight.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Рейс удалён" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new FlightCreate();
