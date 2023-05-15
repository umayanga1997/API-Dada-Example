import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import dotEnv from "dotenv";
import { testService } from "./services/testService";

dotEnv.config();

const app = express();
const httpServer = http.createServer(app);

app.use(
  cors<cors.CorsRequest>({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  })
);
app.use(bodyParser.json());

app.get("/test-doc/:id/:phone", testService);

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4002 }, resolve)
);
console.log(`🚀 Server ready at http://localhost:4002`);
