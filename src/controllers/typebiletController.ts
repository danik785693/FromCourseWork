/** @format */

import { Request, Response } from "express";
import { TypeBilet } from "../models/models";

class TypeBiletCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const createTypeBilet = TypeBilet.create({ name });
      return res.status(200).json(createTypeBilet);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getallTypeBilet = await TypeBilet.findAll();
      res.status(200).json(getallTypeBilet);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const getoneTypeBilet = await TypeBilet.findOne({
        where: { id: id },
      });
      res.status(200).json(getoneTypeBilet);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await TypeBilet.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Тип билета удалён" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new TypeBiletCreate();
