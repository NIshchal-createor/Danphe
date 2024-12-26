import express, { Request, Response, NextFunction, Express } from "express";
import Config from "./Config/config";
import compression from "compression";
import helmet, { xssFilter } from "helmet";
import Logger from "./Utils/Logger/Logger";
import cors from "cors";
import adminRoutes from "./Routes/Admin.routes";
import HandleError from "./Utils/Logger/HandleError";
import Sql from "./Utils/Database/Action";

const init = (app: Express) => {
  app.use(xssFilter());
  // app.use(compression());
  app.use(helmet({ crossOriginResourcePolicy: false }));
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  Sql.start();

  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(
      `Incoming-> Method: [ ${req.method}] url:[${req.url}] IP: [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      console.log(
        `Incoming-> Method: [ ${req.method}] url:[${req.url}] IP: [${req.socket.remoteAddress}]  status:[${res.statusCode}]`
      );
    });
    next();
  });

  app.get("/ping", async (req: Request, res: Response) => {
    res.send("Healthy");
  });

  app.use("/admin", adminRoutes);

  app.listen(Config.server.port, () => {
    Logger.info(`Listening at ${Config.server.port} in ${process.pid}`);
    console.log(`Server started at ${Config.server.port} in ${process.pid}`);
  });
  app.use(HandleError());
};

export default init;
