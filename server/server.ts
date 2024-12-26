import cluster from "cluster";
import os from "node:os";
import init from "./init";
import express from "express";

const app = express();
const cpuLength = os.cpus().length;

if (cluster.isPrimary) {
  //   console.log(`Primary ${process.pid} is running`);
  //   for (let i = 0; i < cpuLength; i++) {
  //     cluster.fork();
  //   }
  //   cluster.on("exit", (worker, code, signal) => {
  //     console.log(`worker ${worker.process.pid} died`);
  //   });
  init(app);
} else {
  init(app);
  //   console.log(`Worker ${process.pid} started`);
}
