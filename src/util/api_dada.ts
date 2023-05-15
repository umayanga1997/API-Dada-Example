import axios from "axios";
import { Request } from "express";

export const dada_request = async (
  req: Request,
  res: any,
  statusCode?: number,
  statusMessgae?: String
) => {
  try {
    const request = {
      req: {
        baseUrl: req.baseUrl,
        path: req.path,
        method: req.method,
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
      },
      response: res,
      status: {
        statusCode: statusCode,
        messgae: statusMessgae,
      },
    };

    const response = await axios.post(
      `${process.env.DADA_URL}?token=${process.env.DADA_TOKEN}&collId=${process.env.DADA_COLL_ID}`,
      request,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log("DADA Request successfull! :: " + response.status);
  } catch (error) {
    console.log("DADA Request unuccessfull! :: " + error);
  }
};
