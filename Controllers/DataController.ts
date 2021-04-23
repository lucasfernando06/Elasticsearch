import * as express from "express";
import { DataService } from "../Services/DataService";

export const Create = async (req: express.Request, res: express.Response) => {
  const dataService = new DataService();
  const result = await dataService.Create(req, res);

  res.status(result?.statusCode).send(result);
};

export const Get = async (req: express.Request, res: express.Response) => {
  const dataService = new DataService();
  const result = await dataService.Get(req, res);

  res.status(result?.statusCode).send(result);
};

export const Search = async (req: express.Request, res: express.Response) => {
  const dataService = new DataService();
  const result = await dataService.Search(req, res);

  res.status(result?.statusCode).send(result);
};

export const Delete = async (req: express.Request, res: express.Response) => {
  const dataService = new DataService();
  const result = await dataService.Delete(req, res);

  res.status(result?.statusCode).send(result);
};