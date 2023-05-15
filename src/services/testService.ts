import { NextFunction, Request, Response } from "express";
import { dada_request } from "../util/api_dada";

export const testService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const mapData = [];
  mapData.push({ Data_01: "Data One" });
  mapData.push({ Data_02: "Data Two" });
  mapData.push({ Data_03: "Data Tree" });
  mapData.push({ Data_04: "Data Four" });
  mapData.push({ Data_05: "Data Five" });

  // Make a API Request in the API DADA Document
  dada_request(req, mapData, 200, "Success");

  res.status(200).json(mapData).send().end();
};
