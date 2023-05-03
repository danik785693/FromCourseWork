/** @format */

import { Request, Response } from "express";
import { Bilet, Flight } from "../models/models";

class BiletCreate {
  async create(req: Request, res: Response) {
    try {
      const { flightId, name, price, quantity, typebiletId } = req.body;
      const createBilet = await Bilet.create({
        flightId,
        name,
        price,
        quantity,
        typebiletId,
      });
      res.status(200).json(createBilet);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getallBilet = await Bilet.findAll();
      res.status(200).json(getallBilet);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const getoneBilet = await Bilet.findOne({
        where: { id: id },
      });
      res.status(200).json(getoneBilet);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async buyBilet(req: Request, res: Response) {
    try {
      const flightId: number = +req.query.flightId;
      const typebiletId: number = +req.query.typebiletId;
      const find = await Bilet.findAll({
        where: { flightId: flightId },
      });
      let allquantity: number = 0;
      for (var i = 0; i < find.length; i++) {
        allquantity += find[i].dataValues.quantity;
      }
      if (allquantity > 0) {
        const quantitymodels = (
          await Bilet.findOne({
            where: { flightId: flightId, typebiletId: typebiletId },
          })
        ).dataValues.quantity;
        if (quantitymodels > 0) {
          await Bilet.update(
            { quantity: quantitymodels - 1 },
            { where: { flightId: flightId, typebiletId: typebiletId } }
          );
          return res.status(200).json(
            await Bilet.findOne({
              where: { flightId: flightId, typebiletId: typebiletId },
            })
          );
        } else {
          return res
            .status(200)
            .json({ message: "Билеты на этот класс закончились" });
        }
      } else {
        await Flight.update(
          { availabilitybilet: false },
          { where: { id: flightId } }
        );
        return res
          .status(200)
          .json({ message: "Билетов на рейс нету в наличии" });
      }
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Bilet.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Тип билета удалён" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new BiletCreate();
